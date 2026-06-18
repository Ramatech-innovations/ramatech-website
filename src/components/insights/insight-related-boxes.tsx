import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { InsightArticle } from "@/content/insights/insight-types";
import { getInsightArticle } from "@/content/insights/articles";

export function InsightRelatedBoxes({ article }: { article: InsightArticle }) {
  const readingArticles = article.relatedReading
    .map((slug) => getInsightArticle(slug))
    .filter((a): a is InsightArticle => Boolean(a));

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="p-6">
        <h3 className="font-heading text-lg font-semibold text-brand-ink">Related services</h3>
        <ul className="mt-4 space-y-2">
          {article.relatedServices.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-cyan hover:underline"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <h3 className="font-heading text-lg font-semibold text-brand-ink">Related technology</h3>
        <ul className="mt-4 space-y-2">
          {article.relatedTechnology.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-cyan hover:underline"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <h3 className="font-heading text-lg font-semibold text-brand-ink">Related reading</h3>
        <ul className="mt-4 space-y-2">
          {readingArticles.map((reading) => (
            <li key={reading.slug}>
              <Link
                href={`/insights/openshift/${reading.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-cyan hover:underline"
              >
                {reading.title}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
