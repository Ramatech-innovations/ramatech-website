# Lead capture test plan

Run after every deployment that touches forms, the contact API, analytics, or env vars.

## 1. Automated smoke test

```bash
npm run test:leads -- --url https://www.ramatech.co.in
```

Checks key pages (200), `/thank-you` noindex and absent from the sitemap, one valid TEST lead
(`Ramatech +test`, returns a `RT-YYYYMMDD-XXXX` lead ID), invalid payload (400), honeypot (silent
200, no lead ID), and rate limiting (429; only a warning on live because the limit is per serverless
instance). Use `--skip-lead` to avoid creating a TEST row/email, `--email you@example.com` to send the
TEST lead (and auto-reply) to another inbox.

After a run, delete or leave the `TEST` row in the sheet and the `[TEST]` email in info@.

## 2. Regression (every step)

| # | Check | Expected |
|---|-------|----------|
| R1 | `npm run build`, `npm run lint`, `npm run lint:links` | All pass |
| R2 | Submit `/contact` and `/book-consultation` | Redirect to `/thank-you?lead=RT-...` |
| R3 | Hidden `website` field filled | 200, no email, no sheet row |
| R4 | 6 submissions in a minute (local) | 6th returns 429 |
| R5 | Missing email / short message / no interest | Inline error on the form |
| R6 | WhatsApp and Book consultation CTAs | Open correctly, GA4 events fire |

## 3. Per-step checks

| # | Area | Test | Expected |
|---|------|------|----------|
| T1.1 | Attribution | Open `/?utm_source=test&utm_medium=cpc&utm_campaign=setup&gclid=TEST123`, browse to `/contact`, submit | Email + sheet show first/last touch with these values |
| T1.2 | | Revisit with `?utm_source=linkedin` and submit | Last touch = linkedin, first touch still test |
| T1.3 | | Fresh private window, no UTM | Source shows `direct` (or referrer) |
| T2.1 | Internal email | Check info@ | Subject `[Ramatech Lead] <service> · <source> · <company>`, lead ID, source block, Leads label |
| T2.2 | | Click Reply | Addressed to the lead, not info@ |
| T3.1 | Sheet | Submit a lead | Row with all columns, Status `New` (or `TEST`) |
| T3.2 | | Wrong secret in Vercel | No row; email says `SHEET SAVE FAILED` |
| T4.1 | Thank-you | Submit | Lands on `/thank-you?lead=RT-...` with the reference shown |
| T4.2 | | GA4 DebugView | `generate_lead` once; refresh does not fire it again |
| T4.3 | | Open `/thank-you` directly | Page renders, no `generate_lead` |
| T5.1 | Booking | Click booking button on thank-you, contact, book-consultation | info@ booking page opens, `booking_link_click` fires |
| T5.2 | | `NEXT_PUBLIC_BOOKING_URL` unset | Button hidden |
| T6.1 | Auto-reply | Submit with a personal Gmail | Auto-reply in inbox (not spam), from info@ |
| T6.2 | | Show original | SPF, DKIM, DMARC PASS |
| T6.3 | | Reply to the auto-reply | Arrives in info@ |
| T7.1 | Short form | `/openshift/installation-services`, `/openshift/migration-services` | Short form submits, service shown in email/sheet |
| T7.2 | | Mobile width | No horizontal scroll, fields usable |
| T7.3 | | Floating WhatsApp on an OpenShift page | Message includes the page; `whatsapp_click` has `page` |
| T8.1 | Trust | Footer | OpenShift, cloud, DevOps, AI wording |
| T8.2 | | Home command center | No numeric counters or "0" |
| T8.3 | | `/case-studies/openshift-enterprise-migration` | Anonymised pharma engagement note |

## 4. Failover behaviour (verified locally with a mock sheet)

| Sheet | Email | API result |
|-------|-------|------------|
| OK | OK | 200 + leadId |
| OK | Failed | 200 + leadId (row saved) |
| Failed | OK | 200 + leadId (email flags SHEET SAVE FAILED) |
| Failed | Failed | 500 with info@ / WhatsApp fallback |
| Failed | Resend not configured (production) | 503 with fallback |

## 5. Final live sign-off (before ads)

Open on phone, then desktop:
`https://www.ramatech.co.in/openshift/migration-services?utm_source=test&utm_medium=cpc&utm_campaign=final&utm_term=openshift%20migration&gclid=FINALTEST`

- [ ] Short form submitted, `/thank-you` shows lead ID
- [ ] Sheet row with full source and `gclid=FINALTEST`
- [ ] info@ email under Leads, phone notification, Reply goes to lead
- [ ] Auto-reply in personal Gmail inbox, SPF/DKIM/DMARC PASS
- [ ] Booking button works, `booking_link_click` in GA4
- [ ] WhatsApp opens with page in message, `whatsapp_click` in GA4
- [ ] GA4 `generate_lead` is a key event with custom dimensions populated
- [ ] Google Ads shows `generate_lead` conversion (Recording / No recent conversions)
- [ ] Clarity recorded the session
- [ ] TEST rows/emails cleaned up

All boxes ticked = ready for the Google Search test campaign.
