import { openshiftHub } from "@/content/openshift/hub";
import {
  openshiftGeoRegions,
  openshiftServices,
} from "@/content/openshift/service-catalog";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { OpenShiftServiceCards } from "@/components/openshift/openshift-service-cards";
import { OpenShiftGeoCards } from "@/components/openshift/openshift-geo-cards";
import { OpenShiftTrustBand } from "@/components/openshift/openshift-trust-band";
import { OpenShiftHubFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftProse, OpenShiftBulletList } from "@/components/openshift/openshift-content-blocks";
import { PackageSection } from "@/components/packages/package-section";
import { PAGE_CONTAINER } from "@/lib/layout";

export function OpenShiftHubPage() {
  return (
    <>
      <OpenShiftBreadcrumbs />
      <section className="section-light on-light section-pad border-b border-slate-200">
        <div className={PAGE_CONTAINER}>
          <p className="type-eyebrow mb-4">OpenShift</p>
          <h1 className="type-display max-w-4xl text-brand-ink">{openshiftHub.h1}</h1>
          <div className="mt-8 max-w-3xl">
            <OpenShiftProse paragraphs={openshiftHub.intro} />
          </div>
          <OpenShiftCtaGroup
            analyticsLabel={openshiftHub.analyticsLabel}
            whatsappMessage={openshiftHub.whatsappMessage}
            bookLabel={openshiftHub.finalCta.bookLabel}
            whatsappLabel={openshiftHub.finalCta.whatsappLabel}
            className="mt-10"
          />
        </div>
      </section>

      <PackageSection title="OpenShift services" variant="light">
        <OpenShiftServiceCards items={openshiftServices} />
      </PackageSection>

      <PackageSection title="Why Ramatech for OpenShift" variant="dark">
        <OpenShiftBulletList items={openshiftHub.whyRamatech} variant="dark" />
      </PackageSection>

      <PackageSection title="Geographic coverage" variant="light">
        <OpenShiftGeoCards items={openshiftGeoRegions} />
      </PackageSection>

      <PackageSection title="Trusted by enterprise platform teams" variant="dark">
        <OpenShiftTrustBand />
      </PackageSection>

      <OpenShiftHubFinalCta />
    </>
  );
}
