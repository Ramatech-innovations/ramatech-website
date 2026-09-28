import { openshiftHub } from "@/content/openshift/hub";
import {
  openshiftGeoRegions,
  openshiftServices,
} from "@/content/openshift/service-catalog";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { OpenShiftServiceCards } from "@/components/openshift/openshift-service-cards";
import { OpenShiftGeoCards } from "@/components/openshift/openshift-geo-cards";
import { OpenShiftHubFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftProse, OpenShiftBulletList } from "@/components/openshift/openshift-content-blocks";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { PackageSection } from "@/components/packages/package-section";
import { PageHero } from "@/components/marketing/page-hero";

export function OpenShiftHubPage() {
  const [lead, ...rest] = openshiftHub.intro;

  return (
    <>
      <PageHero
        eyebrow="OpenShift"
        title={openshiftHub.h1}
        description={lead}
        breadcrumbs={<OpenShiftBreadcrumbs />}
      >
        <OpenShiftCtaGroup
          analyticsLabel={openshiftHub.analyticsLabel}
          whatsappMessage={openshiftHub.whatsappMessage}
          bookLabel={openshiftHub.finalCta.bookLabel}
          whatsappLabel={openshiftHub.finalCta.whatsappLabel}
        />
      </PageHero>

      <PackageSection title="OpenShift services" variant="dark">
        <OpenShiftServiceCards items={openshiftServices} />
      </PackageSection>

      <PackageSection title="How we work on OpenShift" variant="light">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <OpenShiftProse paragraphs={rest} />
            <p className="mt-6 border-l-2 border-brand-primary/30 pl-4 text-sm leading-relaxed text-slate-600">
              {openshiftHub.licensesDisclaimer}
            </p>
          </div>
          <OpenShiftBulletList items={openshiftHub.whyRamatech} />
        </div>
      </PackageSection>

      <PackageSection title="Delivery experience" variant="dark">
        <CaseStudyCards />
      </PackageSection>

      <PackageSection title="Remote delivery" variant="light">
        <p className="mb-8 max-w-2xl text-slate-600">
          We are based in India. Engagements outside India are delivered remotely, with
          on-site visits agreed per contract.
        </p>
        <OpenShiftGeoCards items={openshiftGeoRegions} />
      </PackageSection>

      <OpenShiftHubFinalCta />
    </>
  );
}
