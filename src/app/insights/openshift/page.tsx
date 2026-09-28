import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { InsightArticleCard } from "@/components/insights/insight-article-card";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CollectionPageSchema } from "@/components/seo/CollectionPageSchema";
import { insightArticles, openshiftPillar } from "@/content/insights/articles";
import { createMetadata, siteConfig } from "@/lib/seo";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: openshiftPillar.metaTitle,
  description: openshiftPillar.metaDescription,
  path: "/insights/openshift",
  useExactTitle: true,
});

export default function OpenShiftInsightsPillarPage() {
  const base = siteConfig.url.replace(/\/$/, "");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "OpenShift", path: "/insights/openshift" },
        ]}
      />
      <CollectionPageSchema
        name={openshiftPillar.h1}
        description={openshiftPillar.metaDescription}
        url={`${base}/insights/openshift`}
        hasPart={insightArticles.map((a) => ({
          name: a.title,
          url: `${base}/insights/openshift/${a.slug}`,
        }))}
      />
      <PageHero
        eyebrow="Insights · OpenShift"
        title={openshiftPillar.h1}
        description={openshiftPillar.heroSubtext}
        breadcrumbs={
          <Breadcrumbs items={[{ name: "Insights", href: "/insights" }, { name: "OpenShift" }]} />
        }
      >
        <Button asChild size="lg">
          <Link href="/openshift">OpenShift services</Link>
        </Button>
      </PageHero>
      <section className="section-light on-light py-14 md:py-16">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-3xl">
            <OpenShiftProse paragraphs={openshiftPillar.body} />
          </div>
          <h2 className="type-h2-section mt-14 text-brand-ink">OpenShift guides</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {insightArticles.map((article) => (
              <InsightArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
