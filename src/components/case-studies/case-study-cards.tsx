import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

function pickStudies(slugs?: string[]): CaseStudy[] {
  if (!slugs) return caseStudies;
  return slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}

/**
 * Static case-study cards. `compact` shows industry, environment, and tools only;
 * the default adds the summary.
 */
export function CaseStudyCards({
  slugs,
  columns = 2,
  compact = false,
  className,
}: {
  slugs?: string[];
  columns?: 2 | 4;
  compact?: boolean;
  className?: string;
}) {
  const items = pickStudies(slugs);
  if (items.length === 0) return null;

  return (
    <ul
      className={cn(
        "grid gap-5",
        columns === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2",
        className
      )}
    >
      {items.map((study) => (
        <li key={study.slug}>
          <Link
            href={`/case-studies/${study.slug}`}
            className="card-on-light group flex h-full flex-col p-6"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {study.industry} · {study.environment}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-brand-ink group-hover:text-brand-primary">
              {study.title}
            </h3>
            {!compact && (
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                {study.summary}
              </p>
            )}
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
              {study.stack.filter((t) => t !== "Bare metal" && t !== "Air-gapped").join(" · ")}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
              Read case study
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
