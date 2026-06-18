# Cursor IDE Prompts — Ramatech OpenShift SEO Rollout

How to use this file:

- Paste **one prompt at a time** into Cursor's agent/composer, in order (Prompt 0 → 5).
- After each prompt finishes, run the build, review the generated copy yourself (especially anything factual — partner tiers, certifications, client names, local offices), then commit before moving to the next prompt.
- Every prompt repeats the same guardrail because each is meant to be self-contained: **no visual redesign, no branding changes, no navigation restructuring beyond what's explicitly listed.**
- Where a prompt asks Cursor to write facts (compliance frameworks, partner status, local presence), it's told to flag anything it can't verify from the existing codebase/content rather than invent it. Review those flags before publishing.

Quick fact I found while auditing the live site that's worth fixing first regardless of phase: `/case-studies` actually has **3** published studies (Observability Platform at Scale, Enterprise OpenShift Migration, **and AI-Driven Operations Automation** — a HealthTech triage/automation study). The original plan only accounted for 2. Prompt 2 below reflects all 3.

---

## Prompt 0 — Foundation: Schema, Sitemap, Service-Page Audit

```
You are working on the Next.js codebase for ramatech.co.in (App Router).

CONTEXT: This is Phase 0 (foundation) of an OpenShift-focused SEO rollout. Do NOT change any
visual design, branding, colors, fonts, layout, or navigation structure. Only add/extend code
for SEO infrastructure and content scaffolding.

TASKS:

1. AUDIT: Inspect the routes under /openshift/. Confirm whether all 8 of these exist and match
   the structure/depth of /openshift/installation-services (hero + intro, deployment-models
   list, numbered process steps, "what's included" list, FAQ section, related-services links,
   dual CTA):
   - installation-services (reference page — do not change)
   - deployment-services
   - migration-services
   - support-services
   - upgrade-services
   - consulting-services
   - platform-engineering
   - managed-services

   For any page that is missing or noticeably thinner than installation-services, scaffold it
   using installation-services as the structural template (same component composition, same
   section order, same heading levels). Write placeholder-quality but technically accurate
   copy for the missing sections based on the service name, and clearly mark each generated
   page with a "// TODO: content review" comment at the top of the file so I know which ones
   need my review before publishing.

2. SCHEMA COMPONENTS: Create reusable JSON-LD schema components, e.g.:
   - /components/seo/OrganizationSchema.tsx
   - /components/seo/ServiceSchema.tsx
   - /components/seo/FaqSchema.tsx
   - /components/seo/BreadcrumbSchema.tsx
   Each renders a <script type="application/ld+json"> block from props.

   - Add OrganizationSchema once, in the root layout, with:
     name: "Ramatech Innovation Pvt Ltd"
     url: "https://www.ramatech.co.in"
     logo: "https://www.ramatech.co.in/brand/logo-dark.png"
     contactPoint: { email: "info@ramatech.co.in", contactType: "sales" }
     areaServed: ["IN","AE","SA","QA","SG"]

   - Add ServiceSchema to each /openshift/{service} page with:
     serviceType = the page's H1 text
     provider = { name: "Ramatech Innovation Pvt Ltd" }
     areaServed = ["IN","AE","SA","QA","SG"]
     description = the page's existing meta description
     url = the page's canonical URL

   - Add FaqSchema to every page with a visible FAQ section. Pull the question/answer text
     directly from the page's existing FAQ content so the schema matches visible text exactly
     — do not write new FAQ copy in this task.

   - Add BreadcrumbSchema to every /openshift/* page matching the visible breadcrumb trail
     (Home > OpenShift > {Page Name}).

3. SITEMAP & ROBOTS: If /app/sitemap.ts and /app/robots.ts don't already exist using the
   Next.js metadata file conventions, create them. The sitemap should include all static
   routes plus dynamically include routes under /openshift/, /technology/, /insights/, and
   /case-studies/ — read from the filesystem or a shared route-config array so pages added in
   later phases are picked up automatically without editing this file again. Priorities:
   1.0 for / and /openshift
   0.9 for /openshift/{service} and /openshift/{country}
   0.8 for /insights/openshift and /technology
   0.7 for /insights/openshift/{topic}, /technology/{tech}, /case-studies/{study}
   0.6 for /openshift/india/{city}
   robots.ts should allow full crawl and reference the sitemap.

4. Run the build and report any errors. Do not deploy.

OUTPUT: a summary table of (a) which of the 8 service pages existed vs. were scaffolded and
flagged for review, (b) the schema component files created and which pages now use them,
(c) sitemap/robots status and build result.
```

