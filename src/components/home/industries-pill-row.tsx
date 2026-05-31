import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";
import { industries } from "@/content/industries";

export function IndustriesPillRow() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <SectionHeader
        eyebrow="Industries"
        title="Industry solutions"
        description="Patterns we've proven across regulated and high-growth environments."
        density="compact"
      />
      <div className="flex flex-wrap justify-center gap-2">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href="/industries"
            className="rounded-full border border-brand-primary/20 bg-white px-4 py-2 text-sm text-brand-ink shadow-sm transition-colors hover:border-brand-cyan/50 hover:bg-brand-cyan/5"
          >
            {ind.title}
          </Link>
        ))}
      </div>
      <Link
        href="/industries"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
      >
        View industries
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
