# Analytics & lead-gen setup — Ramatech

## GA4 property

- **Measurement ID:** `G-9NP4LJYH3V` (loaded in [`src/components/analytics/analytics-scripts.tsx`](../src/components/analytics/analytics-scripts.tsx))
- **Clarity ID:** `x1vr5acm34` (same file)

## Mark conversions in GA4 Admin

GA4 → **Admin** → **Events** → mark as conversions:

| Event | Meaning |
|-------|---------|
| `contact_form_submit` | Lead captured in inbox |
| `book_consultation_click` | High-intent CTA click |
| `openshift_cta_click` | OpenShift book/WhatsApp (param `cta`) |
| `whatsapp_click` | Warm lead — manual follow-up (param `source`) |

Optional: `contact_form_error` for funnel drop-off analysis.

## Custom parameters to use in reports

| Parameter | Set on | Example values |
|-----------|--------|----------------|
| `page_source` | `book_consultation_click` | `/technology/kubernetes`, `/insights/openshift/gitops` |
| `interest` | `book_consultation_click` | `openshift`, `devops-platform-engineering` |
| `source` | `contact_form_submit` | `/openshift/india`, `direct` |
| `source` | `whatsapp_click` | `float_button`, `footer_cta` |
| `intent` | `contact_form_submit` | `consultation`, `contact` |

## Recommended Exploration funnel

1. GA4 → **Explore** → **Funnel exploration**
2. Steps:
   - Page view: URL contains `/openshift`
   - Event: `book_consultation_click`
   - Event: `contact_form_submit`

Segment by `page_source` to see which pages convert.

## Link GA4 ↔ Search Console

GA4 → **Admin** → **Product links** → **Search Console** → Link `ramatech.co.in`

## Microsoft Clarity

1. **Settings** → confirm Google Analytics link is active
2. Create **filters:**
   - URL contains `/openshift`
   - URL contains `/insights/openshift`
3. **Smart events:** keep monitoring Contact us; add custom tags for book CTA if needed
4. Weekly: watch recordings where user reached `/book-consultation` but did not submit

## Gmail inbox filters (no CRM)

Filter incoming Resend emails:

- Subject contains `Consultation` → label **High priority**
- Subject contains `Contact` → label **Inbound lead**

Reply SLA: **4 business hours** (matches form copy).

## Lead email fields

API includes in plain-text body: name, email, company, role, phone (optional), interests, **source page**, message.

Use `Source page` to attribute which URL drove the lead.
