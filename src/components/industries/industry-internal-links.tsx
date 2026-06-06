import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIndustryName } from "@/content/industry-landings";
import { PAGE_CONTAINER } from "@/lib/layout";

export function IndustryInternalLinks({
  relatedSlugs,
}: {
  relatedSlugs: string[];
}) {
  return (
    <section className="border-t border-white/10 bg-brand-dark py-10">
      <div className={PAGE_CONTAINER}>
        <p className="type-caption font-medium text-muted-foreground">
          Other industries
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              All industries
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </li>
          {relatedSlugs.map((slug) => (
            <li key={slug}>
              <Link
                href={`/industries/${slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
              >
                {getIndustryName(slug) ?? slug}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
