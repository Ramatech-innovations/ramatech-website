# Ramatech Website

Premium marketing site for Ramatech Innovation Pvt Ltd.

## Stack

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · shadcn-style UI

## Phase 3 (Brokerpilot-inspired UI)

- Enterprise metric blocks with scroll count-up
- Alternating capability rows + platform mock panels
- Tag marquee, CTA bands, dense footer, top utility bar

## Phase 2 (3D orchestration)

- Hero: shared R3F orchestration scene (8 nodes, globe, GSAP packets)
- Command Center: enterprise OS viz (metric cards, control plane hub, lightweight R3F)
- Docs: `docs/ux-spec-orchestration-3d.md`, `docs/adr-012-orchestration-3d-dual-canvas.md`
- Agency motion: Framer springs, scroll stagger, header shrink
- Favicon: `npm run brand:logos` (logos + favicons)

## Setup

```bash
cd ramatech-website-v2
npm install
npm run icons   # optional: regenerate favicons
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Set the public contact address in `siteConfig.email` (`src/lib/seo.ts`). Optionally set `CONTACT_EMAIL` in `.env.local` to override the form delivery inbox, and `RESEND_API_KEY` for production email delivery.
