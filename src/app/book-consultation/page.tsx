import { Suspense } from "react";
import { Check } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { BookingLink } from "@/components/marketing/booking-link";
import { BOOKING_URL } from "@/lib/booking";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER } from "@/lib/layout";

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
        description="Tell us about your OpenShift, AI, cloud, DevOps, or automation work. We reply within one business day (Mon–Sat, 10:00–19:00 IST) to schedule the call."
        breadcrumbs={<Breadcrumbs items={[{ name: "Book Consultation" }]} />}
      />
      <section className="section-light on-light py-14 md:py-16">
        <div className={`${PAGE_CONTAINER} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]`}>
          <div className="card-on-light p-6 md:p-8">
            {BOOKING_URL && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">Prefer to pick a slot directly?</p>
                <BookingLink />
              </div>
            )}
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm defaultIntent="consultation" />
            </Suspense>
          </div>
          <aside>
            <h2 className="font-heading text-lg font-semibold text-brand-ink">What to expect</h2>
            <ul className="mt-4 space-y-3">
              {WHAT_TO_EXPECT.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