---

## Prompt 1 — Phase 5: Geo Pages (India, UAE, Saudi Arabia, Qatar, Singapore)

```
CONTEXT: Phase 1 of the OpenShift SEO rollout — geo-targeted pages under /openshift/.
Do NOT change visual design, branding, header/footer, or global navigation beyond the single
link update described in task 4. Reuse the existing layout/components from
/openshift/installation-services (hero pattern, section components, CTA blocks, breadcrumb
component, FAQ component).

TASKS:

1. Create 5 new pages:
   - /openshift/india        (1,800–2,500 words — this is the primary market, give it the
     fuller end of the range and cover both "consulting" and "support" angles in the intro)
   - /openshift/uae           (1,800–2,200 words)
   - /openshift/saudi-arabia  (1,800–2,200 words)
   - /openshift/qatar         (1,800–2,200 words)
   - /openshift/singapore     (1,800–2,200 words)

   Each page uses this section order:

   a) H1: "OpenShift Consulting & Support Services in {Country}"

   b) Intro (2–3 paragraphs) in the same operator-level technical voice as
      installation-services — specific terms about platform challenges in that market, not
      generic marketing copy.

   c) "OpenShift services we deliver in {Country}" — one short paragraph (2–3 sentences) per
      service, each linking to its existing page:
      /openshift/installation-services, /openshift/deployment-services,
      /openshift/migration-services, /openshift/support-services,
      /openshift/upgrade-services, /openshift/consulting-services,
      /openshift/platform-engineering, /openshift/managed-services

   d) "Compliance & regulatory landscape" — write 2–3 paragraphs per country using these
      angles ONLY (do not invent specific certifications, audits, or partner statuses Ramatech
      doesn't already claim elsewhere on the site — phrase as "organizations operating under
      X must consider..." rather than "Ramatech is certified for X"):
      - India: DPDP Act 2023 data-localization expectations; BFSI sector pressure from
        RBI/IRDAI/SEBI; large PSU and enterprise on-prem estates
      - UAE: data residency expectations for government-adjacent entities; CBUAE banking
        cybersecurity requirements; Dubai/Abu Dhabi cloud-first programs
      - Saudi Arabia: SDAIA/NDMO data classification and cloud-first policy; SAMA
        cybersecurity framework for financial institutions; Vision 2030 digital
        transformation programs
      - Qatar: QCB/QFC regulatory frameworks; national cloud-first initiatives;
        energy-sector workload patterns; lean local IT teams favoring managed services
      - Singapore: MAS TRM guidelines for financial institutions; IMDA outsourcing notices;
        PDPA; APAC regional-HQ multi-region DR requirements

   e) "Deployment models we support in {Country}" — bullet list:
      - India: hybrid (on-prem + AWS/Azure India regions across Mumbai, Pune, Hyderabad,
        Bangalore, NCR); ROSA on AWS Mumbai
      - UAE: ROSA/ARO via AWS/Azure Middle East regions; on-prem with regional providers;
        hybrid for sovereign workloads
      - Saudi Arabia: sovereign cloud and on-prem for regulated workloads; ROSA/ARO via
        regional sovereign cloud regions; air-gapped for government
      - Qatar: hybrid on-prem + regional cloud; smaller cluster footprints;
        managed-services-led engagements
      - Singapore: ROSA/ARO on AWS/Azure Singapore; multi-cluster APAC disaster recovery;
        GitOps-mature buyers

   f) "Proven outcomes" callout — link to /case-studies/openshift-enterprise-migration for
      India, UAE, and Saudi Arabia; link to /case-studies/observability-platform-scale for
      Qatar and Singapore. Reuse the existing case-study callout component from the
      /openshift hub page.

   g) FAQ section (5 questions) using the existing FAQ component, localized, e.g.:
      "Do you provide on-site OpenShift support in {Country}?"
      "Which data center regions do you deploy OpenShift to for {Country}-based clients?"
      "Can you support air-gapped or on-premises OpenShift environments in {Country}?"
      "What deployment models work best for regulated industries in {Country}?"
      "How do you handle time zone coverage for {Country}-based support?"
      Write factual, non-promotional answers grounded only in the deployment-model content
      from (e) — do not invent specific SLAs, office locations, or staff counts not already
      present on the site. If a confident answer requires information you don't have, write
      the answer generically (e.g., "Support coverage is scoped during onboarding to match
      your operating hours") and add a `{/* TODO: confirm with sales */}` comment.

   h) Dual CTA block (Request a Quote / WhatsApp) reusing the existing CTA component, with the
      WhatsApp prefilled message updated to mention {Country}, e.g.
      "Hi Ramatech, I want to discuss OpenShift services for our {Country} operations."

   i) Breadcrumb: Home > OpenShift > {Country}, using the BreadcrumbSchema component from
      Phase 0 (if Phase 0 hasn't been run yet, still render the visible breadcrumb UI and add
      a TODO comment to wire schema later).

2. Metadata for each page following the existing pattern (see installation-services for
   format): title, meta description (under 160 chars, leading with the country name and one
   compliance term from (d)), OG tags, Twitter card, canonical.
   Title pattern: "OpenShift Consulting & Support Services in {Country} | Ramatech"

3. Add ServiceSchema (areaServed = the single country ISO code: IN / AE / SA / QA / SG) and
   FaqSchema to each new page using the Phase 0 schema components. If Phase 0 hasn't been run,
   skip schema and add a TODO comment instead — do not block this phase on it.

4. UPDATE /openshift (the hub page): locate the "Geographic coverage" section with the 5
   country cards currently labeled "Coming soon" and change each to a link to the
   corresponding new page above. Do not change card styling, icons, or layout — only the
   label/link.

OUTPUT: list the 5 new routes created, confirm the hub page's 5 cards now link correctly, and
list any TODO/review flags you added.
```

