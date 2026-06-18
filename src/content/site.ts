export const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure" },
      { label: "DevOps & Platform Engineering", href: "/solutions/devops-platform-engineering" },
      { label: "AI Solutions", href: "/solutions/ai-solutions" },
      { label: "Business Automation", href: "/solutions/business-automation" },
      { label: "Software Development", href: "/solutions/software-development" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = {
  solutions: [
    { label: "OpenShift Services", href: "/openshift" },
    { label: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure" },
    { label: "DevOps & Platform", href: "/solutions/devops-platform-engineering" },
    { label: "AI Solutions", href: "/solutions/ai-solutions" },
    { label: "Business Automation", href: "/solutions/business-automation" },
    { label: "Software Development", href: "/solutions/software-development" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Technology", href: "/technology" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const trustStats = [
  { value: "99.95%", label: "Production uptime target" },
  { value: "2 weeks", label: "Average delivery cycles" },
  { value: "30%+", label: "Infra cost reduction" },
  { value: "<15 min", label: "Incident response baseline" },
];

export const trustTags = [
  "Kubernetes",
  "OpenShift",
  "Terraform",
  "AI/ML",
  "Observability",
  "GitOps",
];

export const whyRamatech = [
  {
    title: "Engineering-first",
    description: "We ship production systems—not staffing hours or slide decks.",
  },
  {
    title: "AI-accelerated, human-validated",
    description: "Automation speeds delivery; senior engineers own architecture and security.",
  },
  {
    title: "Outcome-owned",
    description: "Reliability, scale, and automation metrics—not billable milestones.",
  },
  {
    title: "Enterprise discipline",
    description: "Global delivery with runbooks, handover, and operational readiness built in.",
  },
];

export const deliveryModel = {
  ai: [
    "Code and infra scaffolding",
    "Runbook and alert templates",
    "Documentation drafts",
    "L1 incident classification",
  ],
  engineers: [
    "Architecture and security decisions",
    "Client-specific customization",
    "Production validation",
    "L2/L3 escalations",
  ],
};

export const frameworkSteps = [
  { step: "01", title: "Discover", description: "Map systems, constraints, and highest-impact outcomes." },
  { step: "02", title: "Architect", description: "Design platforms, data flows, and reliability targets." },
  { step: "03", title: "Build", description: "AI-accelerated implementation with engineer-led review." },
  { step: "04", title: "Validate", description: "Test, observe, and harden before production cutover." },
  { step: "05", title: "Operate", description: "Handover, monitoring, and continuous improvement." },
];
