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
import { PAGE_CONTAINER } from "@/lib/layout";

export function OpenShiftGeoPageView({ geo }: { geo: OpenShiftGeoPage }) {
  return (
    <>
      <OpenShiftBreadcrumbs pageName={geo.pageName} />

      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">OpenShift · {geo.countryName}</p>
          <h1 className="type-display mt-4 max-w-4xl">{geo.h1}</h1>
          <p className="type-body-muted mt-6 max-w-2xl">{geo.heroSubtext}</p>
          <OpenShiftCtaGroup
            analyticsLabel={geo.analyticsLabel}
            whatsappMessage={geo.whatsappMessage}
            bookLabel={geo.finalCta.bookLabel}
            whatsappLabel={geo.finalCta.whatsappLabel}
            onDark
            className="mt-10"
          />
        </div>
      </section>

      <PackageSection title="Overview" variant="light">
        <OpenShiftProse paragraphs={geo.intro} />
      </PackageSection>

      <PackageSection
        title={`OpenShift services we deliver in ${geo.countryName}`}
        variant="dark"
      >
        <ul className="space-y-8">
          {geo.serviceSummaries.map((service) => (
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

      <PackageSection title="Compliance & regulatory landscape" variant="light">
        <OpenShiftProse paragraphs={geo.compliance} />
      </PackageSection>

      <PackageSection
        title={`Deployment models we support in ${geo.countryName}`}
        variant="dark"
      >
        <OpenShiftBulletList items={geo.deploymentModels} variant="dark" />
      </PackageSection>

      <PackageSection title="Proven outcomes" variant="light">
        <OpenShiftCaseStudyCallout
          href={geo.caseStudy.href}
          title={geo.caseStudy.title}
          summary={geo.caseStudy.summary}
        />
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
