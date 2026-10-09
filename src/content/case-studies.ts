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
  /** Only with the client's written permission on file in CLAIMS.md */
  testimonial?: { quote: string; attribution: string };
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
  {
    slug: "elitewash-aws-azure-migration",
    publishedAt: "2026-10-09",
    anonymised: false,
    title: "Elitewash: AWS Setup and Migration to Microsoft Azure",
    client: "Elitewash, an app-based shoe cleaning and care service",
    industry: "Consumer services",
    environment: "AWS, then Microsoft Azure",
    solution: "cloud-infrastructure",
    summary:
      "Built the cloud infrastructure behind Elitewash's app on AWS: separate testing, production and database servers, Jenkins CI/CD, VPN access and API monitoring. Then rebuilt it on Microsoft Azure to lower ongoing cloud cost, and right-sized it after the move.",
    challenge:
      "Elitewash had its application code ready but no structured cloud environment to run it. There was nowhere to test releases safely, no automated way to deploy, no secure way to reach the database, and no view of whether the app's APIs were healthy. Once the AWS setup was running, the business also wanted to move to Microsoft Azure to lower its ongoing cloud cost, without disrupting the live app.",
    solutionDetail:
      "The infrastructure was defined in Terraform, so environments could be created the same way every time. On AWS, separate virtual machines run testing (UAT), production and a dedicated MongoDB database server, inside a private network with security groups. A Jenkins server builds the app and deploys it to UAT, and validated releases go to production through the same pipeline. An open-source VPN server gives the team controlled access to internal resources, including the database, and open-source API monitoring shows when endpoints slow down or fail. The same environment was then rebuilt on Azure with virtual machines, a virtual network and network security groups, validated before the switch, and the app was moved across with a planned cutover. After the move, Azure resources were reviewed against real usage: oversized machines were right-sized and unneeded resources removed. Runbooks were handed over to the Elitewash team.",
    results: [
      { metric: "UAT → Production", label: "Every release is tested before it reaches customers" },
      { metric: "AWS → Azure", label: "The full environment rebuilt on Azure with a planned cutover" },
      { metric: "Right-sized", label: "Azure resources matched to real usage to keep running costs down" },
    ],
    stack: [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "Jenkins",
      "MongoDB",
      "Open-source VPN",
      "Open-source API monitoring",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
