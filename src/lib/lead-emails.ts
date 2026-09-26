import { sourceLabel, type Touch } from "@/lib/attribution";
import { contactInterestOptions } from "@/lib/contact-interests";
import type { ContactApiData } from "@/lib/validations";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

export function generateLeadId(now = new Date()): string {
  const ist = new Date(now.getTime() + IST_OFFSET_MS);
  const date = ist.toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = crypto.randomUUID().replace(/-/g, "").slice(0, 4).toUpperCase();
  return `RT-${date}-${suffix}`;
}

export function formatIst(now = new Date()): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(now);
}

export function isTestLead(data: Pick<ContactApiData, "company">): boolean {
  return data.company.toLowerCase().includes("+test");
}

export function interestLabels(slugs: string[]): string[] {
  return slugs.map(
    (slug) => contactInterestOptions.find((o) => o.slug === slug)?.label ?? slug
  );
}

export function serviceLabel(data: ContactApiData): string {
  if (data.service) return data.service;
  const labels = interestLabels(data.interests);
  return labels.length > 0 ? labels.join(", ") : "General inquiry";
}

export function leadSourceLabel(data: ContactApiData): string {
  return sourceLabel(data.attribution?.last ?? data.attribution?.first);
}

function touchLines(title: string, touch?: Touch): string {
  if (!touch) return `${title}: (none)`;
  const rows = [
    ["Source / medium", sourceLabel(touch)],
    ["Campaign", touch.utm_campaign],
    ["Term", touch.utm_term],
    ["Content", touch.utm_content],
    ["Landing page", touch.landing_page],
    ["Referrer", touch.referrer],
    ["gclid", touch.gclid],
    ["gbraid", touch.gbraid],
    ["wbraid", touch.wbraid],
    ["Captured", touch.ts],
  ].filter(([, v]) => Boolean(v));
  return [`${title}:`, ...rows.map(([k, v]) => `  ${k}: ${v}`)].join("\n");
}

export function buildInternalEmail(
  data: ContactApiData,
  leadId: string,
  storageStatus: string
): { subject: string; text: string } {
  const service = serviceLabel(data);
  const prefix = isTestLead(data) ? "[TEST] " : "";
  const subject = `${prefix}[Ramatech Lead] ${service} · ${leadSourceLabel(data)} · ${data.company}`;

  const text = [
    `New ${data.intent ?? "contact"} inquiry from ramatech.co.in`,
    `Lead ID: ${leadId}`,
    `Received: ${formatIst()} IST`,
    "",
    "CONTACT",
    `  Name: ${data.name}`,
    `  Email: ${data.email}`,
    `  Company: ${data.company}`,
    `  Role: ${data.role}`,
    data.phone ? `  Phone: ${data.phone}` : null,
    "",
    "REQUEST",
    `  Service: ${service}`,
    `  Interests: ${interestLabels(data.interests).join(", ") || "-"}`,
    data.source ? `  Source page: ${data.source}` : null,
    "",
    "MESSAGE",
    data.message,
    "",
    "SOURCE",
    touchLines("First touch", data.attribution?.first),
    touchLines("Last touch", data.attribution?.last),
    `Device: ${data.attribution?.device ?? "-"}`,
    "",
    `Lead storage: ${storageStatus}`,
    "Reply to this email to respond to the lead directly.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, text };
}
