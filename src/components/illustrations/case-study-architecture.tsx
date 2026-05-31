"use client";

import { ObservabilityTelemetryViz } from "@/components/case-studies/observability-telemetry-viz";
import { OpenshiftMigrationViz } from "@/components/case-studies/openshift-migration-viz";
import { AiOperationsViz } from "@/components/case-studies/ai-operations-viz";

const VIZ: Record<string, React.ComponentType<{ className?: string }>> = {
  "observability-platform-scale": ObservabilityTelemetryViz,
  "openshift-enterprise-migration": OpenshiftMigrationViz,
  "ai-automation-operations": AiOperationsViz,
};

export function CaseStudyArchitecture({ slug, className }: { slug: string; className?: string }) {
  const Viz = VIZ[slug] ?? ObservabilityTelemetryViz;
  return <Viz className={className} />;
}
