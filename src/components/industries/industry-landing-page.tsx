import type { IndustryLanding } from "@/content/industry-landings";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { IndustryHero } from "@/components/industries/industry-hero";
import { IndustryPainPoints } from "@/components/industries/industry-pain-points";
import { IndustrySolutions } from "@/components/industries/industry-solutions";
import { IndustryPackages } from "@/components/industries/industry-packages";
import { IndustryCaseStudyLinks } from "@/components/industries/industry-case-study-links";
import { IndustryFinalCta } from "@/components/industries/industry-final-cta";
import { IndustryInternalLinks } from "@/components/industries/industry-internal-links";

export function IndustryLandingPage({ landing }: { landing: IndustryLanding }) {
  return (
    <>
      <IndustryHero landing={landing} />

      <PackageSection title="Sound familiar?" variant="light">
        <IndustryPainPoints items={landing.painPoints} />
      </PackageSection>

      <PackageSection title="How Ramatech helps" variant="dark">
        <IndustrySolutions items={landing.solutions} />
      </PackageSection>

      <PackageSection title="Relevant packages" variant="light">
        <IndustryPackages packages={landing.packages} />
      </PackageSection>

      {landing.caseStudyLinks && landing.caseStudyLinks.length > 0 && (
        <PackageSection title="Related case studies" variant="light">
          <IndustryCaseStudyLinks links={landing.caseStudyLinks} />
        </PackageSection>
      )}

      <PackageSection title="Frequently asked questions" variant="dark">
        <PackageFaqAccordion faqs={landing.faqs} />
      </PackageSection>

      <IndustryInternalLinks relatedSlugs={landing.relatedIndustries} />
      <IndustryFinalCta landing={landing} />
    </>
  );
}
