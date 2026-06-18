import type { InsightArticle } from "@/content/insights/insight-types";
import { getInsightArticle } from "@/content/insights/articles";
import {
  RelatedResources,
  linksToResources,
  linksWithInferredType,
} from "@/components/marketing/related-resources";

export function InsightRelatedBoxes({ article }: { article: InsightArticle }) {
  const readingArticles = article.relatedReading
    .map((slug) => getInsightArticle(slug))
    .filter((a): a is InsightArticle => Boolean(a));

  const readingResources = readingArticles.map((reading) => ({
    title: reading.title,
    href: `/insights/openshift/${reading.slug}`,
    type: "insight" as const,
  }));

  return (
    <div className="space-y-8">
      <RelatedResources
        heading="Related services"
        resources={linksToResources(article.relatedServices, "service")}
      />
      <RelatedResources
        heading="Related technology"
        resources={linksWithInferredType(article.relatedTechnology)}
      />
      <RelatedResources heading="Related reading" resources={readingResources} />
    </div>
  );
}
