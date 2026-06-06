import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function IndustrySocialProof({
  text,
  caseStudyHref,
  caseStudyLabel,
}: {
  text: string;
  caseStudyHref?: string;
  caseStudyLabel?: string;
}) {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
        &ldquo;{text}&rdquo;
      </p>
      {caseStudyHref && caseStudyLabel && (
        <Link
          href={caseStudyHref}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
        >
          {caseStudyLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </Card>
  );
}
