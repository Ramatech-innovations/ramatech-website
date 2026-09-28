"use client";

import { OpenshiftMigrationViz } from "@/components/case-studies/openshift-migration-viz";
import {
  HelmGitopsViz,
  JenkinsArgocdCicdViz,
  OperationsAutomationViz,
} from "@/components/case-studies/pipeline-flow-viz";

const VIZ: Record<string, React.ComponentType<{ className?: string }>> = {
  "openshift-enterprise-migration": OpenshiftMigrationViz,
  "openshift-jenkins-argocd-cicd": JenkinsArgocdCicdViz,
  "openshift-helm-gitops-production": HelmGitopsViz,
  "openshift-operations-automation": OperationsAutomationViz,
};

export function CaseStudyArchitecture({ slug, className }: { slug: string; className?: string }) {
  const Viz = VIZ[slug] ?? OpenshiftMigrationViz;
  return <Viz className={className} />;
}
