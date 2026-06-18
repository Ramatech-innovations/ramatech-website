import { notFound } from "next/navigation";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { InsightArticleView } from "@/components/insights/insight-article-view";
import { getAllInsightSlugs, getInsightArticle } from "@/content/insights/articles";
import { createMetadata, siteConfig } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) return {};
  return createMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/openshift/${article.slug}`,
    useExactTitle: true,
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) notFound();

  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/insights/openshift/${slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: "OpenShift", path: "/insights/openshift" },
          { name: article.title, path: `/insights/openshift/${slug}` },
        ]}
      />
      <ArticleSchema
        headline={article.title}
        description={article.summary}
        url={pageUrl}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
      />
      <InsightArticleView article={article} />
    </>
  );
}
