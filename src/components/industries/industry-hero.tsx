import type { IndustryLanding } from "@/content/industry-landings";
import { IndustryCtaGroup } from "@/components/industries/industry-cta-group";
import { IndustryBreadcrumbs } from "@/components/industries/industry-breadcrumbs";
import { PageHero } from "@/components/marketing/page-hero";

export function IndustryHero({ landing }: { landing: IndustryLanding }) {
  return (
    <PageHero
      eyebrow={`Industries · ${landing.industryName}`}
      title={landing.h1}
      description={landing.heroSubtext}
      breadcrumbs={<IndustryBreadcrumbs landing={landing} />}
    >
      <IndustryCtaGroup
        analyticsLabel={landing.analyticsLabel}
        whatsappMessage={landing.whatsappMessage}
        bookLabel={landing.finalCta.bookLabel ?? "Book Free Consultation"}
        whatsappLabel={landing.finalCta.whatsappLabel ?? "Chat on WhatsApp"}
      />
    </PageHero>
  );
}
