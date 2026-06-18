import Link from "next/link";
import type { OpenShiftIndiaCityPage } from "@/content/openshift/india-city-pages";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { OpenShiftFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

function ComplianceNote({ text }: { text: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/;
  const match = text.match(linkPattern);

  if (!match || match.index === undefined) {
    return <OpenShiftProse paragraphs={[text]} />;
  }

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <p className="text-base leading-relaxed text-slate-700 md:text-[1.0625rem] md:leading-[1.75]">
      {before}
      <Link href={match[2]} className="font-medium text-brand-primary hover:underline">
        {match[1]}
      </Link>
      {after}
    </p>
  );
}

export function OpenShiftIndiaCityPageView({ city }: { city: OpenShiftIndiaCityPage }) {
  return (
    <>
      <OpenShiftBreadcrumbs
        trail={[{ name: "India", path: "/openshift/india" }]}
        pageName={city.pageName}
      />

      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">OpenShift · India · {city.cityName}</p>
          <h1 className="type-display mt-4 max-w-4xl">{city.h1}</h1>
          <p className="type-body-muted mt-6 max-w-2xl">{city.heroSubtext}</p>
          <OpenShiftCtaGroup
            analyticsLabel={city.analyticsLabel}
            whatsappMessage={city.whatsappMessage}
            bookLabel={city.finalCta.bookLabel}
            whatsappLabel={city.finalCta.whatsappLabel}
            onDark
            className="mt-10"
          />
        </div>
      </section>

      <PackageSection title={`OpenShift in ${city.cityName}`} variant="light">
        <OpenShiftProse paragraphs={city.localContext} />
      </PackageSection>

      <PackageSection
        title={`Services available in ${city.cityName}`}
        variant="dark"
      >
        <ul className="space-y-8">
          {city.serviceSummaries.map((service) => (
            <li key={service.href}>
              <h3 className="font-heading text-lg font-semibold text-white">
                <Link href={service.href} className="hover:text-brand-cyan">
                  {service.label}
                </Link>
              </h3>
              <div className="mt-3 text-slate-300">
                <OpenShiftProse paragraphs={service.paragraphs} />
              </div>
            </li>
          ))}
        </ul>
      </PackageSection>

      <PackageSection title="Compliance & regulatory context" variant="light">
        <ComplianceNote text={city.complianceNote} />
      </PackageSection>

      <PackageSection title="Frequently asked questions" variant="dark">
        <PackageFaqAccordion faqs={city.faqs} variant="dark" />
      </PackageSection>

      <OpenShiftFinalCta
        headline={city.finalCta.headline}
        bookLabel={city.finalCta.bookLabel}
        whatsappLabel={city.finalCta.whatsappLabel}
        analyticsLabel={city.analyticsLabel}
        whatsappMessage={city.whatsappMessage}
      />
    </>
  );
}
