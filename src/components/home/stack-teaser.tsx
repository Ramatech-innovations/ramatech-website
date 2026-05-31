import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";
import { stackCategories } from "@/content/stack";

const STACK_CHIPS = [
  ...new Set(stackCategories.flatMap((c) => c.tools)),
].slice(0, 10);

export function StackTeaser() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <SectionHeader
        eyebrow="Stack"
        title="Technology expertise"
        description="Tools we deploy in production—not logos for a sales deck."
        density="compact"
      />
      <div className="flex flex-wrap justify-center gap-2">
        {STACK_CHIPS.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600 shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>
      <Link
        href="/technology"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
      >
        Full technology overview
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
