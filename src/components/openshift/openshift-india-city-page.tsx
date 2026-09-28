import Link from "next/link";
import type { OpenShiftIndiaCityPage } from "@/content/openshift/india-city-pages";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { OpenShiftFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { PageHero } from "@/components/marketing/page-hero";

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
      <PageHero
        eyebrow={`OpenShift · India · ${city.cityName}`}
        title={city.h1}
        description={city.heroSubtext}
        breadcrumbs={
          <OpenShiftBreadcrumbs
            trail={[{ name: "India", path: "/openshift/india" }]}
            pageName={city.pageName}
          />
        }
      >
        <OpenShiftCtaGroup
          analyticsLabel={city.analyticsLabel}
          whatsappMessage={city.whatsappMessage}
          bookLabel={city.finalCta.bookLabel}
          whatsappLabel={city.finalCta.whatsappLabel}
        />
      </PageHero>

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
              <h3 className="font-heading text-lg font-semibold text-brand-ink">
                <Link href={service.href} className="hover:text-brand-primary">
                  {service.label}
                </Link>
              </h3>
              <div className="mt-3">
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
        <PackageFaqAccordion faqs={city.faqs} />
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
