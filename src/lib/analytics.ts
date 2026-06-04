/** GA4 event helpers — Measurement ID loaded in AnalyticsScripts */

export function trackEvent(
  name: string,
  params?: Record<string, string>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, { event_category: "CTA", ...params });
}
