import type { ReactNode } from "react";
import { PageHero } from "@/components/marketing/page-hero";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  path: "/privacy",
});

const LAST_UPDATED = "27 September 2026";
const EXTERNAL_LINK = "text-brand-primary hover:underline";

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="type-h3 text-brand-ink">{title}</h2>
      <div className="type-body-card mt-3 space-y-3">{children}</div>
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
      <div className={`${PAGE_CONTAINER_NARROW} py-16 pb-24`}>
        <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

        <LegalSection title="Who we are">
          <p>
            Ramatech Innovation (&quot;Ramatech&quot;, &quot;we&quot;, &quot;us&quot;) operates
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
            <li>Phone number (optional)</li>
            <li>Areas of interest you select</li>
            <li>Message content and optional consultation intent</li>
          </ul>
          <p>
            We also receive standard technical data from your browser and hosting logs (such as IP
            address, user agent, and timestamps) for security and reliability.
          </p>
          <p>
            To understand how you found us, your browser stores the campaign or referring source of
            your visit (for example UTM parameters or an ad click ID) and sends it with any inquiry
            you submit. We use it only to handle your inquiry and measure which channels work.
          </p>
        </LegalSection>

        <LegalSection title="Analytics and cookies">
          <p>
            We use Google Analytics and Microsoft Clarity to understand how visitors use this
            website, for example which pages are viewed, how people navigate, and which device and
            browser they use. Clarity also records anonymised session replays and heatmaps showing
            clicks, scrolling and mouse movement. Text typed into form fields is masked and is not
            captured in these recordings.
          </p>
          <p>
            These tools set cookies, such as Google Analytics <code>_ga</code> cookies and Clarity{" "}
            <code>_clck</code>/<code>_clsk</code> cookies, to recognise returning visits. We use
            this data only in aggregate to improve the website. We do not use it to identify you,
            and we do not sell it.
          </p>
          <p>
            You can opt out by blocking cookies in your browser, by using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={EXTERNAL_LINK}
            >
              Google Analytics opt-out add-on
            </a>
            , or by using a tracking-blocking browser extension. For details, see the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={EXTERNAL_LINK}
            >
              Google Privacy Policy
            </a>{" "}
            and the{" "}
            <a
              href="https://privacy.microsoft.com/privacystatement"
              target="_blank"
              rel="noopener noreferrer"
              className={EXTERNAL_LINK}
            >
              Microsoft Privacy Statement
            </a>
            .
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
            Our website is hosted on Vercel. Inquiry emails are delivered through Resend, and
            inquiries are stored in Google Workspace (Google Sheets), which we also use for email
            and calendar bookings through Google Calendar. We use Google Analytics and Microsoft
            Clarity for website analytics. If you choose to contact us on WhatsApp, that
            conversation is handled by WhatsApp (Meta) under its own privacy policy. These
            providers process data under their own privacy policies and our instructions.
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
