import { PackageCtaGroup } from "@/components/packages/package-cta-group";
import type { PackageLanding } from "@/content/package-landings";
import { PAGE_CONTAINER } from "@/lib/layout";

export function PackageFinalCta({ landing }: { landing: PackageLanding }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-16 md:py-20">
      <div className="absolute inset-0 bg-brand-gradient opacity-95" aria-hidden />
      <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />
      <div className={`${PAGE_CONTAINER} relative text-center`}>
        <h2 className="type-h2-section text-white md:text-3xl">
          {landing.finalCta.headline}
        </h2>
        <div className="flex justify-center">
          <PackageCtaGroup
            onDark
            analyticsLabel={landing.analyticsLabel}
            whatsappLabel={
              landing.finalCta.whatsappLabel ??
              landing.hero.whatsappCtaLabel ??
              "WhatsApp Us"
            }
          />
        </div>
      </div>
    </section>
  );
}
