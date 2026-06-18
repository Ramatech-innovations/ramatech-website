import type { OpenShiftService } from "@/content/openshift/services";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { OpenShiftServiceHero } from "@/components/openshift/openshift-service-hero";
import { OpenShiftSectionBlocks } from "@/components/openshift/openshift-content-blocks";
import { OpenShiftCaseStudyCallout } from "@/components/openshift/openshift-case-study-callout";
import { OpenShiftMidCta } from "@/components/openshift/openshift-mid-cta";
import { OpenShiftServiceFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftInternalLinks } from "@/components/openshift/openshift-internal-links";
import { OpenshiftMigrationViz } from "@/components/case-studies/openshift-migration-viz";

function renderSection(service: OpenShiftService, section: OpenShiftService["sections"][number]) {
  return (
    <PackageSection
      key={section.id}
      title={section.title}
      variant={section.variant}
    >
      <OpenShiftSectionBlocks blocks={section.blocks} variant={section.variant} />
    </PackageSection>
  );
}

export function OpenShiftServicePage({ service }: { service: OpenShiftService }) {
  const midIndex = Math.floor(service.sections.length / 2);
  const beforeMid = service.sections.slice(0, midIndex + 1);
  const afterMid = service.sections.slice(midIndex + 1);

  return (
    <>
      <OpenShiftBreadcrumbs pageName={service.pageName} />
      <OpenShiftServiceHero service={service} />

      {beforeMid.map((section) => renderSection(service, section))}

      {service.midCta && (
        <OpenShiftMidCta
          analyticsLabel={service.analyticsLabel}
          whatsappMessage={service.whatsappMessage}
          headline={service.midCta.headline}
          bookLabel={service.midCta.bookLabel}
          whatsappLabel={service.midCta.whatsappLabel}
        />
      )}

      {afterMid.map((section) => renderSection(service, section))}

      {service.showMigrationViz && (
        <PackageSection title="Migration architecture" variant="dark">
          <div className="mx-auto max-w-4xl">
            <OpenshiftMigrationViz />
          </div>
        </PackageSection>
      )}

      {service.showCaseStudyCallout && (
        <PackageSection title="Real-world results" variant="light">
          <OpenShiftCaseStudyCallout />
        </PackageSection>
      )}

      {service.faqs.length > 0 && (
        <PackageSection title="Frequently asked questions" variant="dark">
          <PackageFaqAccordion faqs={service.faqs} variant="dark" />
        </PackageSection>
      )}

      <OpenShiftServiceFinalCta service={service} />
      <OpenShiftInternalLinks links={service.internalLinks} insightLinks={service.insightLinks} />
    </>
  );
}
