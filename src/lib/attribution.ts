/** First/last-touch marketing attribution stored in the browser for lead forms. */

export type Touch = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  referrer?: string;
  landing_page?: string;
  ts?: string;
};

export type Attribution = {
  first?: Touch;
  last?: Touch;
  device?: string;
};

const FIRST_KEY = "rt_ft";
const LAST_KEY = "rt_lt";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const MAX_LEN = 300;

const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

const memory: Record<string, string> = {};

function cap(value: string): string {
  return value.slice(0, MAX_LEN);
}

function readStore(key: string): Touch | undefined {
  let raw: string | null | undefined;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    raw = memory[key];
  }
  if (!raw) return undefined;
  try {
    const touch = JSON.parse(raw) as Touch;
    if (touch.ts && Date.now() - Date.parse(touch.ts) > MAX_AGE_MS) return undefined;
    return touch;
  } catch {
    return undefined;
  }
}

function writeStore(key: string, touch: Touch): void {
  const raw = JSON.stringify(touch);
  try {
    window.localStorage.setItem(key, raw);
  } catch {
    memory[key] = raw;
  }
}

function externalReferrer(): string | undefined {
  const ref = document.referrer;
  if (!ref) return undefined;
  try {
    const refHost = new URL(ref).hostname.replace(/^www\./, "");
    const ownHost = window.location.hostname.replace(/^www\./, "");
    return refHost === ownHost ? undefined : cap(ref);
  } catch {
    return undefined;
  }
}

function currentTouch(): { touch: Touch; hasCampaign: boolean } {
  const params = new URLSearchParams(window.location.search);
  const touch: Touch = {};
  let hasCampaign = false;
  for (const key of PARAM_KEYS) {
    const value = params.get(key);
    if (value) {
      touch[key] = cap(value);
      hasCampaign = true;
    }
  }
  const referrer = externalReferrer();
  if (referrer) touch.referrer = referrer;
  touch.landing_page = cap(window.location.pathname + window.location.search);
  touch.ts = new Date().toISOString();
  return { touch, hasCampaign };
}

export function detectDevice(): string {
  const ua = navigator.userAgent;
  if (/iPad|Tablet/i.test(ua)) return "tablet";
  if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
  return "desktop";
}

/** Call once per full page load. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const { touch, hasCampaign } = currentTouch();
  if (!readStore(FIRST_KEY)) writeStore(FIRST_KEY, touch);
  if (hasCampaign || touch.referrer || !readStore(LAST_KEY)) writeStore(LAST_KEY, touch);
}

export function getAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;
  return {
    first: readStore(FIRST_KEY),
    last: readStore(LAST_KEY),
    device: detectDevice(),
  };
}

/** Short "source / medium" label for analytics and email subjects. */
export function sourceLabel(touch?: Touch): string {
  if (!touch) return "direct";
  if (touch.utm_source) return `${touch.utm_source}/${touch.utm_medium ?? "none"}`;
  if (touch.gclid || touch.gbraid || touch.wbraid) return "google/cpc";
  if (touch.referrer) {
    try {
      return `${new URL(touch.referrer).hostname.replace(/^www\./, "")}/referral`;
    } catch {
      return "referral";
    }
  }
  return "direct";
}