---

## Prompt 2 — Phase 7: Technology Pages + Phase 9: New Case Studies

```
CONTEXT: Phase 2 of the OpenShift SEO rollout — technology authority pages under
/technology/, plus two new case studies under /case-studies/. Do NOT change visual design,
branding, or navigation beyond the single addition described in task 3.

TASKS:

1. Create 7 new pages under /technology/{slug}, each 1,000–1,500 words, following this
   fixed 4-part structure (reuse the section/card components already used on the
   /technology overview page where possible):

   a) "What it is" — 2–3 paragraphs, neutral and technically accurate
   b) "Business value" — why this matters to a CTO/platform lead, not just an engineer
   c) "Ramatech expertise" — how this fits into delivery; link to relevant case study
   d) "Use cases & architecture" — 2–3 concrete patterns

   Pages and their internal-linking targets:

   - /technology/openshift
     Focus: OCP platform overview vs. vanilla Kubernetes, business value of opinionated
     defaults (integrated registry, routes, RBAC templates, OperatorHub).
     Link to ALL 8 /openshift/{service} pages in section (c) or (d).
     Link to /case-studies/openshift-enterprise-migration.

   - /technology/kubernetes
     Focus: Kubernetes fundamentals and why enterprises pair it with OpenShift rather than
     running raw K8s.
     Link to /openshift/consulting-services and /openshift/migration-services.

   - /technology/argocd
     Focus: GitOps engine, OpenShift GitOps Operator.
     Link to /openshift/deployment-services and /openshift/platform-engineering.
     Link to /case-studies/openshift-enterprise-migration (100% GitOps coverage outcome).

   - /technology/prometheus
     Focus: metrics/alerting backbone for cluster and workload monitoring.
     Link to /openshift/support-services and /openshift/managed-services.
     Link to /case-studies/observability-platform-scale.

   - /technology/grafana
     Focus: visualization/dashboards layer.
     Link to /openshift/support-services.
     Link to /case-studies/observability-platform-scale.

   - /technology/red-hat
     Focus: Red Hat ecosystem, subscriptions, OperatorHub, certified-operator model. Do NOT
     state a specific Red Hat partner tier (Ready/Advanced/Premier) unless that exact tier
     already appears elsewhere in the codebase — if unsure, write "Red Hat ecosystem
     expertise" rather than naming a tier, and add a TODO comment for marketing to confirm.
     Link to ALL 8 /openshift/{service} pages.

   - /technology/ansible
     Focus: automation/config management for cluster lifecycle operations (day-2 patching,
     node configuration consistency).
     Link to /openshift/installation-services and /openshift/managed-services.

   Metadata for each: title "{Tech} for Enterprise OpenShift Platforms | Ramatech", meta
   description under 160 chars in "what is X and how Ramatech uses it" framing, OG/Twitter/
   canonical following the existing pattern.

2. UPDATE /technology (the overview page): add an "Ansible" chip to the appropriate stack
   category (create a new "Automation" category if none fits) so /technology/ansible isn't an
   orphaned page. Make each of the 7 chips/categories that now have a dedicated deep-dive page
   (OpenShift, Kubernetes, Argo CD, Prometheus, Grafana, Red Hat, Ansible) link to its new
   /technology/{slug} page. Do not change the visual chip styling — only add hrefs.

3. Create 2 new case studies under /case-studies/, using the exact same component structure
   as the existing 3 studies (problem/approach/outcome format, architecture-diagram block,
   metrics row, "Read case study" link from /case-studies index):

   - /case-studies/openshift-gitops-automation
     "OpenShift Automation Case Study"
     Problem/Approach/Outcome should focus on: CI/CD pipeline automation, Argo CD
     ApplicationSets, policy-as-code (e.g., Kyverno/OPA Gatekeeper) reducing manual deploy
     steps. Use plausible, clearly-labeled-as-illustrative metrics in the same format as
     existing studies (e.g., "X% increase in deploy frequency", "Y% reduction in deployment
     errors") — add a TODO comment asking the team to replace illustrative numbers with real
     client metrics before publishing.
     Link this study from /openshift/deployment-services and /openshift/platform-engineering
     "related" sections, and add it to the /case-studies index grid.

   - /case-studies/openshift-platform-engineering-golden-paths
     "Platform Engineering Case Study"
     Problem/Approach/Outcome should focus on: internal developer platform, self-service
     namespace provisioning, golden-path templates, reduced time-to-first-deploy for new
     teams. Same illustrative-metrics + TODO approach as above.
     Link this study from /openshift/platform-engineering "related" sections, and add it to
     the /case-studies index grid.

4. Add Article schema (FaqSchema/ServiceSchema not needed here — use a new ArticleSchema
   component if Phase 0's schema components don't already cover Article type) to both new
   case studies: headline, author = Organization, datePublished = today's date,
   dateModified = today's date.

OUTPUT: list the 7 new /technology pages and their internal links, confirm the /technology
overview page now links to all 7, list the 2 new case studies and where they're linked from,
and list every TODO/review flag added (especially the illustrative metrics and Red Hat
partner-tier flags).
```

