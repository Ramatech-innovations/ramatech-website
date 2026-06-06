export type IndustryLanding = {
  slug: string;
  industryName: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  analyticsLabel: string;
  heroImage: string;
  h1: string;
  heroSubtext: string;
  painPoints: string[];
  solutions: string[];
  packages: { slug: string; title: string; tagline?: string }[];
  socialProof?: { text: string; caseStudyHref?: string; caseStudyLabel?: string };
  showcaseRef?: { title: string; description: string; href: string };
  caseStudyLinks?: { slug: string; title: string; summary: string }[];
  faqs: { question: string; answer: string }[];
  finalCta: {
    headline: string;
    bookLabel?: string;
    whatsappLabel?: string;
  };
  whatsappMessage: string;
  relatedIndustries: string[];
};

const allSlugs = [
  "restaurants",
  "law-firms",
  "manufacturing",
  "startups",
  "smes",
] as const;

function relatedExcept(slug: string): string[] {
  return allSlugs.filter((s) => s !== slug);
}

export const industryLandings: IndustryLanding[] = [
  {
    slug: "restaurants",
    industryName: "Restaurants",
    serviceType: "Restaurant Website & Automation Solutions",
    metaTitle:
      "Restaurant Website & Automation Solutions | Ramatech Innovation",
    metaDescription:
      "Custom websites, online ordering, WhatsApp automation, and digital menus for restaurants. Get more orders and reduce staff workload.",
    analyticsLabel: "industry_restaurants",
    heroImage: "/industries/restaurants.png",
    h1: "Modern Technology for Restaurants That Want to Grow",
    heroSubtext:
      "Get found online, take orders without paying aggregator commissions, and free your staff from juggling calls, WhatsApp, and walk-ins.",
    painPoints: [
      "Customers can't find you or order online",
      "You're manually managing orders across calls, WhatsApp, and walk-ins",
      "Your menu is a PDF on Facebook from 2022",
      "You're paying 30% commission to food aggregators",
    ],
    solutions: [
      "Professional restaurant website with digital menu",
      "Online ordering system (commission-free)",
      "WhatsApp order automation",
      "QR code table ordering",
      "Google My Business optimization",
      "Loyalty program integration",
    ],
    packages: [
      {
        slug: "business-growth-website",
        title: "Business Growth Website",
        tagline: "Your 24/7 digital storefront",
      },
      {
        slug: "ai-automation-sprint",
        title: "AI Automation Sprint",
        tagline: "Automate orders and customer messages",
      },
    ],
    socialProof: {
      text: "We've built ordering systems and websites for restaurants across India.",
    },
    faqs: [
      {
        question: "Do you integrate with Swiggy/Zomato?",
        answer:
          "Yes, we can integrate third-party platforms into a unified order dashboard.",
      },
      {
        question: "Can customers order directly from my website?",
        answer:
          "Yes — commission-free direct ordering is one of our core offerings.",
      },
    ],
    finalCta: {
      headline: "Get a Free Restaurant Technology Consultation",
      bookLabel: "Book Consultation",
      whatsappLabel: "Chat About Your Restaurant",
    },
    whatsappMessage:
      "Hi Ramatech, I run a restaurant and want to discuss digital solutions",
    relatedIndustries: relatedExcept("restaurants"),
  },
  {
    slug: "law-firms",
    industryName: "Law Firms",
    serviceType: "Legal Technology Solutions",
    metaTitle: "Legal Technology Solutions for Law Firms | Ramatech Innovation",
    metaDescription:
      "Custom client portals, document automation, and case management systems for law firms and legal consultants. Reduce admin, focus on law.",
    analyticsLabel: "industry_law_firms",
    heroImage: "/industries/law-firms.png",
    h1: "Cut Legal Admin Time in Half with Smart Automation",
    heroSubtext:
      "Give clients a professional portal, automate intake and documents, and stop digging through email and WhatsApp for case updates.",
    painPoints: [
      "Case files across email, WhatsApp, and folders",
      "Clients call for updates you have to dig through notes to find",
      "Billing and invoicing is manual",
      "No professional client-facing portal",
    ],
    solutions: [
      "Client portal (case status, documents, billing)",
      "Automated client intake forms",
      "Document generation (NDAs, agreements)",
      "Appointment scheduling automation",
      "Professional law firm website",
      "WhatsApp status updates for clients",
    ],
    packages: [
      {
        slug: "custom-business-systems",
        title: "Custom Business Systems",
        tagline: "Client portals and case workflows",
      },
      {
        slug: "ai-automation-sprint",
        title: "AI Automation Sprint",
        tagline: "Document and intake automation",
      },
      {
        slug: "business-growth-website",
        title: "Business Growth Website",
        tagline: "A credible firm presence online",
      },
    ],
    showcaseRef: {
      title: "LegalOS — Client Portal Architecture",
      description:
        "Reference architecture for secure client portals, document workflows, and role-based access.",
      href: "/showcase/legalos",
    },
    faqs: [
      {
        question: "Is client data kept secure?",
        answer:
          "All systems include role-based access, encryption, and audit trails.",
      },
      {
        question: "Can this replace our current case management tool?",
        answer: "We can build to replace or integrate with existing tools.",
      },
    ],
    finalCta: {
      headline: "Book a Free Legal Technology Consultation",
      bookLabel: "Book Free Consultation",
      whatsappLabel: "Chat About Your Firm",
    },
    whatsappMessage:
      "Hi Ramatech, I run a law firm and want to discuss legal technology",
    relatedIndustries: relatedExcept("law-firms"),
  },
  {
    slug: "manufacturing",
    industryName: "Manufacturing",
    serviceType: "Manufacturing Business Software & Automation",
    metaTitle:
      "Manufacturing Business Software & Automation | Ramatech Innovation",
    metaDescription:
      "Custom inventory, production tracking, and operations dashboards for manufacturing businesses. Replace spreadsheets with real systems.",
    analyticsLabel: "industry_manufacturing",
    heroImage: "/industries/manufacturing.png",
    h1: "Real-Time Visibility for Your Manufacturing Operations",
    heroSubtext:
      "Replace error-prone spreadsheets with inventory, production, and dispatch systems your team can use on the factory floor.",
    painPoints: [
      "Inventory tracked in Excel — errors every week",
      "No visibility into production floor status",
      "Purchase orders and dispatch done manually",
      "Reporting takes 2 days to compile",
    ],
    solutions: [
      "Inventory management system",
      "Production tracking dashboard",
      "Purchase order + dispatch automation",
      "Supplier management portal",
      "Real-time operations reports",
    ],
    packages: [
      {
        slug: "custom-business-systems",
        title: "Custom Business Systems",
        tagline: "Built for how your factory runs",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with Tally or existing ERP?",
        answer:
          "Yes. We integrate with Tally, Zoho, and most accounting/ERP tools.",
      },
      {
        question: "Is this mobile accessible for factory floor staff?",
        answer: "Yes — all systems are mobile-responsive.",
      },
    ],
    finalCta: {
      headline: "Book a Free Manufacturing Systems Consultation",
      bookLabel: "Book Free Consultation",
      whatsappLabel: "Chat About Your Operations",
    },
    whatsappMessage:
      "Hi Ramatech, I run a manufacturing business and want to discuss operations software",
    relatedIndustries: relatedExcept("manufacturing"),
  },
  {
    slug: "startups",
    industryName: "Startups",
    serviceType: "Cloud Infrastructure & DevOps for Startups",
    metaTitle: "Cloud Infrastructure & DevOps for Startups | Ramatech Innovation",
    metaDescription:
      "Production-ready Kubernetes, CI/CD, and AI infrastructure for SaaS and AI startups. Go from code to production in 3–4 weeks.",
    analyticsLabel: "industry_startups",
    heroImage: "/industries/startups.png",
    h1: "Ship Faster. Scale Confidently. Focus on Product.",
    heroSubtext:
      "Get production-ready cloud infrastructure, CI/CD, and observability without hiring a full-time DevOps team.",
    painPoints: [
      "Our infra is held together with scripts and prayers",
      "Every deployment is stressful",
      "We can't afford a full-time DevOps engineer",
      "Our cloud bill is out of control",
    ],
    solutions: [
      "Kubernetes cluster setup",
      "CI/CD pipeline (GitHub Actions / Argo CD)",
      "Cloud cost optimization",
      "AI/ML infrastructure",
      "Observability stack",
      "Security hardening",
    ],
    packages: [
      {
        slug: "startup-deployment-sprint",
        title: "Startup Deployment Sprint",
        tagline: "Production-ready in 3–4 weeks",
      },
      {
        slug: "ai-automation-sprint",
        title: "AI Automation Sprint",
        tagline: "AI workflows and integrations",
      },
    ],
    caseStudyLinks: [
      {
        slug: "openshift-enterprise-migration",
        title: "Enterprise OpenShift Migration",
        summary:
          "Migrated legacy workloads to OpenShift with GitOps and policy guardrails for regulated operations.",
      },
      {
        slug: "observability-platform-scale",
        title: "Observability Platform at Scale",
        summary:
          "Unified metrics, logs, and traces for a multi-tenant platform serving 50k+ daily active users.",
      },
    ],
    faqs: [
      {
        question: "What stage startups do you work with?",
        answer: "Pre-seed to Series B. We scale with you.",
      },
      {
        question: "Do you offer ongoing DevOps support?",
        answer: "Yes — retainer-based DevOps support available.",
      },
    ],
    finalCta: {
      headline: "Book a Free Infrastructure Review",
      bookLabel: "Book Free Consultation",
      whatsappLabel: "Chat About Your Stack",
    },
    whatsappMessage:
      "Hi Ramatech, I'm a startup founder and want an infrastructure review",
    relatedIndustries: relatedExcept("startups"),
  },
  {
    slug: "smes",
    industryName: "SMEs",
    serviceType: "Technology Solutions for Small & Medium Businesses",
    metaTitle:
      "Technology Solutions for Small & Medium Businesses | Ramatech",
    metaDescription:
      "Websites, automation, and custom software for Indian SMEs. Professional technology without enterprise price tags.",
    analyticsLabel: "industry_smes",
    heroImage: "/industries/smes.png",
    h1: "Enterprise-Grade Technology for Growing Indian Businesses",
    heroSubtext:
      "Professional websites, WhatsApp automation, and custom tools — without the enterprise price tag or jargon.",
    painPoints: [
      "We know we need technology but don't know where to start",
      "Our website is old and doesn't generate any leads",
      "Too much manual work slowing us down",
      "We can't afford big IT companies",
    ],
    solutions: [
      "Professional business website",
      "WhatsApp + chatbot automation",
      "Custom internal tools",
      "Google Workspace + tool setup",
      "Business process automation",
    ],
    packages: [
      {
        slug: "business-growth-website",
        title: "Business Growth Website",
        tagline: "A site that generates leads",
      },
      {
        slug: "startup-deployment-sprint",
        title: "Startup Deployment Sprint",
        tagline: "Cloud infra when you need to scale",
      },
      {
        slug: "ai-automation-sprint",
        title: "AI Automation Sprint",
        tagline: "Automate repetitive work",
      },
      {
        slug: "custom-business-systems",
        title: "Custom Business Systems",
        tagline: "Replace spreadsheets and manual ops",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses outside major cities?",
        answer: "Yes — we work remotely across India.",
      },
      {
        question: "What's the minimum budget?",
        answer: "Projects start from ₹49,999 depending on scope.",
      },
    ],
    finalCta: {
      headline: "Book a Free SME Technology Consultation",
      bookLabel: "Book Free Consultation",
      whatsappLabel: "Chat About Your Business",
    },
    whatsappMessage:
      "Hi Ramatech, I run an SME and want to discuss technology options",
    relatedIndustries: relatedExcept("smes"),
  },
];

export function getIndustryLanding(slug: string): IndustryLanding | undefined {
  return industryLandings.find((i) => i.slug === slug);
}

export function getIndustryName(slug: string): string | undefined {
  return industryLandings.find((i) => i.slug === slug)?.industryName;
}
