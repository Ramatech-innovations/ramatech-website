export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  /** Where the platform runs, e.g. "On-prem bare metal" */
  environment: string;
  solution: string;
  summary: string;
  challenge: string;
  solutionDetail: string;
  results: { metric: string; label: string }[];
  stack: string[];
  /** ISO date the page was first published, for Article schema */
  publishedAt: string;
  /** Real delivery with client name withheld — show confidentiality note on detail page */
  anonymised?: boolean;
};

export const PHARMA_MIGRATION_SUMMARY =
  "Pharmaceutical enterprise (name withheld): on-prem bare-metal OpenShift with legacy VMs brought onto the platform through OpenShift Virtualization, dynamic PV/PVC storage, and Argo CD GitOps replacing manual deployments.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "openshift-enterprise-migration",
    publishedAt: "2026-06-14",
    anonymised: true,
    title: "Pharma OpenShift Platform on Bare Metal",
    client: "Pharmaceutical enterprise (name withheld)",
    industry: "Pharmaceuticals / Life sciences",
    environment: "On-prem bare metal",
    solution: "cloud-infrastructure",
    summary:
      "Built an on-prem bare-metal OpenShift platform for a pharmaceutical enterprise and moved legacy VM-based workloads onto it: containerised where possible, and run on OpenShift Virtualization where not. Every deployment is managed through Argo CD GitOps.",
    challenge:
      "Legacy applications ran on standalone virtual machines on on-prem infrastructure. Deployments were manual, storage was provisioned by ticket, and strict validation and audit expectations made change evidence slow to produce.",
    solutionDetail:
      "Installed OpenShift on on-prem bare metal and enabled OpenShift Virtualization so existing VMs run alongside containers on one platform. Set up dynamic provisioning of persistent volumes (PV/PVC) through storage classes, containerised suitable applications, and moved deployments from manual steps to Argo CD GitOps, with every change recorded in Git.",
    results: [
      { metric: "Bare metal", label: "On-prem OpenShift platform, installed and configured" },
      { metric: "GitOps", label: "Deployments moved from manual to Argo CD" },
      { metric: "VMs + containers", label: "One platform with OpenShift Virtualization" },
    ],
    stack: [
      "OpenShift",
      "OpenShift Virtualization",
      "Argo CD",
      "Bare metal",
      "Dynamic PV/PVC storage",
    ],
  },
  {
    slug: "openshift-jenkins-argocd-cicd",
    publishedAt: "2026-09-28",
    anonymised: true,
    title: "Telecom CI/CD on OpenShift with Jenkins and Argo CD",
    client: "Telecom enterprise (name withheld)",
    industry: "Telecom",
    environment: "On-prem bare metal",
    solution: "devops-platform-engineering",
    summary:
      "Replaced manual builds and deployments on a bare-metal OpenShift platform with Jenkins pipelines and Argo CD GitOps, so every release goes from commit to cluster the same way.",
    challenge:
      "Applications were built and deployed to OpenShift by hand with oc, kubectl, and scripts. Releases depended on individual engineers, changes were hard to trace, and rolling back meant repeating manual steps.",
    solutionDetail:
      "Built Jenkins pipelines that take code from Bitbucket, build it, and publish artifacts to Nexus and container images to the registry (Quay or the internal OpenShift registry). Packaged applications as Helm charts and set up Argo CD to sync them from Git to the bare-metal OpenShift cluster. Pipelines and runbooks were handed over to the client team.",
    results: [
      { metric: "Git", label: "Single source of truth for every deployment" },
      { metric: "Automated", label: "Repeatable releases from commit to cluster, with a full audit trail" },
      { metric: "Rollback", label: "Simpler rollback and fewer manual deployment errors" },
    ],
    stack: ["OpenShift", "Bare metal", "Jenkins", "Argo CD", "Helm", "Bitbucket", "Nexus", "Quay"],
  },
  {
    slug: "openshift-helm-gitops-production",
    publishedAt: "2026-09-28",
    anonymised: true,
    title: "Helm and GitOps for a Production App on Air-Gapped OpenShift",
    client: "Financial services enterprise (name withheld)",
    industry: "Financial services",
    environment: "On-prem air-gapped network",
    solution: "devops-platform-engineering",
    summary:
      "Packaged an application already running in production as a Helm chart and moved it to Argo CD GitOps on an air-gapped OpenShift cluster, without disrupting production.",
    challenge:
      "A production application on an air-gapped OpenShift cluster was deployed with hand-maintained YAML and oc commands. Every production change was manual and risky, and configuration differed between environments.",
    solutionDetail:
      "Created a Helm chart for the application from its running configuration, with per-environment values kept in GitLab. Set up Argo CD to sync the chart to the cluster, with Jenkins in the delivery path and container images served from a mirror registry inside the air-gapped network. The application moved to the new model while production kept running.",
    results: [
      { metric: "Helm + GitOps", label: "Production app moved without disrupting production" },
      { metric: "Consistent", label: "Same configuration model across environments" },
      { metric: "Traceable", label: "Every production change recorded in Git, with simpler rollback" },
    ],
    stack: ["OpenShift", "Air-gapped", "Helm", "Argo CD", "GitLab", "Jenkins", "Mirror registry"],
  },
  {
    slug: "openshift-operations-automation",
    publishedAt: "2026-09-28",
    anonymised: true,
    title: "OpenShift Operations and DevOps Automation",
    client: "Financial services enterprise (name withheld)",
    industry: "Financial services",
    environment: "On-prem bare metal",
    solution: "devops-platform-engineering",
    summary:
      "Automated routine OpenShift operations on a bare-metal platform—team onboarding, monitoring setup, health checks, and backups—so every team and environment is set up the same way.",
    challenge:
      "Routine platform work on a bare-metal OpenShift platform was done by hand: onboarding new teams, setting up monitoring and alerts, running health checks, and taking backups. Setups varied between teams and environments, and configuration errors crept in.",
    solutionDetail:
      "Built Ansible and Python automation, triggered from Jenkins, for project and namespace onboarding (quotas, limits, and RBAC), monitoring and alerting setup, routine health checks and reports, and backups including etcd. Platform configuration is applied through Argo CD and Helm, with OpenShift Operators handling day-2 components.",
    results: [
      { metric: "Repeatable", label: "Consistent setup for every team and environment" },
      { metric: "Onboarding", label: "Faster onboarding of new teams and applications" },
      { metric: "Fewer errors", label: "Less manual configuration, fewer configuration errors" },
    ],
    stack: ["OpenShift", "Bare metal", "Ansible", "Python", "Jenkins", "Argo CD", "Helm", "OpenShift Operators"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
