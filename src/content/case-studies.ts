export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  solution: string;
  summary: string;
  challenge: string;
  solutionDetail: string;
  results: { metric: string; label: string }[];
  stack: string[];
  /** Composite/illustrative profile — show disclaimer on detail page */
  illustrative?: boolean;
  /** Real delivery with client name withheld — show confidentiality note on detail page */
  anonymised?: boolean;
};

export const PHARMA_MIGRATION_SUMMARY =
  "Pharmaceutical enterprise (name withheld): on-prem bare-metal OpenShift with legacy VMs brought onto the platform through OpenShift Virtualization, dynamic PV/PVC storage, and Argo CD GitOps replacing manual deployments.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "observability-platform-scale",
    illustrative: true,
    title: "Observability Platform at Scale",
    client: "Series B SaaS",
    industry: "SaaS",
    solution: "devops-platform-engineering",
    summary:
      "Unified metrics, logs, and traces for a multi-tenant platform serving 50k+ daily active users.",
    challenge:
      "Fragmented monitoring led to blind spots during releases and slow incident triage across microservices.",
    solutionDetail:
      "Deployed VictoriaMetrics, structured logging, and SLO-based alerting with AI-assisted runbook generation.",
    results: [
      { metric: "40%", label: "Faster MTTR" },
      { metric: "99.95%", label: "Uptime target met" },
      { metric: "2 wks", label: "Delivery timeline" },
    ],
    stack: ["Kubernetes", "VictoriaMetrics", "Grafana", "OpenTelemetry"],
  },
  {
    slug: "openshift-enterprise-migration",
    anonymised: true,
    title: "Pharma OpenShift Platform on Bare Metal",
    client: "Pharmaceutical enterprise (name withheld)",
    industry: "Pharmaceuticals / Life sciences",
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
    slug: "ai-automation-operations",
    illustrative: true,
    title: "AI-Driven Operations Automation",
    client: "HealthTech Platform",
    industry: "Healthcare",
    solution: "ai-solutions",
    summary:
      "Intelligent triage and document processing integrated into clinical operations workflows.",
    challenge:
      "Manual review queues created backlog and inconsistent routing during peak intake periods.",
    solutionDetail:
      "Built RAG-backed classification, human-in-the-loop review UI, and cost-monitored LLM pipelines.",
    results: [
      { metric: "55%", label: "Queue time reduction" },
      { metric: "<2s", label: "P95 inference latency" },
      { metric: "Full", label: "Audit trail coverage" },
    ],
    stack: ["OpenAI", "PostgreSQL", "pgvector", "Next.js", "Python"],
  },
  // TODO: content review — illustrative client and metrics; replace before marketing publish
  {
    slug: "openshift-gitops-automation",
    illustrative: true,
    title: "OpenShift Automation Case Study",
    client: "Regional Financial Services",
    industry: "Financial Services",
    solution: "devops-platform-engineering",
    summary:
      "CI/CD pipeline automation with Argo CD ApplicationSets and policy-as-code reduced manual deploy steps across a multi-cluster OpenShift estate.",
    challenge:
      "Manual promotion scripts and inconsistent namespace policies caused deployment errors, audit gaps, and slow release cycles across development and production clusters.",
    solutionDetail:
      "Implemented GitOps with Argo CD ApplicationSets, Kyverno policy-as-code for image registry and resource standards, and automated sync windows with approval gates for production promotion.",
    // TODO: replace illustrative metrics with verified client data before publishing
    results: [
      { metric: "3×", label: "Deploy frequency increase" },
      { metric: "72%", label: "Reduction in deployment errors" },
      { metric: "100%", label: "Git-managed promotions" },
    ],
    stack: ["OpenShift", "Argo CD", "Kyverno", "GitHub Actions"],
  },
  // TODO: content review — illustrative client and metrics; replace before marketing publish
  {
    slug: "openshift-platform-engineering-golden-paths",
    illustrative: true,
    title: "Platform Engineering Case Study",
    client: "Enterprise Product Group",
    industry: "Technology",
    solution: "devops-platform-engineering",
    summary:
      "Internal developer platform with self-service namespaces and golden-path templates cut time-to-first-deploy for new product squads on OpenShift.",
    challenge:
      "Central platform team became a bottleneck—namespace requests, quota changes, and pipeline setup took weeks, blocking new teams from shipping on OpenShift.",
    solutionDetail:
      "Built an internal developer platform with self-service namespace provisioning, SCC-safe golden-path Helm charts, OpenShift GitOps tenant onboarding, and a developer portal catalog for approved templates.",
    // TODO: replace illustrative metrics with verified client data before publishing
    results: [
      { metric: "85%", label: "Faster time-to-first-deploy" },
      { metric: "60%", label: "Fewer platform tickets" },
      { metric: "4 days", label: "Avg. squad onboarding" },
    ],
    stack: ["OpenShift", "Argo CD", "Backstage", "Helm"],
  },
];

/** Case studies shown in listings and the sitemap; illustrative profiles stay reachable but unlisted */
export const publishedCaseStudies = caseStudies.filter((c) => !c.illustrative);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
