import type { ReactNode } from "react";
import { PageHero } from "@/components/marketing/page-hero";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";

export const metadata = createMetadata({
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  path: "/privacy",
});

const LAST_UPDATED = "1 June 2026";

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-lg font-semibold text-brand-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle information when you use our website and contact forms."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16 pb-24">
        <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

        <LegalSection title="Who we are">
          <p>
            Ramatech Innovation Pvt Ltd (&quot;Ramatech&quot;, &quot;we&quot;, &quot;us&quot;) operates
            this website to describe our engineering services. Our contact address for privacy
            inquiries is{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Information we collect">
          <p>When you submit our contact or consultation forms, we may collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Name and work email address</li>
            <li>Company name and job role</li>
            <li>Areas of interest you select</li>
            <li>Message content and optional consultation intent</li>
          </ul>
          <p>
            We also receive standard technical data from your browser and hosting logs (such as IP
            address, user agent, and timestamps) for security and reliability.
          </p>
        </LegalSection>

        <LegalSection title="How we use your information">
          <p>We use submitted information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to your inquiry and schedule technical conversations</li>
            <li>Route your request to the appropriate engineering team</li>
            <li>Improve our services and website experience</li>
            <li>Protect against spam, abuse, and fraudulent submissions</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </LegalSection>

        <LegalSection title="Retention">
          <p>
            Contact form submissions are retained for as long as needed to manage the business
            relationship and comply with legal obligations, then deleted or anonymised when no
            longer required.
          </p>
        </LegalSection>

        <LegalSection title="Third-party services">
          <p>
            Our website is hosted on Vercel. Form notifications may be delivered via Resend or
            similar email providers. These processors handle data according to their own privacy
            policies and our instructions for delivery and security.
          </p>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>
            Depending on your location, you may have rights to access, correct, or delete personal
            data we hold about you. To exercise these rights, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Updates">
          <p>
            We may update this policy from time to time. Material changes will be reflected on
            this page with an updated date.
          </p>
        </LegalSection>
      </div>
    </>
  );
}
