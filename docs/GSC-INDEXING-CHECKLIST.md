# Google Search Console indexing checklist — Ramatech

Use after each production deploy that touches SEO, redirects, or OpenShift pages.  
Property: **Domain** `ramatech.co.in` (covers www + non-www).

## Post-deploy smoke checks (before GSC)

```bash
# Expect 301 → /
curl -sI https://www.ramatech.co.in/index.html | head -5

# Expect 301 → /favicon.ico
curl -sI https://www.ramatech.co.in/assets/favicon.ico | head -5

# Expect 200
curl -sI https://www.ramatech.co.in/favicon.ico | head -5

# Expect Disallow: /cgi-bin/ and /api/
curl -s https://www.ramatech.co.in/robots.txt
```

---

## Step 1 — Clean junk sitemaps (5 min)

1. GSC → **Sitemaps**
2. For each `demo.ramatech.co.in` row with **Couldn't fetch**, remove the sitemap
3. Confirm only `https://www.ramatech.co.in/sitemap.xml` remains **Success** (~69 pages)

## Step 2 — Confirm preferred host (2 min)

1. **URL Inspection** → `https://www.ramatech.co.in/`
2. Confirm the URL is on Google (or canonical points to www)
3. Inspect `https://ramatech.co.in/` → expect redirect to www  
   This matches **Page with redirect** — **do not** treat as a bug or spam Validate fix

## Step 3 — Validate real 404 fixes (after deploy)

1. **Page indexing → Not found (404)**
2. Examples should include `/index.html` and `/assets/favicon.ico` (legacy)
3. After redirects are live → **Validate fix**
4. Wait days–weeks for Google to recrawl

## Step 4 — Leave these alone

| GSC reason | Why |
|---|---|
| **Page with redirect** (apex / http variants) | Correct canonicalization to `https://www.ramatech.co.in/` |
| **Alternative page with proper canonical** (`book-consultation?source=…`) | Tracking params correctly collapse to `/book-consultation` |
| **Blocked 403** `/cgi-bin/` | Hosting junk; also disallowed in `robots.txt` |
| Font `.woff2` under `/_next/static/` | Asset noise — not a landing page |

## Step 5 — Request indexing for money pages (20–30 min)

**URL Inspection → Request indexing** (daily quota is limited). Do Priority 1 first.

### Priority 1 — OpenShift clients

1. `https://www.ramatech.co.in/openshift/installation-services`
2. `https://www.ramatech.co.in/openshift/migration-services`
3. `https://www.ramatech.co.in/openshift`
4. `https://www.ramatech.co.in/openshift/support-services`
5. `https://www.ramatech.co.in/openshift/managed-services`
6. `https://www.ramatech.co.in/openshift/platform-engineering`
7. `https://www.ramatech.co.in/openshift/india`
8. `https://www.ramatech.co.in/openshift/india/bangalore`

### Priority 2 — Insights already earning interest

9. `https://www.ramatech.co.in/insights/openshift/security`
10. `https://www.ramatech.co.in/insights/openshift/installation-guide`
11. `https://www.ramatech.co.in/insights/openshift/gitops`
12. `https://www.ramatech.co.in/insights/openshift/openshift-vs-kubernetes`
13. `https://www.ramatech.co.in/insights/openshift/multi-cluster-management`

### Skip for now

`/industries/restaurants`, `/industries/law-firms`, `/industries/smes`, and similar — low value for OpenShift pipeline.

## Step 6 — Recheck in 7–14 days

1. **Page indexing** — indexed count should rise from ~47 toward the high 50s+
2. **Performance → Pages** — watch install / migration / hub
3. **Performance → Queries** — look for non-brand OpenShift terms
4. Do **not** re-request indexing on the same URL every day

## Step 7 — Hosting (optional)

Primary domain: `www.ramatech.co.in` with apex + http → https www redirects (already reflected in GSC).

---

## Code that supports this checklist

| Change | Location |
|---|---|
| `/index.html` → `/`, `/assets/favicon.ico` → `/favicon.ico` | `next.config.ts` |
| Disallow `/cgi-bin/`, `/api/` | `src/app/robots.ts` |
| Favicon.ico in metadata | `src/app/layout.tsx` |
| Stable `lastModified` + money-page priorities | `src/lib/site-routes.ts` |
| Hub “Most requested” + install/migrate related links | OpenShift hub / services content |

Indexing improvements typically take **2–6 weeks**. These steps clean crawl errors and prioritize money pages; they do not replace outbound or brand proof for pipeline.
