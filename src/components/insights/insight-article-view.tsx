import Link from "next/link";
import type { InsightArticle } from "@/content/insights/insight-types";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { PackageSection } from "@/components/packages/package-section";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { InsightRelatedBoxes } from "@/components/insights/insight-related-boxes";
import { InsightArticleToc } from "@/components/insights/insight-article-toc";
import { InsightReadingProgress } from "@/components/insights/insight-reading-progress";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { openshiftKubernetesComparison } from "@/content/openshift-kubernetes-comparison";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

export function InsightArticleView({ article }: { article: InsightArticle }) {
  const tocEntries = [
    { id: "overview", title: "Overview" },
    ...article.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "explore-further", title: "Explore further" },
  ];

  return (
    <>
      <InsightReadingProgress />

      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">Insights · OpenShift</p>
          <h1 className="type-display mt-4 max-w-4xl">{article.h1}</h1>
        </div>
      </section>

      <div className={`${PAGE_CONTAINER} py-8 lg:py-12`}>
        <div className="lg:grid lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12 xl:gap-16">
          <aside className="lg:col-start-1">
            <InsightArticleToc entries={tocEntries} />
          </aside>

          <div className="min-w-0 lg:col-start-2">
            <PackageSection
              title="Overview"
              variant="light"
              headingId="overview"
              embedded
              className="!border-t-0 !py-0"
            >
              <OpenShiftProse paragraphs={article.intro} />
            </PackageSection>

            {article.slug === "openshift-vs-kubernetes" && (
              <PackageSection
                title="OpenShift vs Kubernetes comparison"
                variant="light"
                embedded
                className="!py-12"
              >
                <ComparisonTable data={openshiftKubernetesComparison} />
              </PackageSection>
            )}

            <PackageSection
              title="Need help implementing this?"
              variant="light"
              embedded
              className="!py-8"
            >
              <p className="type-body-card max-w-2xl">
                Talk to engineers who deploy these patterns on OpenShift in production—not generic
                advisory decks.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <BookConsultationLink
                  pageSource={`/insights/openshift/${article.slug}`}
                  interest="openshift"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primary/90"
                >
                  Get an OpenShift assessment
                </BookConsultationLink>
                <Link
                  href="/openshift"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-brand-primary hover:border-brand-cyan"
                >
                  OpenShift services
                </Link>
              </div>
            </PackageSection>

            {article.sections.map((section, i) => (
              <PackageSection
                key={section.id}
                title={section.title}
                variant={i % 2 === 0 ? "dark" : "light"}
                headingId={section.id}
                embedded
                className="!py-12"
              >
                <div className={i % 2 === 0 ? "text-slate-300" : undefined}>
                  <OpenShiftProse paragraphs={section.paragraphs} />
                </div>
              </PackageSection>
            ))}

            <PackageSection
              title="Explore further"
              variant="light"
              headingId="explore-further"
              embedded
              className="!py-12"
            >
              <InsightRelatedBoxes article={article} />
            </PackageSection>
          </div>
        </div>
      </div>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className={`${PAGE_CONTAINER} text-center`}>
          <h2 className="type-h3 text-brand-ink">Need help with OpenShift?</h2>
          <p className="type-body-muted mx-auto mt-4 max-w-xl">
            Talk to engineers who implement these patterns in production—not generic advisory decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <BookConsultationLink
                pageSource={`/insights/openshift/${article.slug}`}
                interest="openshift"
              >
                Book a consultation
              </BookConsultationLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/openshift">OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
