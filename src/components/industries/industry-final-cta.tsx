import type { IndustryLanding } from "@/content/industry-landings";
import { IndustryCtaGroup } from "@/components/industries/industry-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

export function IndustryFinalCta({ landing }: { landing: IndustryLanding }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-16 md:py-20">
      <div className="absolute inset-0 bg-brand-gradient opacity-95" aria-hidden />
      <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />
      <div className={`${PAGE_CONTAINER} relative text-center`}>
        <h2 className="type-h2-section text-white md:text-3xl">
          {landing.finalCta.headline}
        </h2>
        <div className="flex justify-center">
          <IndustryCtaGroup
            analyticsLabel={landing.analyticsLabel}
            whatsappMessage={landing.whatsappMessage}
            bookLabel={landing.finalCta.bookLabel ?? "Book Free Consultation"}
            whatsappLabel={
              landing.finalCta.whatsappLabel ?? "Chat on WhatsApp"
            }
            onDark
            className="mt-10"
          />
        </div>
      </div>
    </section>
  );
}
