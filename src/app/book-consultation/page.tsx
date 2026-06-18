import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.bookConsultation.title,
  description: pageMeta.bookConsultation.description,
  path: "/book-consultation",
});

function ContactFormFallback() {
  return <div className="h-96 animate-pulse rounded-xl bg-slate-100" aria-hidden />;
}

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Book a technical consultation"
        description="Share your goals with our engineering team. We'll respond within 4 business hours with a focused next step."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER_NARROW}>
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm defaultIntent="consultation" />
          </Suspense>
        </div>
      </MotionSection>
    </>
  );
}
