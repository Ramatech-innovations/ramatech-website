import { Suspense } from "react";
import { ThankYouContent } from "@/components/forms/thank-you-content";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

export const metadata = {
  ...createMetadata({
    title: "Thank you",
    description: "Your inquiry has reached Ramatech Innovation. We reply within 4 business hours.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title="Your inquiry is with our engineering team"
        description="We reply within 4 business hours on working days."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER_NARROW}>
          <Suspense fallback={<div className="h-72 animate-pulse rounded-xl bg-slate-100" />}>
            <ThankYouContent />
          </Suspense>
        </div>
      </MotionSection>
    </>
  );
}
