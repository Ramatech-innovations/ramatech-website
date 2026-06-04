import type { PackageLanding } from "@/content/package-landings";
import { PackageBreadcrumbs } from "@/components/packages/package-breadcrumbs";
import { PackageHero } from "@/components/packages/package-hero";
import { PackageSection } from "@/components/packages/package-section";
import { PackageAudienceGrid } from "@/components/packages/package-audience-grid";
import { PackageProblemsGrid } from "@/components/packages/package-problems-grid";
import { PackageUseCaseTabs } from "@/components/packages/package-use-case-tabs";
import { PackageDeliverables } from "@/components/packages/package-deliverables";
import { PackageTimeline } from "@/components/packages/package-timeline";
import { PackagePricing } from "@/components/packages/package-pricing";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { PackageExamplesList } from "@/components/packages/package-examples-list";
import { PackageFinalCta } from "@/components/packages/package-final-cta";
import { PackageInternalLinks } from "@/components/packages/package-internal-links";

export function PackageLandingPage({ landing }: { landing: PackageLanding }) {
  return (
    <>
      <PackageBreadcrumbs landing={landing} />
      <PackageHero landing={landing} />

      <PackageSection title="Who is this for" variant="dark">
        <PackageAudienceGrid items={landing.audience} />
      </PackageSection>

      {landing.problems.length > 0 && (
        <PackageSection title="Problems solved" variant="light">
          <PackageProblemsGrid problems={landing.problems} />
        </PackageSection>
      )}

      {landing.useCases && landing.useCases.length > 0 && (
        <PackageSection title="Automation use cases" variant="dark">
          <PackageUseCaseTabs useCases={landing.useCases} />
        </PackageSection>
      )}

      {landing.examples && landing.examples.length > 0 && (
        <PackageSection title="Example systems we build" variant="dark">
          <PackageExamplesList examples={landing.examples} />
        </PackageSection>
      )}

      <PackageSection title="What's included" variant="light">
        <PackageDeliverables items={landing.deliverables} variant="light" />
      </PackageSection>

      <PackageSection title="Timeline" variant="dark">
        <PackageTimeline timeline={landing.timeline} />
      </PackageSection>

      <PackageSection title="Starting price" variant="light">
        <PackagePricing pricing={landing.pricing} />
      </PackageSection>

      <PackageSection title="Frequently asked questions" variant="dark">
        <PackageFaqAccordion faqs={landing.faqs} />
      </PackageSection>

      <PackageFinalCta landing={landing} />
      <PackageInternalLinks links={landing.internalLinks} />
    </>
  );
}
