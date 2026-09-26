import { sourceLabel, type Touch } from "@/lib/attribution";
import { BOOKING_URL } from "@/lib/booking";
import { escapeHtml, SIGNATURE_TEXT, signatureHtml } from "@/lib/email-signature";
import { buildWhatsAppUrl } from "@/lib/seo";
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

const NEXT_STEPS = [
  "We review your message and reply within 4 business hours (Mon-Sat, IST).",
  "We schedule a focused technical call to understand your platform and goals.",
  "You get a clear next-step recommendation, with no obligation.",
];

export function buildAutoReply(
  data: ContactApiData,
  leadId: string
): { subject: string; text: string; html: string } {
  const firstName = data.name.trim().split(/\s+/)[0] || "there";
  const service = serviceLabel(data);
  const whatsapp = buildWhatsAppUrl(`Hi Ramatech, following up on my inquiry ${leadId}.`);
  const intro = "Your inquiry has reached our engineering team.";
  const extra = "You can reply to this email with any extra details (current setup, timelines, constraints).";

  const text = [
    `Hi ${firstName},`,
    "",
    `Thanks for contacting Ramatech Innovation about ${service}. ${intro}`,
    "",
    `Reference: ${leadId}`,
    "",
    "What happens next:",
    ...NEXT_STEPS.map((step, i) => `  ${i + 1}. ${step}`),
    "",
    BOOKING_URL ? `Prefer to pick a time now? Book a 30-minute call: ${BOOKING_URL}` : null,
    `Need a quicker answer? WhatsApp us: ${whatsapp}`,
    "",
    extra,
    "",
    "Regards,",
    "Team Ramatech",
    "",
    SIGNATURE_TEXT,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const p = "margin:0 0 14px;";
  const link = "color:#1a56db;text-decoration:underline;";
  const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#1f2937;max-width:600px;padding:16px;">
  <p style="${p}">Hi ${escapeHtml(firstName)},</p>
  <p style="${p}">Thanks for contacting Ramatech Innovation about <strong>${escapeHtml(service)}</strong>. ${intro}</p>
  <p style="${p}">Reference: <strong>${escapeHtml(leadId)}</strong></p>
  <p style="margin:0 0 6px;">What happens next:</p>
  <ol style="margin:0 0 14px;padding-left:22px;">
    ${NEXT_STEPS.map((step) => `<li style="margin:0 0 4px;">${escapeHtml(step)}</li>`).join("\n    ")}
  </ol>
  ${
    BOOKING_URL
      ? `<p style="margin:0 0 6px;">Prefer to pick a time now? <a href="${escapeHtml(BOOKING_URL)}" style="${link}">Book a 30-minute call</a></p>`
      : ""
  }
  <p style="${p}">Need a quicker answer? <a href="${escapeHtml(whatsapp)}" style="${link}">WhatsApp us</a></p>
  <p style="${p}">${escapeHtml(extra)}</p>
  <p style="margin:0;">Regards,<br>Team Ramatech</p>
  ${signatureHtml()}
</div>
</body>
</html>`;

  return { subject: `We received your inquiry - Ramatech (${leadId})`, text, html };
}
