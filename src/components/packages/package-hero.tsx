import type { PackageLanding } from "@/content/package-landings";
import { PackageCtaGroup } from "@/components/packages/package-cta-group";
import { PackageBreadcrumbs } from "@/components/packages/package-breadcrumbs";
import { PageHero } from "@/components/marketing/page-hero";

export function PackageHero({ landing }: { landing: PackageLanding }) {
  return (
    <PageHero
      eyebrow="Service package"
      title={landing.hero.h1}
      description={landing.hero.subtext}
      breadcrumbs={<PackageBreadcrumbs landing={landing} />}
    >
      <PackageCtaGroup
        analyticsLabel={landing.analyticsLabel}
        whatsappLabel={landing.hero.whatsappCtaLabel ?? "WhatsApp Us"}
      />
    </PageHero>
  );
}
