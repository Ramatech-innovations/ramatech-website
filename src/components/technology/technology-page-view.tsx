import Link from "next/link";
import type { TechnologyPage } from "@/content/technology-types";
import { PackageSection } from "@/components/packages/package-section";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import {
  RelatedResources,
  linksWithInferredType,
  linksToResources,
} from "@/components/marketing/related-resources";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { openshiftKubernetesComparison } from "@/content/openshift-kubernetes-comparison";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

export function TechnologyPageView({ page }: { page: TechnologyPage }) {
  return (
    <>
      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">Technology · {page.techName}</p>
          <h1 className="type-display mt-4 max-w-4xl">{page.h1}</h1>
          <p className="type-body-muted mt-6 max-w-2xl">{page.heroSubtext}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/book-consultation">Request a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/openshift">OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>

      <PackageSection title="What it is" variant="light">
        <OpenShiftProse paragraphs={page.whatItIs} />
      </PackageSection>

      <PackageSection title="Business value" variant="dark">
        <div className="text-slate-300">
          <OpenShiftProse paragraphs={page.businessValue} />
        </div>
      </PackageSection>

      <PackageSection title="Ramatech expertise" variant="light">
        <OpenShiftProse paragraphs={page.ramatechExpertise} />
        {page.relatedLinks.length > 0 && (
          <div className="mt-8 border-t border-slate-200 pt-8">
            <RelatedResources
              heading="Related resources"
              resources={linksWithInferredType(page.relatedLinks)}
            />
          </div>
        )}
        {page.insightLinks && page.insightLinks.length > 0 && (
          <div className="mt-8 border-t border-slate-200 pt-8">
            <RelatedResources
              heading="From our Insights hub"
              resources={linksToResources(page.insightLinks, "insight")}
            />
          </div>
        )}
      </PackageSection>

      {page.slug === "kubernetes" && (
        <PackageSection title="OpenShift vs Kubernetes at a glance" variant="dark">
          <ComparisonTable data={openshiftKubernetesComparison} variant="dark" />
        </PackageSection>
      )}

      <PackageSection title="Use cases & architecture" variant="dark">
        <div className="text-slate-300">
          <OpenShiftProse paragraphs={page.useCases} />
        </div>
      </PackageSection>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className={`${PAGE_CONTAINER} text-center`}>
          <h2 className="type-h3 text-brand-ink">Discuss {page.techName} for your platform</h2>
          <p className="type-body-muted mx-auto mt-4 max-w-xl">
            Talk to engineers who deploy {page.techName} on OpenShift in production—not slide decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/book-consultation">Book a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/openshift">Explore OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
