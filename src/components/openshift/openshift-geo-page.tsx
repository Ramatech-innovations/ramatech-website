import Link from "next/link";
import type { OpenShiftGeoPage } from "@/content/openshift/geo-pages";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftCaseStudyCallout } from "@/components/openshift/openshift-case-study-callout";
import {
  OpenShiftBulletList,
  OpenShiftProse,
} from "@/components/openshift/openshift-content-blocks";
import { OpenShiftFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { PageHero } from "@/components/marketing/page-hero";

export function OpenShiftGeoPageView({ geo }: { geo: OpenShiftGeoPage }) {
  return (
    <>
      <PageHero
        eyebrow={`OpenShift · ${geo.countryName}`}
        title={geo.h1}
        description={geo.heroSubtext}
        breadcrumbs={<OpenShiftBreadcrumbs pageName={geo.pageName} />}
      >
        <OpenShiftCtaGroup
          analyticsLabel={geo.analyticsLabel}
          whatsappMessage={geo.whatsappMessage}
          bookLabel={geo.finalCta.bookLabel}
          whatsappLabel={geo.finalCta.whatsappLabel}
        />
      </PageHero>

      <PackageSection title="Overview" variant="light">
        <OpenShiftProse paragraphs={geo.intro} />
      </PackageSection>

      <PackageSection
        title={
          geo.remote
            ? `OpenShift services we deliver remotely to ${geo.countryName}`
            : `OpenShift services we deliver in ${geo.countryName}`
        }
        variant="dark"
      >
        <ul className="space-y-8">
          {geo.serviceSummaries.map((service) => (
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

      <PackageSection
        title={geo.remote ? "Requirements we design for" : "Compliance & regulatory landscape"}
        variant="light"
      >
        <OpenShiftProse paragraphs={geo.compliance} />
      </PackageSection>

      {geo.cityCoverage && geo.cityCoverage.length > 0 && (
        <PackageSection title="Cities we serve" variant="dark">
          <ul className="grid gap-6 sm:grid-cols-2">
            {geo.cityCoverage.map((city) => (
              <li key={city.slug}>
                <h3 className="font-heading text-lg font-semibold text-brand-ink">
                  {city.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {city.description}
                </p>
              </li>
            ))}
          </ul>
        </PackageSection>
      )}

      <PackageSection
        title={
          geo.remote
            ? `Environments we work on for ${geo.countryName} teams`
            : `Deployment models we support in ${geo.countryName}`
        }
        variant="dark"
      >
        <OpenShiftBulletList items={geo.deploymentModels} columns={2} />
      </PackageSection>

      <PackageSection title="Related delivery experience" variant="light">
        <OpenShiftCaseStudyCallout slugs={[geo.caseStudy.href.replace("/case-studies/", "")]} />
      </PackageSection>

      <PackageSection title="Frequently asked questions" variant="dark">
        <PackageFaqAccordion faqs={geo.faqs} />
      </PackageSection>

      <OpenShiftFinalCta
        headline={geo.finalCta.headline}
        bookLabel={geo.finalCta.bookLabel}
        whatsappLabel={geo.finalCta.whatsappLabel}
        analyticsLabel={geo.analyticsLabel}
        whatsappMessage={geo.whatsappMessage}
      />
    </>
  );
}
