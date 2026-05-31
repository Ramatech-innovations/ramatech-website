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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "observability-platform-scale",
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
    title: "Enterprise OpenShift Migration",
    client: "Global Logistics",
    industry: "Logistics",
    solution: "cloud-infrastructure",
    summary:
      "Migrated legacy workloads to OpenShift with GitOps and policy guardrails for regulated operations.",
    challenge:
      "On-prem constraints and manual deployments blocked platform team velocity and audit readiness.",
    solutionDetail:
      "Designed cluster topology, implemented Argo CD workflows, and automated compliance checks in CI.",
    results: [
      { metric: "60%", label: "Deploy time reduction" },
      { metric: "100%", label: "GitOps coverage" },
      { metric: "0", label: "Critical rollback incidents" },
    ],
    stack: ["OpenShift", "Argo CD", "Terraform", "Vault"],
  },
  {
    slug: "ai-automation-operations",
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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
