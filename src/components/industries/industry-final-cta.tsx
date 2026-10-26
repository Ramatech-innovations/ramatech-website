import type { IndustryLanding } from "@/content/industry-landings";
import { IndustryCtaGroup } from "@/components/industries/industry-cta-group";
import { ClosingCta } from "@/components/marketing/closing-cta";

export function IndustryFinalCta({ landing }: { landing: IndustryLanding }) {
  return (
    <ClosingCta headline={landing.finalCta.headline}>
      <IndustryCtaGroup
        analyticsLabel={landing.analyticsLabel}
        whatsappMessage={landing.whatsappMessage}
        bookLabel={landing.finalCta.bookLabel ?? "Book Free Consultation"}
        whatsappLabel={landing.finalCta.whatsappLabel ?? "Chat on WhatsApp"}
        onDark
      />
    </ClosingCta>
  );
}
