# Ads readiness setup (GA4 + Google Ads)

Do this after the lead-capture code is live and `npm run test:leads` passes against production.
Use **info@ramatech.co.in** for every account below. Do not launch campaigns until the final
checklist in [LEAD-CAPTURE-TEST-PLAN.md](./LEAD-CAPTURE-TEST-PLAN.md) is fully ticked.

## Events the site sends

| Event | When | Key params |
|-------|------|-----------|
| `generate_lead` | Once per lead, on `/thank-you` | `service`, `intent`, `page`, `lead_source`, `lead_id` |
| `contact_form_submit` | Form accepted by the API | `intent`, `source` |
| `booking_link_click` | Booking button clicked | `page` |
| `whatsapp_click` | Any WhatsApp link | `source`, `page` (floating button) |
| `openshift_cta_click` | OpenShift book / WhatsApp CTAs | `label`, `cta` |
| `contact_form_error` | Validation or API error | `reason` |

## 1. GA4 (property G-9NP4LJYH3V)

1. **Admin → Events**: after the first live test lead, toggle **Mark as key event** on `generate_lead`.
2. **Admin → Custom definitions → Create custom dimension** (scope: Event), one each:
   - `service` (event parameter `service`)
   - `intent` (event parameter `intent`)
   - `page` (event parameter `page`)
   - `lead_source` (event parameter `lead_source`)
3. **Admin → Product links → Search Console links**: link `https://www.ramatech.co.in`.
4. **Admin → Product links → Google Ads links**: link the Google Ads account (created with info@),
   enable personalised advertising and auto-tagging when prompted.
5. Check: **Admin → DebugView** while submitting a TEST lead (use the Google Tag Assistant Chrome
   extension to enable debug mode). `generate_lead` must appear exactly once.

## 2. Google Ads (account owned by info@)

1. **Admin → Account settings → Auto-tagging**: ON (adds `gclid` to ad clicks; the site stores it
   and writes it to the leads sheet).
2. **Goals → Conversions → New conversion action → Import → Google Analytics 4 properties → Web**:
   - `generate_lead` → set as **Primary**, category *Submit lead form*, count **One**.
   - `booking_link_click` → **Secondary**, count **One**.
   - `whatsapp_click` → **Secondary**, count **One**.
3. Attribution model: Data-driven (default). Click-through window: 30 days.
4. Status should move to **Recording conversions** or **No recent conversions** within 24-48h after
   the final live test.
5. **Do not create campaigns yet.**

## 3. Later: offline conversions (after first real leads)

The sheet stores `gclid` for every ad-sourced lead. When a lead becomes Qualified or Won, those rows
can be uploaded in **Goals → Conversions → Uploads** so Google Ads optimises for real customers
rather than form fills. Set this up once there are at least a handful of qualified leads.

## 4. Sign-off

Run the final live checklist in [LEAD-CAPTURE-TEST-PLAN.md](./LEAD-CAPTURE-TEST-PLAN.md#5-final-live-sign-off-before-ads).
When every box is ticked, the site is ready for the Google Search test campaign.
