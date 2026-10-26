import { openshiftServices } from "@/content/openshift/service-catalog";

export type NavChild = { label: string; href: string; description?: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  viewAll?: NavChild;
};

const openshiftNavChildren: NavChild[] = openshiftServices.map((s) => ({
  label: s.title.replace(/^OpenShift /, ""),
  href: s.href ?? `/openshift/${s.slug}`,
}));

export const serviceLinks: NavChild[] = [
  {
    label: "Cloud Infrastructure",
    href: "/solutions/cloud-infrastructure",
    description: "AWS foundations, ROSA, and on-prem to AWS moves",
  },
  {
    label: "DevOps & Platform Engineering",
    href: "/solutions/devops-platform-engineering",
    description: "CI/CD, GitOps, and platform automation",
  },
  {
    label: "Business Automation",
    href: "/solutions/business-automation",
    description: "Workflow automation and SAP capabilities",
  },
  {
    label: "Software Development",
    href: "/solutions/software-development",
    description: "Web applications, APIs, and internal tools",
  },
];

export const navLinks: NavItem[] = [
  {
    label: "OpenShift",
    href: "/openshift",
    children: openshiftNavChildren,
    viewAll: { label: "All OpenShift services", href: "/openshift" },
  },
  { label: "AI", href: "/solutions/ai-solutions" },
  {
    label: "Services",
    href: "/solutions",
    children: serviceLinks,
    viewAll: { label: "All services", href: "/solutions" },
  },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    href: "/insights",
    children: [
      { label: "Insights", href: "/insights", description: "OpenShift guides and articles" },
      { label: "Technology", href: "/technology", description: "Technologies we work with" },
    ],
  },
  { label: "About", href: "/about" },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "OpenShift",
    links: [
      { label: "OpenShift services", href: "/openshift" },
      ...openshiftNavChildren.slice(0, 6),
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Solutions", href: "/solutions/ai-solutions" },
      ...serviceLinks.map(({ label, href }) => ({ label, href })),
      { label: "Industries", href: "/industries" },
      { label: "Packages", href: "/packages" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "OpenShift guides", href: "/insights/openshift" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book Consultation", href: "/book-consultation" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const contactDetails = {
  whatsappDisplay: "+91 98282 41244",
  hours: "Mon–Sat, 10:00–19:00 IST",
};

export const frameworkSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Review your environment, constraints, and what the platform must support.",
  },
  {
    step: "02",
    title: "Design",
    description: "Agree the architecture, scope, and acceptance criteria before any build starts.",
  },
  {
    step: "03",
    title: "Build",
    description: "Implement with infrastructure as code and GitOps, in small reviewed changes.",
  },
  {
    step: "04",
    title: "Validate",
    description: "Test, observe, and harden before production cutover.",
  },
  {
    step: "05",
    title: "Hand over",
    description: "Runbooks, documentation, and knowledge transfer so your team can operate it.",
  },
];

export const deliveryPrinciples = [
  "Engineers do the work: the people who scope your project are the people who build it.",
  "Everything is handed over: runbooks, repositories, and documentation stay with your team.",
  "Changes go through Git: infrastructure as code and GitOps, with a record of every change.",
  "We install and operate; we do not sell Red Hat licenses. You keep your own subscriptions.",
];
