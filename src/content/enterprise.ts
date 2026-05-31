/** Homepage enterprise narrative — does not alter core site.ts SEO/nav copy */

export const commandCenter = {
  eyebrow: "Infrastructure Command Center",
  title: "One orchestration layer for your entire stack",
  description:
    "Ramatech sits at the center of your AI, cloud, platform, and application estate—connecting systems, enforcing guardrails, and accelerating outcomes across the enterprise.",
};

export const businessOutcomes = [
  {
    id: "cloud-waste",
    title: "Reduce cloud waste",
    description:
      "Right-size estates, automate policies, and reclaim spend without slowing product teams.",
  },
  {
    id: "releases",
    title: "Accelerate releases",
    description:
      "GitOps pipelines and golden paths that move features from commit to production with confidence.",
  },
  {
    id: "operations",
    title: "Automate operations",
    description:
      "Intelligent workflows that remove manual toil across support, ops, and back-office processes.",
  },
  {
    id: "uptime",
    title: "Increase uptime",
    description:
      "SLO-driven platforms, resilient architectures, and runbooks built for real incident response.",
  },
  {
    id: "observability",
    title: "Improve observability",
    description:
      "Unified telemetry and AI-assisted triage so teams see problems before customers do.",
  },
];

export const enterpriseKpis = [
  {
    value: 99.95,
    suffix: "%",
    decimals: 2,
    label: "Production availability targets",
    prefix: "",
  },
  {
    value: 30,
    suffix: "%+",
    decimals: 0,
    label: "Average infrastructure cost reduction",
    prefix: "",
  },
  {
    value: 2,
    suffix: " weeks",
    decimals: 0,
    label: "Typical delivery cycle length",
    prefix: "",
  },
  {
    value: 15,
    suffix: " min",
    decimals: 0,
    label: "Incident response baseline",
    prefix: "<",
  },
];

export const aiAutomationShowcase = [
  {
    id: "support-agents",
    title: "AI Support Agents",
    description:
      "Resolve L1 tickets, surface runbooks, and escalate with full context—integrated into your existing tools.",
  },
  {
    id: "lead-qualification",
    title: "AI Lead Qualification",
    description:
      "Score and route inbound demand with governed data access and human approval on high-value deals.",
  },
  {
    id: "workflow-automation",
    title: "AI Workflow Automation",
    description:
      "Orchestrate multi-step business processes with agents, APIs, and audit trails—not brittle scripts.",
  },
  {
    id: "knowledge-systems",
    title: "AI Knowledge Systems",
    description:
      "RAG pipelines over your docs, tickets, and policies so teams answer accurately in seconds.",
  },
  {
    id: "operations",
    title: "AI Operations",
    description:
      "Anomaly detection, incident summarization, and cost intelligence for platform and SRE teams.",
  },
];

/** Homepage subset — support, workflow, operations */
export const aiAutomationShowcaseHome = aiAutomationShowcase.filter((c) =>
  ["support-agents", "workflow-automation", "operations"].includes(c.id)
);

export const founderCredibility = {
  eyebrow: "Engineering credibility",
  title: "Built by operators who run production",
  description:
    "Ramatech is led by engineers who have shipped and operated enterprise platforms—not consultants who stop at architecture diagrams.",
  pillars: [
    "4+ years enterprise OpenShift experience",
    "Production Kubernetes environments at scale",
    "DevOps automation and GitOps delivery expertise",
    "Enterprise platform operations and handover",
  ],
};

export const ecosystemNodeLabels = [
  "AI Systems",
  "Cloud Infrastructure",
  "Kubernetes",
  "Automation",
  "Applications",
] as const;
