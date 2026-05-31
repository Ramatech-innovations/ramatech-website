import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";

export const metadata = createMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a technical conversation"
        description="Tell us about your platform, AI initiative, or automation goals. No spam, no generic sales pitch."
      />
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-lg font-semibold">What happens next</h2>
                <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <li>
                    <span className="text-brand-cyan">01</span> — We review your message within 4
                    business hours.
                  </li>
                  <li>
                    <span className="text-brand-cyan">02</span> — A senior engineer schedules a
                    focused technical call.
                  </li>
                  <li>
                    <span className="text-brand-cyan">03</span> — You receive a clear next-step
                    recommendation—no obligation.
                  </li>
                </ol>
              </div>
              <p className="text-sm text-muted-foreground">
                Email: {siteConfig.email} · Serving teams across US, UK, Europe, Southeast Asia,
                and Middle East.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
