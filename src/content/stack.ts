export type StackTool = {
  name: string;
  href?: string;
};

export type StackCategory = {
  name: string;
  tools: StackTool[];
};

export const stackCategories: StackCategory[] = [
  {
    name: "Cloud & Infrastructure",
    tools: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "GCP" },
      { name: "Terraform" },
      { name: "Pulumi" },
      { name: "Docker" },
    ],
  },
  {
    name: "Platform & Kubernetes",
    tools: [
      { name: "Kubernetes", href: "/technology/kubernetes" },
      { name: "OpenShift", href: "/technology/openshift" },
      { name: "Red Hat", href: "/technology/red-hat" },
      { name: "Helm" },
      { name: "Argo CD", href: "/technology/argocd" },
      { name: "Istio" },
    ],
  },
  {
    name: "Observability",
    tools: [
      { name: "Prometheus", href: "/technology/prometheus" },
      { name: "Grafana", href: "/technology/grafana" },
      { name: "VictoriaMetrics" },
      { name: "Loki" },
      { name: "OpenTelemetry" },
    ],
  },
  {
    name: "Automation",
    tools: [{ name: "Ansible", href: "/technology/ansible" }],
  },
  {
    name: "AI & Data",
    tools: [
      { name: "OpenAI" },
      { name: "Anthropic" },
      { name: "PostgreSQL" },
      { name: "pgvector" },
      { name: "Redis" },
      { name: "Python" },
    ],
  },
  {
    name: "Application Engineering",
    tools: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "NestJS" },
      { name: "FastAPI" },
      { name: "Node.js" },
    ],
  },
  {
    name: "Enterprise Systems",
    tools: [
      { name: "SAP S/4HANA" },
      { name: "Kafka" },
      { name: "REST" },
      { name: "Event-driven pipelines" },
    ],
  },
];
