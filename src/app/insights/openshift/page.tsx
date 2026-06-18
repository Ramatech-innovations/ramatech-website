import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
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
      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">Insights · OpenShift</p>
          <h1 className="type-display mt-4 max-w-4xl">{openshiftPillar.h1}</h1>
          <p className="type-body-muted mt-6 max-w-2xl">{openshiftPillar.heroSubtext}</p>
          <Button asChild size="lg" className="mt-10">
            <Link href="/openshift">OpenShift services</Link>
          </Button>
        </div>
      </section>
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <OpenShiftProse paragraphs={openshiftPillar.body} />
          <h2 className="type-h3 mt-16 text-brand-ink">OpenShift guides</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {insightArticles.map((article) => (
              <InsightArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/openshift">Explore OpenShift services</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
