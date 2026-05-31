import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";
import { solutions } from "@/content/solutions";

export function SolutionsGrid() {
  return (
    <>
      <SectionHeader
        eyebrow="Solutions"
        title="Service ecosystem"
        description="Five engineering domains. One team accountable for outcomes."
        density="compact"
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/solutions/${s.slug}`}
              className="card-on-light group flex h-full flex-col justify-between p-4"
              aria-label={`${s.title}: ${s.tagline}`}
            >
              <div>
                <h3 className="font-heading text-base font-semibold group-hover:text-brand-cyan">
                  {s.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {s.tagline}
                </p>
              </div>
              <ArrowRight className="mt-3 h-4 w-4 text-brand-cyan opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
        >
          View all solutions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
