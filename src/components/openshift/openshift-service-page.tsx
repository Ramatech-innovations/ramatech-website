import type { OpenShiftService } from "@/content/openshift/services";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { OpenShiftServiceHero } from "@/components/openshift/openshift-service-hero";
import { OpenShiftSectionBlocks } from "@/components/openshift/openshift-content-blocks";
import { OpenShiftCaseStudyCallout } from "@/components/openshift/openshift-case-study-callout";
import { OpenShiftMidCta } from "@/components/openshift/openshift-mid-cta";
import { OpenShiftServiceFinalCta } from "@/components/openshift/openshift-final-cta";
import { OpenShiftInternalLinks } from "@/components/openshift/openshift-internal-links";
import { OpenShiftLeadForm } from "@/components/openshift/openshift-lead-form";
import { OpenshiftMigrationViz } from "@/components/case-studies/openshift-migration-viz";

const CASE_STUDIES_BY_SERVICE: Record<string, string[]> = {
  "installation-services": ["openshift-enterprise-migration", "openshift-operations-automation"],
  "migration-services": ["openshift-enterprise-migration", "openshift-helm-gitops-production"],
  "deployment-services": ["openshift-jenkins-argocd-cicd", "openshift-helm-gitops-production"],
  "support-services": ["openshift-operations-automation", "openshift-enterprise-migration"],
  "upgrade-services": ["openshift-operations-automation", "openshift-helm-gitops-production"],
  "consulting-services": ["openshift-enterprise-migration", "openshift-jenkins-argocd-cicd"],
  "platform-engineering": ["openshift-jenkins-argocd-cicd", "openshift-operations-automation"],
  "managed-services": ["openshift-operations-automation", "openshift-enterprise-migration"],
};

function renderSection(section: OpenShiftService["sections"][number]) {
  return (
    <PackageSection key={section.id} title={section.title} variant={section.variant}>
      <OpenShiftSectionBlocks blocks={section.blocks} variant={section.variant} />
    </PackageSection>
  );
}

export function OpenShiftServicePage({ service }: { service: OpenShiftService }) {
  const midIndex = Math.floor(service.sections.length / 2);
  const beforeMid = service.sections.slice(0, midIndex + 1);
  const afterMid = service.sections.slice(midIndex + 1);
  const studySlugs = CASE_STUDIES_BY_SERVICE[service.slug];

  return (
    <>
      <OpenShiftServiceHero service={service} />

      {beforeMid.map(renderSection)}

      {service.midCta && (
        <OpenShiftMidCta
          analyticsLabel={service.analyticsLabel}
          whatsappMessage={service.whatsappMessage}
          headline={service.midCta.headline}
          bookLabel={service.midCta.bookLabel}
          whatsappLabel={service.midCta.whatsappLabel}
        />
      )}

      {afterMid.map(renderSection)}

      {service.showMigrationViz && (
        <PackageSection title="Migration architecture" variant="dark">
          <div className="max-w-4xl">
            <OpenshiftMigrationViz />
          </div>
        </PackageSection>
      )}

      {studySlugs && (
        <PackageSection title="Delivery experience" variant="light">
          <OpenShiftCaseStudyCallout slugs={studySlugs} />
        </PackageSection>
      )}

      {service.faqs.length > 0 && (
        <PackageSection title="Frequently asked questions" variant="dark">
          <PackageFaqAccordion faqs={service.faqs} />
        </PackageSection>
      )}

      <OpenShiftLeadForm slug={service.slug} />

      <OpenShiftInternalLinks links={service.internalLinks} insightLinks={service.insightLinks} />
      <OpenShiftServiceFinalCta service={service} />
    </>
  );
}
