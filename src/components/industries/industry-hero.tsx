import Image from "next/image";
import type { IndustryLanding } from "@/content/industry-landings";
import { IndustryCtaGroup } from "@/components/industries/industry-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

export function IndustryHero({ landing }: { landing: IndustryLanding }) {
  return (
    <section className="section-dark relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={landing.heroImage}
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]" />
      </div>
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className={`${PAGE_CONTAINER} relative py-16 md:py-24`}>
        <p className="type-eyebrow">Industry solutions</p>
        <h1 className="type-display mt-4 max-w-4xl">{landing.h1}</h1>
        <p className="type-body-muted mt-6 max-w-2xl">{landing.heroSubtext}</p>
        <IndustryCtaGroup
          analyticsLabel={landing.analyticsLabel}
          whatsappMessage={landing.whatsappMessage}
          bookLabel={landing.finalCta.bookLabel ?? "Book Free Consultation"}
          whatsappLabel={landing.finalCta.whatsappLabel ?? "Chat on WhatsApp"}
          onDark
          className="mt-10"
        />
      </div>
    </section>
  );
}
