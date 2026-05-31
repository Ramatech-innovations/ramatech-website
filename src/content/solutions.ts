export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  outcomes: string[];
  approach: { title: string; description: string }[];
  stack: string[];
  metaDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortTitle: "Cloud",
    tagline: "Multi-cloud foundations built for scale and resilience.",
    description:
      "We design and implement cloud landing zones, networking, and compute patterns that let product teams ship faster without re-architecting every growth stage.",
    outcomes: [
      "Predictable scale from startup to enterprise traffic",
      "Reduced cloud waste through right-sizing and automation",
      "Security baselines aligned to compliance needs",
    ],
    approach: [
      { title: "Assess", description: "Inventory workloads, costs, and reliability gaps." },
      { title: "Design", description: "Landing zones, IAM, and network topology." },
      { title: "Automate", description: "IaC pipelines with review gates." },
    ],
    stack: ["AWS", "Azure", "GCP", "Terraform", "Pulumi"],
    metaDescription:
      "Enterprise cloud infrastructure, landing zones, and scalable architecture for SaaS and product companies.",
  },
  {
    slug: "devops-platform-engineering",
    title: "DevOps & Platform Engineering",
    shortTitle: "Platform",
    tagline: "GitOps, CI/CD, and internal platforms your teams actually use.",
    description:
      "From Kubernetes and OpenShift to developer portals—we build platform capabilities that reduce toil and increase deployment confidence.",
    outcomes: [
      "Faster, safer releases with automated pipelines",
      "Self-service environments for product teams",
      "Observable platforms with clear SLOs",
    ],
    approach: [
      { title: "Platform vision", description: "Align golden paths with team workflows." },
      { title: "Pipeline design", description: "CI/CD, policy-as-code, and artifacts." },
      { title: "Operate", description: "SLOs, runbooks, and on-call readiness." },
    ],
    stack: ["Kubernetes", "OpenShift", "Argo CD", "GitHub Actions", "Helm"],
    metaDescription:
      "DevOps and platform engineering: Kubernetes, OpenShift, GitOps, and CI/CD for engineering teams.",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI",
    tagline: "Production AI systems—not experiments stuck in notebooks.",
    description:
      "We build LLM workflows, RAG pipelines, and intelligent agents integrated into your products and operations—with guardrails, observability, and cost control.",
    outcomes: [
      "AI features shipped inside real product workflows",
      "Governed data access and evaluation loops",
      "Measurable latency and quality targets",
    ],
    approach: [
      { title: "Use-case design", description: "Map ROI and human-in-the-loop needs." },
      { title: "Build", description: "RAG, agents, and API integration." },
      { title: "Govern", description: "Evals, monitoring, and safety controls." },
    ],
    stack: ["OpenAI", "Anthropic", "pgvector", "LangChain", "Python", "Node.js"],
    metaDescription:
      "AI solutions: LLM workflows, RAG, intelligent automation for product and platform teams.",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    tagline: "Connect systems and eliminate manual workflows.",
    description:
      "We automate operations across ERP, CRM, and custom apps—event-driven pipelines that scale with your business, not brittle scripts.",
    outcomes: [
      "Hours reclaimed from manual processes",
      "Fewer errors at system boundaries",
      "Audit-friendly automation logs",
    ],
    approach: [
      { title: "Process mapping", description: "Identify bottlenecks and integration points." },
      { title: "Orchestrate", description: "Workflows, queues, and idempotent jobs." },
      { title: "Measure", description: "Throughput and exception handling." },
    ],
    stack: ["n8n", "Kafka", "REST", "SAP", "PostgreSQL"],
    metaDescription:
      "Business process automation and intelligent workflows for enterprise operations.",
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software",
    tagline: "Scalable applications engineered for long-term ownership.",
    description:
      "We build and modernize product software with clear boundaries, testable modules, and cloud-native deployment—so your team can extend without emergency rewrites.",
    outcomes: [
      "Maintainable codebases with documented APIs",
      "Performance tuned for real user loads",
      "CI/CD from day one",
    ],
    approach: [
      { title: "Domain design", description: "Bounded contexts and API contracts." },
      { title: "Implement", description: "Type-safe services and frontends." },
      { title: "Harden", description: "Tests, observability, and release discipline." },
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "FastAPI", "PostgreSQL"],
    metaDescription:
      "Scalable software development for SaaS, startups, and enterprise product teams.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export const capabilityCards = solutions.map((s) => ({
  title: s.shortTitle,
  description: s.tagline,
  href: `/solutions/${s.slug}`,
}));
