import Link from "next/link";
import type { InsightArticle } from "@/content/insights/insight-types";

export function InsightArticleCard({ article }: { article: InsightArticle }) {
  return (
    <Link
      href={`/insights/openshift/${article.slug}`}
      className="card-on-light group flex h-full flex-col p-6"
    >
      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {article.primaryKeyword}
      </span>
      <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-brand-ink group-hover:text-brand-primary">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[0.9375rem] leading-relaxed text-slate-600">
        {article.summary}
      </p>
    </Link>
  );
}
