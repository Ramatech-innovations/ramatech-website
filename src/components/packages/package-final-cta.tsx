import { PackageCtaGroup } from "@/components/packages/package-cta-group";
import { ClosingCta } from "@/components/marketing/closing-cta";
import type { PackageLanding } from "@/content/package-landings";

export function PackageFinalCta({ landing }: { landing: PackageLanding }) {
  return (
    <ClosingCta headline={landing.finalCta.headline}>
      <PackageCtaGroup
        onDark
        analyticsLabel={landing.analyticsLabel}
        whatsappLabel={
          landing.finalCta.whatsappLabel ?? landing.hero.whatsappCtaLabel ?? "WhatsApp Us"
        }
      />
    </ClosingCta>
  );
}
