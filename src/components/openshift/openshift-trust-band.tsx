import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OpenShiftTrustBand() {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="type-caption text-brand-primary">Proven outcomes</p>
      <h3 className="type-h3 mt-2 text-brand-ink">
        Enterprise OpenShift Migration
      </h3>
      <p className="type-body-card mt-3">
        Migrated legacy workloads to OpenShift with GitOps and policy guardrails
        for regulated operations —{" "}
        <strong className="text-brand-ink">60% deploy time reduction</strong>,{" "}
        <strong className="text-brand-ink">100% GitOps coverage</strong>, and{" "}
        <strong className="text-brand-ink">0 critical rollback incidents</strong>.
      </p>
      <Link
        href="/case-studies/openshift-enterprise-migration"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
      >
        Read the case study
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Card>
  );
}
