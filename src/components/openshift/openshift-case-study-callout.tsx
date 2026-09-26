import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PHARMA_MIGRATION_SUMMARY } from "@/content/case-studies";

type CaseStudyCalloutProps = {
  href?: string;
  title?: string;
  summary?: string;
};

export function OpenShiftCaseStudyCallout({
  href = "/case-studies/openshift-enterprise-migration",
  title = "Enterprise OpenShift Migration",
  summary = PHARMA_MIGRATION_SUMMARY,
}: CaseStudyCalloutProps) {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="type-caption text-brand-primary">Case study</p>
      <h3 className="type-h3 mt-2 text-brand-ink">{title}</h3>
      <p className="type-body-card mt-3">{summary}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
      >
        Read full case study
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Card>
  );
}
