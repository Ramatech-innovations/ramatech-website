import Link from "next/link";
import type { TechnologyPage } from "@/content/technology-types";
import { caseStudies } from "@/content/case-studies";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { PackageSection } from "@/components/packages/package-section";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import {
  RelatedResources,
  linksWithInferredType,
  linksToResources,
} from "@/components/marketing/related-resources";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { openshiftKubernetesComparison } from "@/content/openshift-kubernetes-comparison";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

/** Form interest preset and the case-study stack label to match, per technology. */
const TECH_CONTEXT: Record<string, { interest: string; stackMatch?: string }> = {
  openshift: { interest: "openshift", stackMatch: "OpenShift" },
  kubernetes: { interest: "openshift", stackMatch: "OpenShift" },
  "red-hat": { interest: "openshift", stackMatch: "OpenShift" },
  argocd: { interest: "devops-platform-engineering", stackMatch: "Argo CD" },
  ansible: { interest: "devops-platform-engineering", stackMatch: "Ansible" },
  prometheus: { interest: "devops-platform-engineering" },
  grafana: { interest: "devops-platform-engineering" },
};

export function TechnologyPageView({ page }: { page: TechnologyPage }) {
  const context = TECH_CONTEXT[page.slug] ?? { interest: "openshift" };
  const studySlugs = context.stackMatch
    ? caseStudies.filter((c) => c.stack.includes(context.stackMatch!)).map((c) => c.slug)
    : [];
  const pageSource = `/technology/${page.slug}`;

  return (
    <>
      <PageHero
        eyebrow={`Technology · ${page.techName}`}
        title={page.h1}
        description={page.heroSubtext}
        breadcrumbs={
          <Breadcrumbs
            items={[{ name: "Technology", href: "/technology" }, { name: page.techName }]}
          />
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <BookConsultationLink pageSource={pageSource} interest={context.interest}>
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/openshift">OpenShift services</Link>
          </Button>
        </div>
      </PageHero>

      <PackageSection title="What it is" variant="dark">
        <OpenShiftProse paragraphs={page.whatItIs} />
      </PackageSection>

      <PackageSection title="Business value" variant="light">
        <OpenShiftProse paragraphs={page.businessValue} />
      </PackageSection>

      <PackageSection title="How we use it" variant="dark">
        <OpenShiftProse paragraphs={page.ramatechExpertise} />
      </PackageSection>

      {page.slug === "kubernetes" && (
        <PackageSection title="OpenShift vs Kubernetes at a glance" variant="light">
          <ComparisonTable data={openshiftKubernetesComparison} />
        </PackageSection>
      )}

      <PackageSection title="Use cases and architecture" variant={page.slug === "kubernetes" ? "dark" : "light"}>
        <OpenShiftProse paragraphs={page.useCases} />
      </PackageSection>

      {studySlugs.length > 0 && (
        <PackageSection title={`Case studies using ${page.techName}`} variant={page.slug === "kubernetes" ? "light" : "dark"}>
          <CaseStudyCards slugs={studySlugs} />
        </PackageSection>
      )}

      {(page.relatedLinks.length > 0 || (page.insightLinks?.length ?? 0) > 0) && (
        <section className="section-light on-light border-t border-slate-200 py-12 md:py-14">
          <div className={`${PAGE_CONTAINER} space-y-10`}>
            <RelatedResources
              heading="Related services and technologies"
              resources={linksWithInferredType(page.relatedLinks)}
            />
            {page.insightLinks && page.insightLinks.length > 0 && (
              <RelatedResources
                heading="Related reading"
                resources={linksToResources(page.insightLinks, "insight")}
              />
            )}
          </div>
        </section>
      )}

      <ClosingCta headline={`Discuss ${page.techName} for your platform`}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource={pageSource} interest={context.interest}>
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
