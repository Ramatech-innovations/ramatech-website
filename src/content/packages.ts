import type { LucideIcon } from "lucide-react";
import { Brain, Cog, Globe, Rocket } from "lucide-react";

export type PackageIconKey = "globe" | "rocket" | "brain" | "cog";

const iconMap: Record<PackageIconKey, LucideIcon> = {
  globe: Globe,
  rocket: Rocket,
  brain: Brain,
  cog: Cog,
};

export type ServicePackage = {
  slug: string;
  title: string;
  tagline: string;
  timeline: string;
  icon: PackageIconKey;
  description: string;
  deliverables: string[];
  metaDescription: string;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "business-growth-website",
    title: "Business Growth Website",
    tagline: "A high-performance website that works as your 24/7 salesperson",
    timeline: "2–3 weeks",
    icon: "globe",
    description:
      "Launch a fast, conversion-focused site with clear positioning, lead capture, and analytics—built to rank and convert.",
    deliverables: [
      "Information architecture and page structure",
      "Responsive UI aligned to your brand",
      "Contact and lead capture flows",
      "Core SEO, analytics, and performance baseline",
    ],
    metaDescription:
      "Get a high-performance, SEO-ready business website in 2–3 weeks. Built for SMEs, restaurants, clinics, consultants, and law firms.",
  },
  {
    slug: "startup-deployment-sprint",
    title: "Startup Deployment Sprint",
    tagline: "Production-ready cloud infrastructure for your startup—fast",
    timeline: "3–4 weeks",
    icon: "rocket",
    description:
      "Stand up secure cloud foundations, CI/CD, and observability so your team can ship without reinventing platform basics.",
    deliverables: [
      "Cloud landing zone and environment strategy",
      "CI/CD pipelines and deployment workflows",
      "Monitoring, alerting, and runbook starter kit",
      "Security and cost guardrails",
    ],
    metaDescription:
      "Get production-ready cloud infrastructure in 3–4 weeks. Kubernetes, CI/CD, monitoring, and auto-scaling for SaaS and AI startups.",
  },
  {
    slug: "ai-automation-sprint",
    title: "AI Automation Sprint",
    tagline: "Automate your workflows with AI agents and integrations",
    timeline: "4–6 weeks",
    icon: "brain",
    description:
      "Identify high-friction workflows and deliver AI-assisted automation with integrations, guardrails, and measurable time saved.",
    deliverables: [
      "Workflow discovery and prioritization",
      "AI agent or copilot integration design",
      "API and tool connections to your stack",
      "Human-in-the-loop controls and rollout plan",
    ],
    metaDescription:
      "Automate repetitive business workflows with AI agents in 4–6 weeks. WhatsApp bots, document processing, and support automation.",
  },
  {
    slug: "custom-business-systems",
    title: "Custom Business Systems",
    tagline: "Custom software built to replace spreadsheets and manual ops",
    timeline: "6–10 weeks",
    icon: "cog",
    description:
      "Replace brittle spreadsheets and manual processes with a tailored system—roles, workflows, and integrations included.",
    deliverables: [
      "Requirements and data model design",
      "Role-based workflows and approvals",
      "Integrations with existing tools",
      "Handoff, documentation, and support window",
    ],
    metaDescription:
      "Replace spreadsheets and manual processes with custom-built business software. CRM, inventory, operations dashboards, and more.",
  },
];

export function getPackageBySlug(slug: string): ServicePackage | undefined {
  return servicePackages.find((p) => p.slug === slug);
}

export function getPackageIcon(key: PackageIconKey): LucideIcon {
  return iconMap[key];
}
