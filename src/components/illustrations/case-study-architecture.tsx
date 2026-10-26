"use client";

import { OpenshiftMigrationViz } from "@/components/case-studies/openshift-migration-viz";
import {
  CloudMigrationViz,
  HelmGitopsViz,
  OperationsAutomationViz,
} from "@/components/case-studies/pipeline-flow-viz";

const VIZ: Record<string, React.ComponentType<{ className?: string }>> = {
  "openshift-enterprise-migration": OpenshiftMigrationViz,
  "openshift-helm-gitops-production": HelmGitopsViz,
  "openshift-operations-automation": OperationsAutomationViz,
  "elitewash-aws-azure-migration": CloudMigrationViz,
};

export function CaseStudyArchitecture({ slug, className }: { slug: string; className?: string }) {
  const Viz = VIZ[slug] ?? OpenshiftMigrationViz;
  return <Viz className={className} />;
}