---

## Prompt 3 — Phase 6: OpenShift Insights Knowledge Hub (`/insights/openshift`)

```
CONTEXT: Phase 3 of the OpenShift SEO rollout — a brand-new content section, /insights, with
an OpenShift pillar/cluster. This is the largest content phase. Do NOT change visual design,
branding, or the primary navigation — but DO add an "Insights" link to the FOOTER navigation
under the existing "Company" column (alongside About, Case Studies, Technology, Contact),
since this is a net-new top-level section that needs a discoverable entry point.

TASKS:

1. Create the section index /insights and the pillar page /insights/openshift
   (800–1,200 words). The pillar page should:
   - Introduce Ramatech's point of view on OpenShift (operator-level voice, consistent with
     /openshift hub page)
   - Link to all 12 cluster articles below (use a card/list layout consistent with how
     /case-studies or /technology already present grids of items — reuse that component)
   - Link back to the /openshift commercial hub
   - Get Article (or CollectionPage) schema

2. Create these 12 articles under /insights/openshift/{slug}. Work through them in batches
   of 3–4 per session if context gets large — maintain the same page template for every
   article: H1, intro, body sections with H2/H3, a "Related services" box (links from the
   table below), a "Related technology" box, a "Related reading" box (1–2 other articles from
   this list), and Article schema (headline, datePublished, dateModified, author =
   Organization).

   | Slug | Primary keyword | Word target | Related services (link box) | Related technology (link box) | Related reading |
   |---|---|---|---|---|---|
   | installation-guide | openshift installation guide | 2000-2500 | /openshift/installation-services | /technology/openshift, /technology/red-hat | upgrade-planning |
   | deployment-best-practices | openshift deployment best practices | 1800-2200 | /openshift/deployment-services | /technology/argocd | gitops |
   | upgrade-planning | openshift upgrade planning | 1500-2000 | /openshift/upgrade-services | /technology/red-hat | installation-guide |
   | virtualization | openshift virtualization (OpenShift Virtualization / CNV) | 1800-2200 | /openshift/platform-engineering, /openshift/migration-services | /technology/openshift | multi-cluster-management |
   | openshift-vs-kubernetes | openshift vs kubernetes | 2000-2500 | /openshift/consulting-services | /technology/openshift, /technology/kubernetes | ai-integration |
   | gitops | openshift gitops | 1800-2200 | /openshift/deployment-services, /openshift/platform-engineering | /technology/argocd | multi-cluster-management |
   | monitoring | openshift monitoring | 1800-2200 | /openshift/support-services, /openshift/managed-services | /technology/prometheus, /technology/grafana | disaster-recovery |
   | security | openshift security best practices | 2000-2500 | /openshift/consulting-services, /openshift/support-services | /technology/red-hat | cost-optimization |
   | multi-cluster-management | openshift multi cluster management | 1500-2000 | /openshift/platform-engineering, /openshift/managed-services | /technology/argocd | gitops |
   | disaster-recovery | openshift disaster recovery | 1800-2200 | /openshift/support-services, /openshift/managed-services | /technology/openshift | monitoring |
   | cost-optimization | openshift cost optimization | 1500-2000 | /openshift/consulting-services, /openshift/managed-services | /technology/red-hat | security |
   | ai-integration | openshift ai integration (OpenShift AI / RHOAI) | 2000-2500 | /openshift/consulting-services, /openshift/platform-engineering | /technology/openshift, /technology/red-hat | openshift-vs-kubernetes |

   For each article's primary keyword, include it naturally in the H1, the first 100 words,
   and at least one H2. Write in the same specific, operator-level register as
   installation-services — concrete configuration/architecture detail, not generic "OpenShift
   is great because..." filler.

3. CROSS-LINK BACKFILL: for every /openshift/{service} page and /technology/{tech} page
   referenced as a "related service/technology" target above, add a reciprocal link back to
   the relevant /insights/openshift/{slug} article(s) in that page's existing "related
   links"/"related resources" section. Do not duplicate links if the section is already at
   its visual limit — instead extend the component to support one or two additional items, or
   add a small new "From our Insights hub" sub-block, matching existing styling.

4. Metadata for each article: title "{Topic Title} — OpenShift Guide | Ramatech Insights",
   meta description under 160 chars including the primary keyword near the start, OG/Twitter/
   canonical following the existing pattern.

OUTPUT: list all 13 new pages (pillar + 12 articles), confirm the footer "Insights" link was
added, and list every page that received a reciprocal "from Insights" link in step 3.
```

