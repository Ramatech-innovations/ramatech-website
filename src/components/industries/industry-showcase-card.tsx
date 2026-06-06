import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { IndustryLanding } from "@/content/industry-landings";

export function IndustryShowcaseCard({
  showcase,
}: {
  showcase: NonNullable<IndustryLanding["showcaseRef"]>;
}) {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="type-caption text-brand-primary">Showcase reference</p>
      <h3 className="type-h3 mt-2 text-brand-ink">{showcase.title}</h3>
      <p className="type-body-card mt-3">{showcase.description}</p>
      <Link
        href={showcase.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
      >
        View showcase
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Card>
  );
}
