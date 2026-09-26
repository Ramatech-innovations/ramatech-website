import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OpenShiftTrustBand() {
  return (
    <Card tone="light" className="p-8 md:p-10">
      <p className="type-caption text-brand-primary">Delivery experience</p>
      <h3 className="type-h3 mt-2 text-brand-ink">
        Pharma OpenShift Platform on Bare Metal
      </h3>
      <p className="type-body-card mt-3">
        Built an on-prem OpenShift platform for a pharmaceutical enterprise —{" "}
        <strong className="text-brand-ink">bare-metal installation</strong>,{" "}
        <strong className="text-brand-ink">legacy VMs on OpenShift Virtualization</strong>,
        dynamic PV/PVC storage, and{" "}
        <strong className="text-brand-ink">Argo CD GitOps replacing manual deployments</strong>.
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
