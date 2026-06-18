import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { InsightArticle } from "@/content/insights/insight-types";

export function InsightArticleCard({ article }: { article: InsightArticle }) {
  return (
    <Link href={`/insights/openshift/${article.slug}`}>
      <Card className="group h-full p-6">
        <span className="font-mono text-xs text-brand-cyan">{article.primaryKeyword}</span>
        <h2 className="type-h3 mt-3 text-brand-ink group-hover:text-brand-cyan">{article.title}</h2>
        <p className="type-body-card mt-2 line-clamp-3">{article.summary}</p>
      </Card>
    </Link>
  );
}
