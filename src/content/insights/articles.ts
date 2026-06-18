import type { InsightArticle } from "./insight-types";
export { INSIGHT_SCHEMA_DATE } from "./insight-types";
export type { InsightArticle, OpenShiftPillar } from "./insight-types";
export { openshiftPillar } from "./openshift-pillar";
import { openshiftArticlesBatch1 } from "./openshift-articles-batch-1";
import { openshiftArticlesBatch2 } from "./openshift-articles-batch-2";
import { openshiftArticlesBatch3 } from "./openshift-articles-batch-3";

export const insightArticles: InsightArticle[] = [
  ...openshiftArticlesBatch1,
  ...openshiftArticlesBatch2,
  ...openshiftArticlesBatch3,
];

/** India city pages under /openshift/india/{city} — populated in Prompt 4 */
export const openshiftIndiaCityPages: { slug: string }[] = [];

export function getInsightArticle(slug: string) {
  return insightArticles.find((a) => a.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insightArticles.map((a) => a.slug);
}
