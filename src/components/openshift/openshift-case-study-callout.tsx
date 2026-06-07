import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OpenShiftCaseStudyCallout() {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="type-caption text-brand-primary">Case study</p>
      <h3 className="type-h3 mt-2 text-brand-ink">
        Enterprise OpenShift Migration
      </h3>
      <p className="type-body-card mt-3">
        Global logistics operator migrated legacy workloads to OpenShift with Argo
        CD GitOps and automated compliance checks in CI. Results: 60% deploy time
        reduction, 100% GitOps coverage, and zero critical rollback incidents
        during production cutover.
      </p>
      <Link
        href="/case-studies/openshift-enterprise-migration"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
      >
        Read full case study
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Card>
  );
}
