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
    name: "Platforms",
    tools: [
      { name: "OpenShift", href: "/technology/openshift" },
      { name: "OpenShift Virtualization", href: "/openshift/migration-services" },
      { name: "Kubernetes", href: "/technology/kubernetes" },
      { name: "Red Hat", href: "/technology/red-hat" },
      { name: "Helm" },
    ],
  },
  {
    name: "GitOps and CI/CD",
    tools: [
      { name: "Argo CD", href: "/technology/argocd" },
      { name: "Jenkins" },
      { name: "GitLab" },
      { name: "Bitbucket" },
      { name: "Nexus" },
      { name: "Quay" },
    ],
  },
  {
    name: "Automation",
    tools: [
      { name: "Ansible", href: "/technology/ansible" },
      { name: "Python" },
      { name: "Terraform" },
    ],
  },
  {
    name: "Observability",
    tools: [
      { name: "Prometheus", href: "/technology/prometheus" },
      { name: "Grafana", href: "/technology/grafana" },
      { name: "Alertmanager" },
    ],
  },
  {
    name: "Environments",
    tools: [
      { name: "Bare metal" },
      { name: "VMware vSphere" },
      { name: "KVM" },
      { name: "AWS and ROSA", href: "/solutions/cloud-infrastructure" },
      { name: "Air-gapped networks" },
    ],
  },
  {
    name: "AI (capabilities)",
    tools: [
      { name: "LLM workflows", href: "/solutions/ai-solutions" },
      { name: "RAG pipelines" },
      { name: "AI agents" },
      { name: "pgvector" },
    ],
  },
  {
    name: "Application engineering",
    tools: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
    ],
  },
  {
    name: "Enterprise systems (capabilities)",
    tools: [
      { name: "SAP S/4HANA migration", href: "/solutions/business-automation" },
      { name: "SAP BTP" },
      { name: "SAP RAP" },
      { name: "SAP support" },
    ],
  },
];
