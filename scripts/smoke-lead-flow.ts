/**
 * Post-deploy smoke test for the lead-capture flow.
 *
 * Usage:
 *   npm run test:leads -- --url https://www.ramatech.co.in
 *   npm run test:leads -- --url http://localhost:3000 --skip-lead
 *
 * Options:
 *   --url <base>     Site to test (default http://localhost:3000)
 *   --email <addr>   Email used for the TEST lead (default info@ramatech.co.in)
 *   --skip-lead      Do not submit the valid TEST lead (no email / sheet row)
 */

type Result = { name: string; status: "PASS" | "FAIL" | "WARN"; detail: string };

const args = process.argv.slice(2);
function arg(name: string, fallback?: string): string | undefined {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
}

const BASE = (arg("url", "http://localhost:3000") as string).replace(/\/$/, "");
const EMAIL = arg("email", "info@ramatech.co.in") as string;
const SKIP_LEAD = args.includes("--skip-lead");
const IS_LOCAL = /localhost|127\.0\.0\.1/.test(BASE);

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36 RamatechSmokeTest/1.0",
  Accept: "text/html,application/json;q=0.9,*/*;q=0.8",
};

const KEY_PAGES = [
  "/",
  "/contact",
  "/book-consultation",
  "/openshift/installation-services",
  "/openshift/migration-services",
  "/thank-you",
];

const results: Result[] = [];
const record = (name: string, status: Result["status"], detail: string) =>
  results.push({ name, status, detail });

const now = new Date().toISOString();
const testTouch = {
  utm_source: "smoke",
  utm_medium: "test",
  utm_campaign: "post-deploy-smoke",
  gclid: "SMOKETEST",
  landing_page: "/openshift/migration-services?utm_source=smoke",
  ts: now,
};

const validLead = {
  name: "Smoke Test",
  email: EMAIL,
  company: "Ramatech +test",
  role: "Founder",
  interests: ["openshift"],
  message: "Automated post-deploy smoke test - please ignore.",
  consent: true,
  intent: "contact",
  source: "smoke-test",
  service: "OpenShift Migration",
  attribution: { first: testTouch, last: testTouch, device: "script" },
};

async function postContact(body: unknown) {
  const res = await fetch(`${BASE}/api/contact`, {
    method: "POST",
    headers: { ...HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let json: Record<string, unknown> = {};
  try {
    json = (await res.json()) as Record<string, unknown>;
  } catch {
    // non-JSON (e.g. WAF block page)
  }
  return { status: res.status, json };
}

async function checkPages() {
  for (const path of KEY_PAGES) {
    try {
      const res = await fetch(`${BASE}${path}`, { headers: HEADERS, redirect: "follow" });
      record(`GET ${path}`, res.status === 200 ? "PASS" : "FAIL", `HTTP ${res.status}`);
      if (path === "/thank-you" && res.status === 200) {
        const html = await res.text();
        const noindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
        record("/thank-you is noindex", noindex ? "PASS" : "FAIL", noindex ? "robots noindex" : "missing noindex");
      }
    } catch (e) {
      record(`GET ${path}`, "FAIL", String(e));
    }
  }
}

async function checkSitemap() {
  try {
    const res = await fetch(`${BASE}/sitemap.xml`, { headers: HEADERS });
    const xml = await res.text();
    const listed = xml.includes("/thank-you");
    record(
      "/thank-you absent from sitemap",
      res.status === 200 && !listed ? "PASS" : "FAIL",
      res.status !== 200 ? `sitemap HTTP ${res.status}` : listed ? "listed in sitemap" : "not listed"
    );
  } catch (e) {
    record("/thank-you absent from sitemap", "FAIL", String(e));
  }
}

async function checkValidLead() {
  if (SKIP_LEAD) {
    record("Valid TEST lead", "WARN", "skipped (--skip-lead)");
    return;
  }
  const { status, json } = await postContact(validLead);
  const leadId = typeof json.leadId === "string" ? json.leadId : "";
  const ok = status === 200 && json.success === true && /^RT-\d{8}-[A-Z0-9]{4}$/.test(leadId);
  record(
    "Valid TEST lead",
    ok ? "PASS" : "FAIL",
    ok ? `HTTP 200, leadId ${leadId} (check sheet row + info@ email)` : `HTTP ${status} ${JSON.stringify(json)}`
  );
}

async function checkInvalid() {
  const { status } = await postContact({ name: "x", email: "not-an-email", consent: true });
  record("Invalid payload rejected", status === 400 ? "PASS" : "FAIL", `HTTP ${status}`);
}

async function checkHoneypot() {
  const { status, json } = await postContact({ ...validLead, website: "https://spam.example" });
  const ok = status === 200 && json.success === true && !("leadId" in json);
  record("Honeypot silently accepted", ok ? "PASS" : "FAIL", `HTTP ${status} ${JSON.stringify(json)}`);
}

async function checkRateLimit() {
  let got429 = false;
  for (let i = 0; i < 6 && !got429; i++) {
    const { status } = await postContact({ name: "x" });
    if (status === 429) got429 = true;
  }
  if (got429) record("Rate limit (429)", "PASS", "429 returned within burst");
  else
    record(
      "Rate limit (429)",
      IS_LOCAL ? "FAIL" : "WARN",
      IS_LOCAL ? "no 429 after burst" : "no 429 (in-memory limit is per serverless instance)"
    );
}

async function main() {
  console.log(`Lead flow smoke test -> ${BASE}\n`);
  const checks: [string, () => Promise<void>][] = [
    ["Pages", checkPages],
    ["Sitemap", checkSitemap],
    ["Valid TEST lead", checkValidLead],
    ["Invalid payload rejected", checkInvalid],
    ["Honeypot silently accepted", checkHoneypot],
    ["Rate limit (429)", checkRateLimit],
  ];
  for (const [name, check] of checks) {
    try {
      await check();
    } catch (e) {
      record(name, "FAIL", e instanceof Error ? `${e.message} ${String(e.cause ?? "")}` : String(e));
    }
  }

  const width = Math.max(...results.map((r) => r.name.length));
  for (const r of results) {
    console.log(`${r.status.padEnd(4)}  ${r.name.padEnd(width)}  ${r.detail}`);
  }
  const failed = results.filter((r) => r.status === "FAIL").length;
  const warned = results.filter((r) => r.status === "WARN").length;
  console.log(`\n${results.length - failed - warned} passed, ${warned} warnings, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
