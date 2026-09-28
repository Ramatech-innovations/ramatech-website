import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { WhatsAppLink } from "@/components/analytics/tracked-link";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { contactDetails } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";

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
        title="Contact us"
        description="General enquiries, partnerships, or questions about our services. We reply within one business day (Mon–Sat, 10:00–19:00 IST)."
        breadcrumbs={<Breadcrumbs items={[{ name: "Contact" }]} />}
      />
      <section className="section-light on-light py-14 md:py-16">
        <div className={`${PAGE_CONTAINER} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]`}>
          <div className="card-on-light p-6 md:p-8">
            <h2 className="font-heading text-lg font-semibold text-brand-ink">Send an enquiry</h2>
            <div className="mt-6">
              <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-slate-100" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-ink">Reach us directly</h2>
              <dl className="mt-4 space-y-4 text-[0.9375rem]">
                <div>
                  <dt className="text-sm text-slate-500">Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`} className="text-brand-primary hover:underline">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">WhatsApp</dt>
                  <dd>
                    <WhatsAppLink source="contact_page" className="text-brand-primary hover:underline">
                      {contactDetails.whatsappDisplay}
                    </WhatsAppLink>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Business hours</dt>
                  <dd className="text-slate-800">{contactDetails.hours}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-heading text-base font-semibold text-brand-ink">
                Want to talk through a project?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Book a free 30-minute consultation with an engineer instead.
              </p>
              <Link
                href="/book-consultation?source=/contact"
                className="mt-3 inline-block text-sm font-semibold text-brand-primary hover:underline"
              >
                Book Consultation →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
