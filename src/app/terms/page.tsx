import type { ReactNode } from "react";
import { PageHero } from "@/components/marketing/page-hero";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.terms.title,
  description: pageMeta.terms.description,
  path: "/terms",
});

const LAST_UPDATED = "1 June 2026";

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="type-h3 text-brand-ink">{title}</h2>
      <div className="type-body-card mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Terms for using the Ramatech Innovation website and related materials."
      />
      <div className={`${PAGE_CONTAINER_NARROW} py-16 pb-24`}>
        <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

        <LegalSection title="Agreement">
          <p>
            By accessing www.ramatech.co.in (the &quot;Site&quot;), you agree to these Terms of
            Service. If you do not agree, please do not use the Site.
          </p>
        </LegalSection>

        <LegalSection title="Services">
          <p>
            Content on this Site describes engineering services offered by Ramatech Innovation Pvt
            Ltd. Nothing on the Site constitutes a binding offer or contract until agreed in a
            separate written statement of work or master services agreement.
          </p>
        </LegalSection>

        <LegalSection title="Use of the Site">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the Site for unlawful purposes or to transmit malware or spam</li>
            <li>Attempt to gain unauthorised access to our systems or data</li>
            <li>Scrape or automate access in a way that impairs Site performance</li>
            <li>Misrepresent your identity in contact or consultation forms</li>
          </ul>
        </LegalSection>

        <LegalSection title="Intellectual property">
          <p>
            Text, graphics, logos, and other materials on the Site are owned by Ramatech or its
            licensors and protected by applicable intellectual property laws. You may not copy,
            modify, or distribute Site content without prior written permission, except for
            personal, non-commercial reference.
          </p>
        </LegalSection>

        <LegalSection title="Disclaimer">
          <p>
            The Site is provided &quot;as is&quot; for general information. We do not warrant that
            the Site will be uninterrupted or error-free. Case studies and metrics illustrate
            past engagements and are not guarantees of future results.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, Ramatech shall not be liable for indirect,
            incidental, or consequential damages arising from use of the Site. Our total
            liability for claims related to the Site is limited to the extent permitted under
            applicable law.
          </p>
        </LegalSection>

        <LegalSection title="Governing law">
          <p>
            These terms are governed by the laws of India. Courts in India shall have exclusive
            jurisdiction, subject to mandatory consumer protections in your jurisdiction if
            applicable.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </>
  );
}
