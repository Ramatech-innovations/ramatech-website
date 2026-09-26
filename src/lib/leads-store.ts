import { formatIst, interestLabels, isTestLead, serviceLabel } from "@/lib/lead-emails";
import type { ContactApiData } from "@/lib/validations";

export type StoreResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string };

const TIMEOUT_MS = 8000;

/** Keys must match the COLUMNS list in docs/LEADS-SHEET-SETUP.md. */
export function buildLeadRow(data: ContactApiData, leadId: string): Record<string, string> {
  const ft = data.attribution?.first ?? {};
  const lt = data.attribution?.last ?? {};
  return {
    "Lead ID": leadId,
    "Time IST": formatIst(),
    Name: data.name,
    Email: data.email,
    Company: data.company,
    Role: data.role,
    Phone: data.phone ?? "",
    Service: serviceLabel(data),
    Interests: interestLabels(data.interests).join(", "),
    Message: data.message,
    Intent: data.intent ?? "contact",
    Page: data.source ?? "",
    "FT source": ft.utm_source ?? "",
    "FT medium": ft.utm_medium ?? "",
    "FT campaign": ft.utm_campaign ?? "",
    "FT term": ft.utm_term ?? "",
    "FT content": ft.utm_content ?? "",
    "LT source": lt.utm_source ?? "",
    "LT medium": lt.utm_medium ?? "",
    "LT campaign": lt.utm_campaign ?? "",
    gclid: lt.gclid ?? ft.gclid ?? "",
    gbraid: lt.gbraid ?? ft.gbraid ?? "",
    wbraid: lt.wbraid ?? ft.wbraid ?? "",
    "Landing page": lt.landing_page ?? ft.landing_page ?? "",
    Referrer: lt.referrer ?? ft.referrer ?? "",
    Device: data.attribution?.device ?? "",
    Status: isTestLead(data) ? "TEST" : "New",
  };
}

export async function storeLead(data: ContactApiData, leadId: string): Promise<StoreResult> {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) {
    return { ok: false, skipped: true, error: "LEADS_WEBHOOK_URL/SECRET not configured" };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, row: buildLeadRow(data, leadId) }),
      redirect: "follow",
      signal: controller.signal,
    });
    const body = await res.text();
    if (!res.ok) return { ok: false, error: `Sheet HTTP ${res.status}` };
    try {
      const json = JSON.parse(body) as { ok?: boolean; error?: string };
      return json.ok ? { ok: true } : { ok: false, error: json.error ?? "Sheet rejected lead" };
    } catch {
      return { ok: false, error: "Sheet returned non-JSON response" };
    }
  } catch (e) {
    const aborted = e instanceof Error && e.name === "AbortError";
    return { ok: false, error: aborted ? "Sheet timeout" : String(e) };
  } finally {
    clearTimeout(timer);
  }
}

export function storageStatusText(result: StoreResult): string {
  if (result.ok) return "saved to Ramatech Leads sheet";
  if (result.skipped) return "sheet not configured (email only)";
  return `SHEET SAVE FAILED (${result.error}) - add this lead to the sheet manually`;
}
