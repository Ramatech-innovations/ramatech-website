import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";

export const metadata = createMetadata({
  title: pageMeta.bookConsultation.title,
  description: pageMeta.bookConsultation.description,
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Book a technical consultation"
        description="Share your goals with our engineering team. We'll respond within 4 business hours with a focused next step."
      />
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <ContactForm defaultIntent="consultation" />
        </div>
      </MotionSection>
    </>
  );
}
