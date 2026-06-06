export type PackageLanding = {
  slug: string;
  packageName: string;
  metaTitle: string;
  metaDescription: string;
  analyticsLabel: string;
  hero: {
    h1: string;
    subtext: string;
    whatsappCtaLabel?: string;
  };
  audience: string[];
  problems: { problem: string; solution: string }[];
  deliverables: string[];
  timeline: { week: string; label: string }[];
  pricing: { display: string; note?: string };
  faqs: { question: string; answer: string }[];
  useCases?: { title: string; description: string }[];
  examples?: string[];
  finalCta: { headline: string; whatsappLabel?: string };
  internalLinks: { href: string; label: string }[];
};

export const packageLandings: PackageLanding[] = [
  {
    slug: "business-growth-website",
    packageName: "Business Growth Website",
    analyticsLabel: "business_growth_website",
    metaTitle:
      "Business Growth Website Package | Professional Website Development | Ramatech",
    metaDescription:
      "Get a high-performance, SEO-ready business website in 2–3 weeks. Built for SMEs, restaurants, clinics, consultants, and law firms. Enquire now.",
    hero: {
      h1: "Your Business Deserves a Website That Generates Leads",
      subtext:
        "We design and develop fast, professional websites that establish credibility, rank on Google, and convert visitors into customers — in 2–3 weeks.",
    },
    audience: [
      "Restaurants & cafes needing online presence + ordering",
      "Law firms & consultants needing credibility",
      "Clinics & healthcare providers",
      "SMEs replacing outdated websites",
      "Coaches, freelancers, agencies",
    ],
    problems: [
      {
        problem: "No website or embarrassing old one",
        solution: "Professional, modern site",
      },
      {
        problem: "Not showing on Google",
        solution: "SEO-optimized from day 1",
      },
      {
        problem: "Low trust, low enquiries",
        solution: "Designed to convert",
      },
      {
        problem: "No idea where to start",
        solution: "We handle everything",
      },
    ],
    deliverables: [
      "Custom design (not templates)",
      "Up to 8 pages",
      "Mobile-first, responsive",
      "SEO meta tags, sitemap, Google Search Console setup",
      "Contact form + WhatsApp integration",
      "Google Analytics setup",
      "30-day post-launch support",
      "CMS so you can update content",
    ],
    timeline: [
      { week: "Week 1", label: "Design + content" },
      { week: "Week 2", label: "Development" },
      { week: "Week 3", label: "Testing + Launch" },
    ],
    pricing: {
      display: "Starting from ₹49,999",
      note: "Final pricing depends on scope and features",
    },
    faqs: [
      {
        question: "Do I need to provide content?",
        answer:
          "We'll guide you through a content brief. If you need copywriting, we offer that as an add-on.",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "We set up foundational SEO — meta tags, sitemap, Search Console. Rankings grow over time with content.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "30 days of free revisions included. Ongoing support available.",
      },
      {
        question: "How do I get started?",
        answer:
          "Book a free 30-minute consultation and we'll scope your project.",
      },
    ],
    finalCta: {
      headline: "Ready to launch your business website?",
      whatsappLabel: "Chat Now",
    },
    internalLinks: [
      { href: "/industries/restaurants", label: "Restaurants & cafes" },
      { href: "/industries/law-firms", label: "Law firms & consultants" },
      { href: "/industries/smes", label: "SMEs" },
      { href: "/packages/ai-automation-sprint", label: "AI Automation Sprint" },
    ],
  },
  {
    slug: "startup-deployment-sprint",
    packageName: "Startup Deployment Sprint",
    analyticsLabel: "startup_deployment_sprint",
    metaTitle:
      "Startup Deployment Sprint | Cloud Infrastructure for Startups | Ramatech",
    metaDescription:
      "Get production-ready cloud infrastructure in 3–4 weeks. Kubernetes, CI/CD, monitoring, and auto-scaling. Built for SaaS and AI startups.",
    hero: {
      h1: "Go from Code to Production in 3–4 Weeks",
      subtext:
        "We set up your entire cloud infrastructure — Kubernetes, CI/CD pipelines, monitoring, and auto-scaling — so your team can ship with confidence from day one.",
    },
    audience: [
      "Early-stage SaaS startups (seed to Series A)",
      "AI/ML startups needing GPU-ready infra",
      "Founders tired of managing servers",
      "CTOs who need infra but not a full DevOps hire",
    ],
    problems: [
      {
        problem: "Our infra breaks under load",
        solution: "Auto-scaling Kubernetes clusters",
      },
      {
        problem: "Deployments are manual and scary",
        solution: "GitOps CI/CD pipelines",
      },
      {
        problem: "We have no monitoring",
        solution: "Full observability stack",
      },
      {
        problem: "Cloud bills keep climbing",
        solution: "Cost-optimized architecture",
      },
    ],
    deliverables: [
      "Cloud account setup (AWS / GCP / Azure)",
      "Kubernetes cluster (managed)",
      "CI/CD pipeline (GitHub Actions / Argo CD)",
      "Container registry",
      "Monitoring + alerting (Grafana / Prometheus)",
      "Secrets management",
      "Auto-scaling configuration",
      "Documentation + handover",
    ],
    timeline: [
      { week: "Week 1", label: "Cloud setup + architecture design" },
      { week: "Week 2", label: "Kubernetes + CI/CD" },
      { week: "Week 3", label: "Monitoring + security hardening" },
      { week: "Week 4", label: "Testing + handover" },
    ],
    pricing: {
      display: "Starting from ₹1,49,999",
    },
    faqs: [
      {
        question: "Which cloud provider do you support?",
        answer:
          "AWS, GCP, and Azure. We recommend based on your stack and budget.",
      },
      {
        question: "Do we need DevOps experience to manage it?",
        answer:
          "No. We document everything and can provide ongoing support.",
      },
      {
        question: "Can this scale as we grow?",
        answer:
          "Yes. We build for growth from day one — auto-scaling is standard.",
      },
    ],
    finalCta: {
      headline: "Ready to ship to production with confidence?",
    },
    internalLinks: [
      {
        href: "/solutions/devops-platform-engineering",
        label: "DevOps & Platform Engineering",
      },
      {
        href: "/solutions/cloud-infrastructure",
        label: "Cloud Infrastructure",
      },
    ],
  },
  {
    slug: "ai-automation-sprint",
    packageName: "AI Automation Sprint",
    analyticsLabel: "ai_automation_sprint",
    metaTitle:
      "AI Automation Sprint | Business Process Automation with AI | Ramatech",
    metaDescription:
      "Automate repetitive business workflows with AI agents in 4–6 weeks. WhatsApp bots, document processing, customer support automation, and more.",
    hero: {
      h1: "Automate Your Biggest Time Wasters with AI",
      subtext:
        "We identify your most repetitive business workflows and replace them with AI agents — reducing manual effort, errors, and cost in 4–6 weeks.",
      whatsappCtaLabel: "Discuss Your Workflow",
    },
    audience: [
      "SMEs drowning in manual data entry",
      "Law firms with document-heavy workflows",
      "Clinics managing appointment + follow-up manually",
      "Restaurants managing orders across channels",
      "Any business spending hours on repetitive tasks",
    ],
    problems: [],
    useCases: [
      {
        title: "Customer Support",
        description: "AI chatbot on WhatsApp/website",
      },
      {
        title: "Document Processing",
        description: "Auto-extract data from invoices, forms",
      },
      {
        title: "Appointment Booking",
        description: "AI-powered scheduling",
      },
      {
        title: "Lead Follow-up",
        description: "Automated nurture sequences",
      },
      {
        title: "Reporting",
        description: "Auto-generated weekly business reports",
      },
      {
        title: "Order Management",
        description: "Restaurant/retail order routing",
      },
    ],
    deliverables: [
      "Workflow discovery session",
      "AI agent build (2–3 workflows)",
      "Integration with your existing tools (WhatsApp, email, CRM, etc.)",
      "Testing + QA",
      "Team training (1 session)",
      "30-day monitoring",
    ],
    timeline: [
      { week: "Week 1–2", label: "Discovery + design" },
      { week: "Week 3–4", label: "Build + integrate" },
      { week: "Week 5–6", label: "Test + deploy + train" },
    ],
    pricing: {
      display: "Starting from ₹99,999",
    },
    faqs: [
      {
        question: "Do I need technical staff to manage this?",
        answer: "No. We build and hand over. Ongoing support available.",
      },
      {
        question: "What tools do you integrate with?",
        answer:
          "WhatsApp Business API, Google Workspace, Notion, Zoho, Salesforce, and most REST APIs.",
      },
      {
        question: "Is this the same as RPA?",
        answer:
          "No — we use modern AI agents (LLMs + APIs), not brittle screen-scrapers.",
      },
    ],
    finalCta: {
      headline: "Ready to automate your busiest workflows?",
      whatsappLabel: "Discuss Your Workflow",
    },
    internalLinks: [
      { href: "/solutions/ai-solutions", label: "AI Solutions" },
      { href: "/solutions/business-automation", label: "Business Automation" },
      { href: "/industries/law-firms", label: "Law firms & consultants" },
    ],
  },
  {
    slug: "custom-business-systems",
    packageName: "Custom Business Systems",
    analyticsLabel: "custom_business_systems",
    metaTitle:
      "Custom Business Systems | Tailored Software for SMEs | Ramatech",
    metaDescription:
      "Replace spreadsheets and manual processes with custom-built business software. CRM, inventory, operations dashboards, and more. Enquire today.",
    hero: {
      h1: "Custom Software That Fits Your Business — Not the Other Way Around",
      subtext:
        "Stop forcing your operations into spreadsheets or generic SaaS tools that almost fit. We build custom business systems designed exactly for how your business works.",
    },
    audience: [
      "Manufacturing businesses tracking inventory manually",
      "Law firms managing cases in spreadsheets",
      "Clinics running on paper",
      "Logistics companies with custom dispatch needs",
      'Any SME whose "system" is a collection of Excel files',
    ],
    problems: [
      {
        problem: "We use 5 different tools and nothing talks to each other",
        solution: "Unified custom system",
      },
      {
        problem: "Excel breaks every month",
        solution: "Proper database + UI",
      },
      {
        problem: "Our team wastes time on manual reports",
        solution: "Auto-generated dashboards",
      },
      {
        problem: "We can't see our business clearly",
        solution: "Real-time operations visibility",
      },
    ],
    examples: [
      "Custom CRM",
      "Inventory & order management",
      "Staff scheduling & payroll tracker",
      "Client portal",
      "Operations dashboard",
    ],
    deliverables: [
      "Requirements discovery",
      "UI/UX design",
      "Full-stack web application",
      "Admin dashboard",
      "User roles & permissions",
      "Deployment + hosting setup",
      "Training + documentation",
    ],
    timeline: [
      {
        week: "6–10 weeks",
        label: "Depending on scope — discovery through launch",
      },
    ],
    pricing: {
      display: "Starting from ₹1,99,999",
    },
    faqs: [
      {
        question: "Can this integrate with our existing software?",
        answer:
          "Yes — Tally, Zoho, WhatsApp, payment gateways, and most APIs.",
      },
      {
        question: "Who owns the code?",
        answer: "You do. 100% ownership, source code delivered.",
      },
      {
        question: "Can you add features later?",
        answer: "Yes. We build with future growth in mind.",
      },
    ],
    finalCta: {
      headline: "Ready to replace spreadsheets with software that fits?",
    },
    internalLinks: [
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/industries/law-firms", label: "Law firms & consultants" },
      {
        href: "/solutions/software-development",
        label: "Software Development",
      },
    ],
  },
];

export function getPackageLanding(slug: string): PackageLanding | undefined {
  return packageLandings.find((p) => p.slug === slug);
}