---

## Prompt 4 — Phase 10: Programmatic India City Pages

```
CONTEXT: Phase 4 (final content phase) of the OpenShift SEO rollout — India city pages under
/openshift/india/. Do NOT change visual design, branding, or navigation. This phase has a
content-quality guardrail: do not generate all 4 pages with interchangeable text — each must
have a genuinely different local-context paragraph per the table below.

TASKS:

1. Create 4 pages under /openshift/india/{city}:
   - /openshift/india/bangalore
   - /openshift/india/hyderabad
   - /openshift/india/mumbai
   - /openshift/india/noida

   Each page (1,200–1,800 words) uses this structure:

   a) H1: "OpenShift Consulting & Support Services in {City}"

   b) Local context paragraph (300–400 words, must be unique — do not template this) using:
      - Bangalore: SaaS/startup ecosystem, high-Kubernetes-maturity product engineering teams
        — angle toward platform engineering and GitOps
      - Hyderabad: BFSI, pharma, and large global-capability-center campuses — angle toward
        compliance-aware migration and managed services
      - Mumbai: BFSI headquarters, NBFCs, RBI regulatory pressure — angle toward security/
        consulting and disaster recovery
      - Noida: government, PSU, and IT-services-heavy enterprises — angle toward on-prem/
        air-gapped installation and migration

   c) "Services available in {City}" — short summaries linking to the relevant
      /openshift/{service} pages (choose 4–5 most relevant to that city's angle from (b)
      rather than listing all 8 — e.g., Bangalore emphasizes platform-engineering and
      deployment-services; Noida emphasizes installation-services and migration-services).

   d) Compliance note — one paragraph linking to /openshift/india for the full DPDP/sector
      regulatory detail rather than repeating it verbatim (avoid duplicate content with the
      parent page).

   e) FAQ (3–5 questions), localized, e.g. "Do you provide on-site OpenShift support in
      {City}?", "Which data centers near {City} do you deploy to?" — same factual,
      non-promotional, TODO-flag-if-unsure approach as Prompt 1.

   f) Dual CTA, WhatsApp message updated to mention {City}.

   g) Breadcrumb: Home > OpenShift > India > {City}.

   IMPORTANT: Do NOT include a "local proof / testimonial" section unless real, verifiable
   client information for that specific city already exists in the codebase or content
   files. If none exists, omit that section entirely rather than fabricating a testimonial or
   client logo.

2. UPDATE /openshift/india: add a "City coverage" section linking to the 4 new city pages
   (parent-only link — do not add these city pages to the global footer, header nav, or the
   main /openshift hub page, to avoid diluting the country-level geo signal).

3. Add ServiceSchema (areaServed = "IN", with a more specific addressLocality if the schema
   component supports it) and BreadcrumbSchema to each city page using the Phase 0 components.

4. Build and confirm no errors.

OUTPUT: list the 4 new routes, confirm /openshift/india now links to all 4, and confirm no
city page contains a fabricated testimonial/proof section.
```

