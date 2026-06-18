export type OpenShiftIndiaCityPage = {
  slug: string;
  cityName: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtext: string;
  analyticsLabel: string;
  whatsappMessage: string;
  localContext: string[];
  serviceSummaries: {
    href: string;
    label: string;
    paragraphs: string[];
  }[];
  complianceNote: string;
  faqs: { question: string; answer: string }[];
  finalCta: {
    headline: string;
    bookLabel: string;
    whatsappLabel: string;
  };
};

export type OpenShiftGeoCityCoverage = {
  slug: string;
  name: string;
  description: string;
};
