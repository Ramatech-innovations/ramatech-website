export type TierCard = {
  name: string;
  features: string[];
};

export type ContentBlock =
  | { type: "prose"; paragraphs: string[] }
  | { type: "bulletList"; items: string[] }
  | { type: "numberedSteps"; steps: { title: string; description: string }[] }
  | { type: "tierCards"; tiers: TierCard[] }
  | { type: "slaTable"; rows: { priority: string; response: string }[] };

export type ServiceSection = {
  id: string;
  title: string;
  variant: "light" | "dark";
  blocks: ContentBlock[];
};

export type OpenShiftService = {
  slug: string;
  pageName: string;
  schemaName: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtext: string;
  analyticsLabel: string;
  whatsappMessage: string;
  areaServed: string[];
  sections: ServiceSection[];
  faqs: { question: string; answer: string }[];
  internalLinks: { href: string; label: string }[];
  insightLinks?: { href: string; label: string }[];
  finalCta: {
    headline: string;
    bookLabel: string;
    whatsappLabel: string;
  };
  showMigrationViz?: boolean;
  showCaseStudyCallout?: boolean;
  midCta?: {
    headline?: string;
    bookLabel?: string;
    whatsappLabel?: string;
  };
};
