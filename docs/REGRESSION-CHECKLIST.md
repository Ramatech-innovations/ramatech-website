# Weekly regression checklist — Ramatech website

Run after every production deploy and once per week if no deploys.

## Automated (≈15 min)

```bash
cd ramatech-website
npm run build
npm run lint:links
```

| Check | Pass criteria |
|-------|----------------|
| Build | Exit code 0 |
| Internal links | No orphaned `/openshift/*`, `/technology/*`, `/insights/*`, `/case-studies/*` pages |

**Live sitemap** (production):

```bash
curl -s https://www.ramatech.co.in/sitemap.xml | grep -c '<loc>'
```

Expected: **69** URLs (update this number if sitemap registry changes).

**Resend env** (production host dashboard):

```bash
npm run verify:resend
```

Requires env vars locally or checks deployment platform settings.

## Manual UX (≈15 min)

- [ ] `/book-consultation` — submit with **no interests** → clear error message (not `[object Object]`)
- [ ] `/book-consultation` — valid submit → email in inbox within 5 min
- [ ] `/book-consultation?interest=openshift&source=/openshift/india` → OpenShift interest pre-selected
- [ ] OpenShift service page → WhatsApp opens with service-specific message
- [ ] `/openshift/*` sticky bar: dismiss, scroll-up peek, hides at footer CTA
- [ ] Mobile: sticky bar + WhatsApp float do not block primary CTA

## Analytics (≈10 min)

**GA4** property `G-9NP4LJYH3V`:

- [ ] `contact_form_submit` events in last 7 days
- [ ] `book_consultation_click` with `page_source` param on technology/insight pages
- [ ] `whatsapp_click` with `source` (float_button, footer_cta, etc.)

**Clarity** project `x1vr5acm34`:

- [ ] Filter URL contains `/openshift` — review 1–2 recordings/week
- [ ] Check quick backs on `/book-consultation`

## SEO (monthly)

- [ ] GSC indexed page count trending up
- [ ] Fix any redirect / 404 / 403 rows under Indexing → Pages
- [ ] Resubmit `https://www.ramatech.co.in/sitemap.xml` after major content deploys
- [ ] URL Inspection: request indexing for 5 priority URLs

## Content trust (monthly, before paid traffic)

- [ ] Case studies with `illustrative: true` still show disclaimer banner
- [ ] Review geo/city FAQ TODOs with sales (on-site, timezone)
- [ ] Confirm Red Hat partner tier wording on `/technology/red-hat`
