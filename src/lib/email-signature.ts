import { siteConfig } from "@/lib/seo";

const COMPANY = "Ramatech Innovation";
const TAGLINE = "AI • Cloud • DevOps • Automation";
const SERVICES = "Enterprise AI Solutions | Cloud Infrastructure | Scalable Software Systems";
const MISSION = "Building intelligent, reliable, and scalable technology for modern businesses.";

const websiteLabel = siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const phoneLabel = `${siteConfig.whatsappE164.slice(0, 3)}-${siteConfig.whatsappE164.slice(3)}`;
const logoUrl = `${siteConfig.url}/brand/email-signature-logo.png`;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const SIGNATURE_TEXT = [
  "--",
  COMPANY,
  TAGLINE,
  SERVICES,
  `${siteConfig.email} | ${websiteLabel} | ${phoneLabel}`,
  MISSION,
].join("\n");

export function signatureHtml(): string {
  const font = "font-family:Arial,Helvetica,sans-serif;";
  const link = "color:#1a56db;text-decoration:underline;white-space:nowrap;";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;border-collapse:collapse;">
  <tr>
    <td style="padding:0 16px 0 0;vertical-align:middle;">
      <img src="${escapeHtml(logoUrl)}" width="96" height="96" alt="Ramatech" style="display:block;border:0;outline:none;width:96px;height:96px;">
    </td>
    <td style="padding:0 0 0 16px;border-left:3px solid #1e88e5;vertical-align:middle;${font}">
      <div style="font-size:17px;font-weight:bold;color:#0f172a;line-height:1.4;">${escapeHtml(COMPANY)}</div>
      <div style="font-size:14px;font-weight:bold;color:#0b78d0;line-height:1.5;">${escapeHtml(TAGLINE).replace(/•/g, "&#8226;")}</div>
      <div style="font-size:13px;color:#475569;line-height:1.6;padding-top:4px;">${escapeHtml(SERVICES)}</div>
      <div style="font-size:13px;color:#475569;line-height:1.6;padding-top:4px;">
        &#9993;&nbsp;<a href="mailto:${escapeHtml(siteConfig.email)}" style="${link}">${escapeHtml(siteConfig.email)}</a>
        &nbsp;|&nbsp; &#127760;&nbsp;<a href="${escapeHtml(siteConfig.url)}" style="${link}">${escapeHtml(websiteLabel)}</a>
        &nbsp;|&nbsp; <a href="tel:${escapeHtml(siteConfig.whatsappE164)}" style="${link}">${escapeHtml(phoneLabel)}</a>
      </div>
      <div style="font-size:12px;color:#64748b;line-height:1.6;padding-top:4px;">${escapeHtml(MISSION)}</div>
    </td>
  </tr>
</table>`;
}
