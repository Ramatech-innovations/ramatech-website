import type { PackageLanding } from "@/content/package-landings";
import { PackageCtaGroup } from "@/components/packages/package-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

export function PackageHero({ landing }: { landing: PackageLanding }) {
  return (
    <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
        aria-hidden
      />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className={`${PAGE_CONTAINER} relative`}>
        <p className="type-eyebrow">Service package</p>
        <h1 className="type-display mt-4 max-w-4xl">{landing.hero.h1}</h1>
        <p className="type-body-muted mt-6 max-w-2xl">{landing.hero.subtext}</p>
        <PackageCtaGroup
          analyticsLabel={landing.analyticsLabel}
          whatsappLabel={landing.hero.whatsappCtaLabel ?? "WhatsApp Us"}
        />
      </div>
    </section>
  );
}
