import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { IndustryLanding } from "@/content/industry-landings";
import { PAGE_CONTAINER } from "@/lib/layout";

export function IndustryBreadcrumbs({ landing }: { landing: IndustryLanding }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-white/10 bg-brand-dark/80 py-3"
    >
      <div className={PAGE_CONTAINER}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-brand-cyan">
              Home
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
          <li>
            <Link href="/industries" className="hover:text-brand-cyan">
              Industries
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
          <li className="font-medium text-foreground">{landing.industryName}</li>
        </ol>
      </div>
    </nav>
  );
}
