export type SolutionLink = { label: string; href: string };

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  metaDescription: string;
  whatWeDo: { title: string; description: string }[];
  /** Optional pointer shown under "What we do", e.g. where related work lives. */
  whatWeDoNote?: { text: string; link: SolutionLink };
  capabilityBlock?: { title: string; items: string[]; note: string };
  engagement: { title: string; description: string }[];
  openshiftLinks: SolutionLink[];
  serviceLinks?: SolutionLink[];
  guideLinks?: SolutionLink[];
  technologies: { name: string; href?: string }[];
  relatedCaseStudies: string[];
  faqs: { question: string; answer: string }[];
};

const HANDOVER_STEP = {
  title: "Hand over",
  description: "Code, configuration, and runbooks stay in your repositories, with a walkthrough for your team.",
};

export const solutions: Solution[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI",
    tagline: "LLM workflows, RAG pipelines, and AI agents built for production.",
    description:
      "We build LLM workflows, RAG pipelines, and AI agents integrated into products and operations, with guardrails, evaluation, observability, and cost control.",
    metaDescription:
      "AI engineering: LLM workflows, RAG pipelines, and AI agents integrated into products and operations, with guardrails, evaluation, and cost control.",
    whatWeDo: [
      {
        title: "LLM workflows",
        description:
          "Multi-step workflows that call language models from your applications and back-office processes, with human approval where it matters.",
      },
      {
        title: "RAG pipelines",
        description:
          "Retrieval over your documents and data, with access controls and source references in every answer.",
      },
      {
        title: "AI agents",
        description:
          "Agents that use your tools and APIs within defined permissions, integrated into products and operations.",
      },
      {
        title: "Guardrails and evaluation",
        description:
          "Input and output checks, agreed test sets, and evaluation runs before and after each release.",
      },
      {
        title: "Observability and cost control",
        description:
          "Logging, tracing, and usage tracking so you can see quality, latency, and spend.",
      },
    ],
    engagement: [
      {
        title: "Use-case review",
        description: "Agree the problem, the data sources, and what a good answer looks like.",
      },
      {
        title: "Prototype",
        description: "Build a narrow working version against real data and an agreed test set.",
      },
      {
        title: "Production build",
        description: "Add guardrails, monitoring, and deployment on your infrastructure.",
      },
      {
        title: "Hand over",
        description: "Code, prompts, evaluation sets, and runbooks stay with your team.",
      },
    ],
    openshiftLinks: [
      { label: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
      { label: "OpenShift consulting", href: "/openshift/consulting-services" },
    ],
    serviceLinks: [
      { label: "Business Automation", href: "/solutions/business-automation" },
    ],
    guideLinks: [
      { label: "OpenShift AI Integration", href: "/insights/openshift/ai-integration" },
    ],
    technologies: [
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "pgvector" },
      { name: "OpenShift", href: "/technology/openshift" },
      { name: "Kubernetes", href: "/technology/kubernetes" },
      { name: "Prometheus", href: "/technology/prometheus" },
    ],
    relatedCaseStudies: [],
    faqs: [
      {
        question: "Which models do you work with?",
        answer:
          "We choose the model per use case, including hosted models and models you run yourself. The choice depends on data sensitivity, answer quality, and cost.",
      },
      {
        question: "Can AI workloads run on our own infrastructure?",
        answer:
          "Yes. Where data must stay in your environment, workloads can run on your OpenShift or Kubernetes platform.",
      },
      {
        question: "How do you know it works?",
        answer:
          "We agree a test set and evaluation criteria at the start, and run them before every release.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortTitle: "Cloud",
    tagline: "AWS foundations, OpenShift on AWS, and on-prem to AWS moves.",
    description:
      "We design and build AWS environments for platform and product teams: accounts, networking, and infrastructure as code, plus self-managed OpenShift and ROSA on AWS, and moves from on-prem to AWS.",
    metaDescription:
      "AWS cloud engineering: landing zones, Terraform, self-managed OpenShift and ROSA on AWS, and on-prem to AWS migration, for teams in India and worldwide.",
    whatWeDo: [
      {
        title: "AWS foundations",
        description: "Account structure, IAM, networking, and baseline security, set up as code.",
      },
      {
        title: "Infrastructure as code",
        description: "Terraform modules and pipelines so every environment is reproducible and reviewed.",
      },
      {
        title: "OpenShift on AWS",
        description:
          "Self-managed OpenShift installs and ROSA (Red Hat OpenShift Service on AWS), with GitOps from day one.",
      },
      {
        title: "On-prem to AWS migration",
        description:
          "Plan and run workload moves from on-prem platforms to AWS, including OpenShift to OpenShift.",
      },
      {
        title: "Monitoring and cost visibility",
        description: "Monitoring, alerting, and tagging so you can see how the platform runs and what it costs.",
      },
    ],
    engagement: [
      {
        title: "Assess",
        description: "Review current workloads, accounts, and constraints.",
      },
      {
        title: "Design",
        description: "Agree the target architecture, security baseline, and migration order.",
      },
      {
        title: "Build",
        description: "Implement with Terraform and GitOps, in small reviewed changes.",
      },
      HANDOVER_STEP,
    ],
    openshiftLinks: [
      { label: "OpenShift installation services", href: "/openshift/installation-services" },
      { label: "OpenShift migration services", href: "/openshift/migration-services" },
      { label: "OpenShift managed services", href: "/openshift/managed-services" },
    ],
    guideLinks: [
      { label: "OpenShift Installation Guide", href: "/insights/openshift/installation-guide" },
      { label: "OpenShift Multi-Cluster Management", href: "/insights/openshift/multi-cluster-management" },
      { label: "OpenShift Cost Optimization", href: "/insights/openshift/cost-optimization" },
      { label: "OpenShift vs Kubernetes", href: "/insights/openshift/openshift-vs-kubernetes" },
    ],
    technologies: [
      { name: "AWS" },
      { name: "ROSA" },
      { name: "Terraform" },
      { name: "OpenShift", href: "/technology/openshift" },
      { name: "Argo CD", href: "/technology/argocd" },
      { name: "Prometheus", href: "/technology/prometheus" },
    ],
    relatedCaseStudies: ["openshift-enterprise-migration"],
    faqs: [
      {
        question: "Do you work with Azure or Google Cloud?",
        answer:
          "Our cloud work is led on AWS, including ROSA. If your estate is on another cloud, tell us in the consultation and we will say plainly whether we are the right fit.",
      },
      {
        question: "Can you run OpenShift on AWS?",
        answer:
          "Yes. We install self-managed OpenShift on AWS and set up ROSA. Either way, you hold the Red Hat subscriptions and we do the engineering.",
      },
      {
        question: "Who owns the infrastructure code?",
        answer:
          "You do. The code lives in your repositories and is handed over with runbooks and documentation.",
      },
      {
        question: "How does an engagement start?",
        answer:
          "With a free 30-minute consultation. We then agree the scope in writing before any work starts.",
      },
    ],
  },
  {
    slug: "devops-platform-engineering",
    title: "DevOps & Platform Engineering",
    shortTitle: "DevOps & Platform",
    tagline: "CI/CD, GitOps, and automation for OpenShift and Kubernetes.",
    description:
      "We build the path from commit to cluster: CI pipelines, Helm packaging, Argo CD GitOps, and automation of routine platform work, so releases are repeatable and every change is traceable.",
    metaDescription:
      "DevOps engineering for OpenShift and Kubernetes: Jenkins and GitLab pipelines, Helm, Argo CD GitOps, and Ansible automation, with full handover.",
    whatWeDo: [
      {
        title: "CI pipelines",
        description: "Jenkins or GitLab pipelines that build, test, and publish artifacts and container images.",
      },
      {
        title: "Helm packaging",
        description: "Applications packaged as Helm charts, with per-environment values kept in Git.",
      },
      {
        title: "GitOps with Argo CD",
        description: "Argo CD syncs from Git to the cluster, so Git is the single source of truth for deployments.",
      },
      {
        title: "Platform automation",
        description:
          "Ansible and Python automation for namespace onboarding, quotas, RBAC, monitoring setup, health checks, and backups.",
      },
      {
        title: "Air-gapped delivery",
        description: "Pipelines and mirror registries for clusters with no internet access.",
      },
      {
        title: "Observability",
        description: "Prometheus, Alertmanager, and Grafana set up alongside the platform.",
      },
    ],
    whatWeDoNote: {
      text: "Golden paths and self-service onboarding on OpenShift are covered under",
      link: { label: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
    },
    engagement: [
      {
        title: "Review",
        description: "Map the current build and deploy steps, and where they break.",
      },
      {
        title: "Design",
        description: "Agree pipeline stages, repository layout, and promotion between environments.",
      },
      {
        title: "Build",
        description: "Implement pipelines, charts, and Argo CD applications alongside your team.",
      },
      HANDOVER_STEP,
    ],
    openshiftLinks: [
      { label: "OpenShift deployment services", href: "/openshift/deployment-services" },
      { label: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
      { label: "OpenShift support services", href: "/openshift/support-services" },
    ],
    guideLinks: [
      { label: "OpenShift GitOps", href: "/insights/openshift/gitops" },
      { label: "OpenShift Deployment Best Practices", href: "/insights/openshift/deployment-best-practices" },
    ],
    technologies: [
      { name: "Argo CD", href: "/technology/argocd" },
      { name: "Ansible", href: "/technology/ansible" },
      { name: "Kubernetes", href: "/technology/kubernetes" },
      { name: "Prometheus", href: "/technology/prometheus" },
      { name: "Grafana", href: "/technology/grafana" },
      { name: "Jenkins" },
      { name: "Helm" },
      { name: "GitLab" },
    ],
    relatedCaseStudies: [
      "openshift-jenkins-argocd-cicd",
      "openshift-helm-gitops-production",
      "openshift-operations-automation",
    ],
    faqs: [
      {
        question: "Do you only work on OpenShift?",
        answer:
          "Most of our DevOps work runs on OpenShift. The same pipeline and GitOps patterns apply to upstream Kubernetes.",
      },
      {
        question: "Can you work with our existing CI tool?",
        answer:
          "Yes. We have built pipelines with Jenkins and worked with GitLab and Bitbucket. We extend what you already have where it makes sense.",
      },
      {
        question: "Can a production application move to GitOps without disruption?",
        answer:
          "Yes. We package the running configuration as a Helm chart first, then let Argo CD take over. We did this for a financial services enterprise on an air-gapped cluster without disrupting production.",
      },
      {
        question: "What do we have at the end?",
        answer:
          "Pipelines, Helm charts, and Argo CD configuration in your repositories, with runbooks and a handover session.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    tagline: "Workflow automation and system integration, with SAP capabilities.",
    description:
      "We automate manual workflows across ERP, CRM, and internal applications, with reliable integrations and clear error handling. SAP capabilities include SAP S/4HANA migration, SAP BTP, SAP RAP, and SAP support.",
    metaDescription:
      "Business process automation and system integration across ERP, CRM, and internal apps. SAP capabilities: S/4HANA migration, BTP, RAP, and support.",
    whatWeDo: [
      {
        title: "Process automation",
        description: "Replace manual, repetitive steps with automated workflows and approvals.",
      },
      {
        title: "System integration",
        description: "Connect ERP, CRM, and internal systems through APIs and event-driven pipelines.",
      },
      {
        title: "IT operations automation",
        description: "Ansible and Python automation for routine infrastructure and platform tasks.",
      },
      {
        title: "Error handling and audit logs",
        description: "Retries, alerts, and logs, so failures are visible and every run is recorded.",
      },
    ],
    capabilityBlock: {
      title: "SAP capabilities",
      items: ["SAP S/4HANA migration", "SAP BTP", "SAP RAP", "SAP support"],
      note: "Tell us about your SAP landscape in a consultation and we will explain how we can help.",
    },
    engagement: [
      {
        title: "Map",
        description: "Document the current process, the systems involved, and the exceptions.",
      },
      {
        title: "Design",
        description: "Agree the automated flow, integration points, and failure handling.",
      },
      {
        title: "Build",
        description: "Implement and test against real cases before switching over.",
      },
      HANDOVER_STEP,
    ],
    openshiftLinks: [
      { label: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
      { label: "OpenShift managed services", href: "/openshift/managed-services" },
    ],
    technologies: [
      { name: "Ansible", href: "/technology/ansible" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "SAP S/4HANA" },
      { name: "SAP BTP" },
    ],
    relatedCaseStudies: ["openshift-operations-automation"],
    faqs: [
      {
        question: "Do you work on SAP?",
        answer:
          "SAP S/4HANA migration, SAP BTP, SAP RAP, and SAP support are capabilities we offer. Share your landscape and requirements in a consultation.",
      },
      {
        question: "Which systems can you connect?",
        answer:
          "Any system with an API, a database, or a file interface. ERP and CRM integrations are common starting points.",
      },
      {
        question: "What happens when an automated step fails?",
        answer:
          "Every workflow has retries, alerts, and logs. Items that still fail go to a person for review instead of being dropped.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software",
    tagline: "Web applications, APIs, and internal tools.",
    description:
      "We build web applications, APIs, and internal tools with TypeScript and Python, deployed through CI/CD to your cloud or OpenShift platform, and documented so your team can maintain them.",
    metaDescription:
      "Software development: web applications, APIs, and internal tools with Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL, deployed with CI/CD.",
    whatWeDo: [
      {
        title: "Web applications",
        description: "Customer-facing and internal web applications built with Next.js and TypeScript.",
      },
      {
        title: "APIs and back-end services",
        description: "REST APIs and services in Node.js or Python (FastAPI), backed by PostgreSQL.",
      },
      {
        title: "Internal tools and portals",
        description: "Dashboards, admin tools, and client portals that replace spreadsheets and email.",
      },
      {
        title: "Modernisation",
        description: "Move older applications into containers and onto CI/CD, one part at a time.",
      },
      {
        title: "Delivery pipeline",
        description: "Tests, CI/CD, and deployment to AWS or OpenShift from the first release.",
      },
    ],
    engagement: [
      {
        title: "Scope",
        description: "Agree users, features, integrations, and what the first release includes.",
      },
      {
        title: "Design",
        description: "Review the data model, API contracts, and screens with you before building.",
      },
      {
        title: "Build",
        description: "Short iterations, with working software you can review at each step.",
      },
      HANDOVER_STEP,
    ],
    openshiftLinks: [
      { label: "OpenShift deployment services", href: "/openshift/deployment-services" },
      { label: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
    ],
    serviceLinks: [
      { label: "Business Automation", href: "/solutions/business-automation" },
    ],
    guideLinks: [
      { label: "OpenShift Deployment Best Practices", href: "/insights/openshift/deployment-best-practices" },
    ],
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "OpenShift", href: "/technology/openshift" },
    ],
    relatedCaseStudies: [],
    faqs: [
      {
        question: "Who owns the code?",
        answer: "You do. The code is in your repositories from the first commit.",
      },
      {
        question: "Can you take over an existing application?",
        answer:
          "Yes. We start with a review of the code and infrastructure, then agree what to fix first.",
      },
      {
        question: "Where do you deploy?",
        answer:
          "To your AWS account, your OpenShift or Kubernetes platform, or another environment you choose.",
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

/** The four non-flagship services, in menu order. */
export const otherServiceSlugs = [
  "cloud-infrastructure",
  "devops-platform-engineering",
  "business-automation",
  "software-development",
] as const;
