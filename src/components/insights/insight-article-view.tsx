import Link from "next/link";
import type { InsightArticle } from "@/content/insights/insight-types";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { InsightRelatedBoxes } from "@/components/insights/insight-related-boxes";
import { InsightArticleToc } from "@/components/insights/insight-article-toc";
import { InsightReadingProgress } from "@/components/insights/insight-reading-progress";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { openshiftKubernetesComparison } from "@/content/openshift-kubernetes-comparison";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

function ArticleSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24 border-t border-slate-200 py-10 first:border-t-0 first:pt-0">
      <h2 id={id} className="type-h2-section text-brand-ink">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function InsightArticleView({ article }: { article: InsightArticle }) {
  const pageSource = `/insights/openshift/${article.slug}`;
  const tocEntries = [
    { id: "overview", title: "Overview" },
    ...article.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "explore-further", title: "Explore further" },
  ];

  return (
    <>
      <InsightReadingProgress />

      <PageHero
        eyebrow="Insights · OpenShift"
        title={article.h1}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/insights" },
              { name: "OpenShift", href: "/insights/openshift" },
              { name: article.title },
            ]}
          />
        }
      />

      <div className={`${PAGE_CONTAINER} section-light on-light py-12 lg:py-16`}>
        <div className="lg:grid lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12 xl:gap-16">
          <aside className="lg:col-start-1">
            <InsightArticleToc entries={tocEntries} />
          </aside>

          <article className="min-w-0 max-w-3xl lg:col-start-2">
            <ArticleSection id="overview" title="Overview">
              <OpenShiftProse paragraphs={article.intro} />
            </ArticleSection>

            {article.slug === "openshift-vs-kubernetes" && (
              <ArticleSection title="OpenShift vs Kubernetes comparison">
                <ComparisonTable data={openshiftKubernetesComparison} />
              </ArticleSection>
            )}

            <aside className="my-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <p className="font-heading text-lg font-semibold text-brand-ink">
                Need help implementing this?
              </p>
              <p className="type-body-card mt-2">
                Talk to engineers who deploy these patterns on OpenShift in production.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild>
                  <BookConsultationLink pageSource={pageSource} interest="openshift">
                    Book Consultation
                  </BookConsultationLink>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/openshift">OpenShift services</Link>
                </Button>
              </div>
            </aside>

            {article.sections.map((section) => (
              <ArticleSection key={section.id} id={section.id} title={section.title}>
                <OpenShiftProse paragraphs={section.paragraphs} />
              </ArticleSection>
            ))}

            <ArticleSection id="explore-further" title="Explore further">
              <InsightRelatedBoxes article={article} />
            </ArticleSection>
          </article>
        </div>
      </div>

      <ClosingCta headline="Need help with OpenShift?">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource={pageSource} interest="openshift">
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/openshift">OpenShift services</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
