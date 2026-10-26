import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { SectionShell } from "@/components/marketing/section-shell";
import { InsightArticleCard } from "@/components/insights/insight-article-card";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { insightArticles, openshiftPillar } from "@/content/insights/articles";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.insights.title,
  description: pageMeta.insights.description,
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title="Engineering guides"
        description="Practical articles on OpenShift installation, GitOps, security, monitoring, upgrades, and platform engineering, written by our engineers."
        breadcrumbs={<Breadcrumbs items={[{ name: "Insights" }]} />}
      />
      <SectionShell variant="light">
        <div className={PAGE_CONTAINER}>
          <Link
            href="/insights/openshift"
            className="card-on-light group flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Guide series
              </span>
              <h2 className="type-h3 mt-2 text-brand-ink group-hover:text-brand-primary">
                {openshiftPillar.h1}
              </h2>
              <p className="type-body-card mt-2">{openshiftPillar.heroSubtext}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-primary">
              Start here
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>

          <h2 className="type-h2-section mt-14 text-brand-ink">All OpenShift articles</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insightArticles.map((article) => (
              <InsightArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
