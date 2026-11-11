import { Suspense } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { BookingLink } from "@/components/marketing/booking-link";
import { BOOKING_URL } from "@/lib/booking";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { WhatsAppLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER } from "@/lib/layout";
import { REPLY_PROMISE } from "@/components/marketing/closing-cta";

export const metadata = createMetadata({
  title: pageMeta.bookConsultation.title,
  description: pageMeta.bookConsultation.description,
  path: "/book-consultation",
});

const WHAT_TO_EXPECT = [
  "A 30-minute call with an engineer, not a sales team",
  "We review your environment, goals, and constraints",
  "You get a clear recommendation for next steps",
  "Free, with no obligation",
];

function ContactFormFallback() {
  return <div className="h-96 animate-pulse rounded-lg bg-slate-100" aria-hidden />;
}

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Free 30-minute consultation"
        description={`Tell us about your OpenShift, AI, cloud, DevOps, or automation work. ${REPLY_PROMISE}`}
        breadcrumbs={<Breadcrumbs items={[{ name: "Book Consultation" }]} />}
      />
      <section className="section-light on-light py-14 md:py-16">
        <div className={`${PAGE_CONTAINER} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]`}>
          <div className="card-on-light space-y-8 p-6 md:p-8">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-brand-ink">Fast paths</p>
              <p className="mt-1 text-sm text-slate-600">
                Pick a slot or message WhatsApp. Use the form below if you prefer email.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {BOOKING_URL ? (
                  <BookingLink variant="default" className="min-w-[10rem]" />
                ) : null}
                <Button asChild size="default" variant={BOOKING_URL ? "secondary" : "default"}>
                  <WhatsAppLink source="book_consultation_fast">WhatsApp</WhatsAppLink>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-ink">
                Or send a short message
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                We reply within one business day to schedule the call.
              </p>
              <div className="mt-6">
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactForm defaultIntent="consultation" hideInterestGroups={["packages"]} />
                </Suspense>
              </div>
            </div>
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-ink">What to expect</h2>
              <ul className="mt-4 space-y-3">
                {WHAT_TO_EXPECT.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-ink">Delivery story</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-700">
                See how we installed OpenShift on bare metal and brought legacy VMs onto the same
                platform with OpenShift Virtualization.
              </p>
              <Link
                href="/case-studies/openshift-enterprise-migration"
                className="mt-3 inline-block text-sm font-medium text-brand-primary hover:underline"
              >
                Pharma OpenShift migration case study →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