---

## Prompt 5 — Engagement & Interaction Enhancements

```
CONTEXT: This phase adds interactive/engagement features identified during a review of the
live site. Apply ONLY to the pages/sections listed — do not change global visual design,
color palette, typography, or branding. Reuse existing UI primitives (buttons, cards,
accordions) wherever the design system already has them; only introduce new components where
none exists.

TASKS:

1. FAQ ACCORDION + SCHEMA SYNC: On every page with an FAQ section (existing
   /openshift/{service} pages and all new pages from Prompts 1–4), confirm FAQs render as an
   expand/collapse accordion (if they currently render as static headings with no visible
   answers, that's a UX gap — make the answer text visible on click/expand). Make sure the
   FaqSchema for each page is generated FROM the same data source as the visible accordion
   content (single source of truth) so schema never drifts from what users see.

2. STICKY "TALK TO AN OPENSHIFT ENGINEER" BAR: Add a slim sticky CTA bar (collapsible/
   dismissible, reappears on scroll-up) to all /openshift/* pages (services, geo, city pages).
   It should show "Talk to an OpenShift Engineer" with the existing Request-a-Quote and
   WhatsApp buttons. Use existing button styles. Make sure it doesn't overlap the existing
   footer CTA block on mobile — it should hide once the footer CTA is in viewport.

3. FLOATING WHATSAPP BUTTON (SITE-WIDE): Add a small floating WhatsApp icon button (bottom
   corner, respecting safe-area on mobile) site-wide, linking to the existing WhatsApp number
   with a generic prefilled message ("Hi Ramatech, I have a question about your services.").
   If a similar floating element already exists, skip this task and report that it's already
   present.

4. "RELATED RESOURCES" WIDGET COMPONENT: Build one reusable <RelatedResources> component that
   takes a list of {title, href, type: "service" | "insight" | "technology" | "case-study"}
   and renders as a small card row with a type badge. Use this component to implement all the
   "related services / related technology / related reading" link boxes added in Prompts 2–4,
   replacing any ad-hoc link lists with this consistent component.

5. TABLE OF CONTENTS + READING PROGRESS for /insights/openshift/{topic} articles: add a sticky
   sidebar (desktop) / collapsible top section (mobile) table of contents generated from the
   article's H2s, with a thin scroll-progress indicator. This is new only for the /insights
   section — do not add it to /openshift/* pages.

6. "OPENSHIFT VS KUBERNETES" COMPARISON TABLE COMPONENT: Build a <ComparisonTable> component
   (sticky header row, mobile-responsive horizontal scroll) and use it inside
   /insights/openshift/openshift-vs-kubernetes and /technology/kubernetes to compare OpenShift
   vs. vanilla Kubernetes across rows like: default security model, registry, routing/
   ingress, operator lifecycle management, supported install methods, support model. Populate
   factually based on content already written for /technology/openshift and
   /technology/kubernetes.

7. HOMEPAGE STAT COUNTERS — VERIFY: The homepage "Proof at production scale" and "Infrastructure
   Command Center" sections render values like "0.00%", "0%+", "0 weeks", "<0 min", and "0" for
   metrics like Applications Managed / Clusters Managed / Automations Running. Check whether
   these are (a) animated counters that correctly count up to real configured values on
   mount, or (b) actually configured with 0/placeholder values. If (b), do not invent numbers
   — add a `{/* TODO: marketing to provide real values for stat counters */}` comment at each
   location and leave the display as-is. If (a), no change needed — just confirm in your
   output.

8. INTERNAL LINKING LINT: Add a simple script (e.g. /scripts/check-internal-links.ts, run via
   `npm run lint:links`) that crawls the route config / sitemap data and reports any
   /openshift/*, /technology/*, /insights/* or /case-studies/* page that has zero inbound
   internal links from other pages in the same set — this catches orphaned pages from any
   phase of this rollout (e.g., if /technology/ansible isn't linked from /technology as
   required in Prompt 2). Run it now and report any orphans found.

OUTPUT: for each of the 8 tasks, report what was added/changed, what already existed and was
skipped, and any orphaned pages found by the linting script in task 8.
```

---

## Notes on sequencing

- Prompts 0–4 correspond to Sprints 0–3 in the implementation roadmap (Prompt 4 covers Sprint 4's city pages but can run earlier if you want the content work done before the wait-and-monitor period between city-page launches — just don't *publish*/index all 4 simultaneously; stage their `noindex` removal 2 weeks apart per the original plan's guardrail).
- Prompt 5 can run any time after Prompt 0 (it depends on the FaqSchema/ServiceSchema components), but task 6 depends on `/technology/kubernetes` and `/insights/openshift/openshift-vs-kubernetes` existing (Prompts 2 and 3), and task 4 is most useful if run *during* Prompts 2–4 rather than after, so those phases can use `<RelatedResources>` directly instead of ad-hoc links that need refactoring later. If you're running phases strictly in order, just re-run Prompt 5's task 4 as a quick refactor pass after Prompt 4.
- After each prompt, spot-check the rendered pages on a staging deploy for the things Cursor can't validate itself: real compliance claims, partner-tier statements, and any TODO-flagged illustrative metrics in the new case studies — these directly affect legal/marketing accuracy and shouldn't go live unreviewed.
