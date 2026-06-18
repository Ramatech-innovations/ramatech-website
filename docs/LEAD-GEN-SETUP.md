# Lead delivery setup — Resend

## Required production environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Sends lead emails via Resend API |
| `RESEND_FROM_EMAIL` | Verified sender (e.g. `Ramatech Website <noreply@ramatech.co.in>`) |
| `CONTACT_EMAIL` | Inbox that receives leads (defaults to `info@ramatech.co.in` if unset) |
| `NEXT_PUBLIC_SITE_URL` | `https://www.ramatech.co.in` |

See [`.env.example`](../.env.example).

## Verify configuration

```bash
npm run verify:resend
```

- **Local:** prints which vars are set (never prints secrets)
- **Production:** check your host (Vercel/Netlify/etc.) → Environment Variables

## End-to-end smoke test

1. Deploy with all vars set
2. Submit `/book-consultation` with test data (use `+test` in company name)
3. Confirm email arrives at `CONTACT_EMAIL` within 5 minutes
4. Confirm GA4 `contact_form_submit` event fires

## If leads stop arriving

1. Run `verify:resend` on production env
2. Check Resend dashboard for bounces/blocks
3. Check API logs for `503` (missing keys) or `500` (Resend API error)
4. Fallback copy on 503 tells user to email `info@ramatech.co.in` directly

## Development without Resend

In `NODE_ENV=development`, missing keys log to console and return success — intentional for local dev only. Production **never** fakes success without email.
