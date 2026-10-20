import { siteConfig } from "@/lib/seo";

/** CLAIMS-safe outbound signature (DEC-2026-036 v1.2). Matches Gmail info@. */
const SLOGAN = "Make it run.";
const TEAM = "Solutions team";
const PILLARS = "OpenShift · AI · DevOps · SAP";

const websiteLabel = siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const phoneLabel = "+91 98282 41244";
const logoUrl = `${siteConfig.url}/brand/logo-stacked.png`;
const socialBase = `${siteConfig.url}/brand/social`;

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
  "Ramatech Innovation",
  TEAM,
  SLOGAN,
  PILLARS,
  `${siteConfig.email} | ${websiteLabel} | ${phoneLabel}`,
  "LinkedIn | X | YouTube | WhatsApp",
].join("\n");

export function signatureHtml(): string {
  const font = "font-family:Arial,Helvetica,sans-serif;";
  const link = "color:#0a4c95;text-decoration:none;";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;border-collapse:collapse;max-width:520px;">
  <tr>
    <td style="padding:0 16px 0 0;vertical-align:middle;">
      <a href="${escapeHtml(siteConfig.url)}/?utm_source=email&amp;utm_medium=signature&amp;utm_campaign=transactional" style="text-decoration:none;">
        <img src="${escapeHtml(logoUrl)}" width="80" height="64" alt="Ramatech Innovation" style="display:block;border:0;outline:none;">
      </a>
    </td>
    <td style="padding:0 0 0 16px;border-left:2px solid #0a4c95;vertical-align:middle;${font}">
      <div style="font-size:13px;font-weight:700;color:#0a1628;line-height:1.35;margin:0 0 4px;">Solutions team</div>
      <div style="font-size:13px;font-style:italic;color:#0a4c95;line-height:1.35;margin:0 0 6px;">${escapeHtml(SLOGAN)}</div>
      <div style="font-size:12px;font-weight:700;color:#0a4c95;line-height:1.35;margin:0 0 8px;">OpenShift&nbsp;&middot;&nbsp;AI&nbsp;&middot;&nbsp;DevOps&nbsp;&middot;&nbsp;SAP</div>
      <div style="font-size:12px;color:#475569;line-height:1.45;margin:0 0 10px;">
        <a href="mailto:${escapeHtml(siteConfig.email)}" style="${link}">${escapeHtml(siteConfig.email)}</a>
        <span style="color:#cbd5e1;">&nbsp;|&nbsp;</span>
        <a href="${escapeHtml(siteConfig.url)}/?utm_source=email&amp;utm_medium=signature&amp;utm_campaign=transactional" style="${link}">${escapeHtml(websiteLabel)}</a>
        <span style="color:#cbd5e1;">&nbsp;|&nbsp;</span>
        <a href="https://wa.me/919828241244" style="${link}">${escapeHtml(phoneLabel)}</a>
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
        <td style="padding-right:8px;"><a href="https://www.linkedin.com/company/ramatechinnovation"><img src="${escapeHtml(socialBase)}/linkedin.png" width="18" height="18" alt="LinkedIn" style="display:block;border:0;"></a></td>
        <td style="padding-right:8px;"><a href="https://x.com/RamatechIOVN"><img src="${escapeHtml(socialBase)}/x.png" width="18" height="18" alt="X" style="display:block;border:0;"></a></td>
        <td style="padding-right:8px;"><a href="https://www.youtube.com/@RamatechIOVN"><img src="${escapeHtml(socialBase)}/youtube.png" width="18" height="18" alt="YouTube" style="display:block;border:0;"></a></td>
        <td><a href="https://wa.me/919828241244"><img src="${escapeHtml(socialBase)}/whatsapp.png" width="18" height="18" alt="WhatsApp" style="display:block;border:0;"></a></td>
      </tr></table>
    </td>
  </tr>
</table>`;
}
