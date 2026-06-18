import type { OpenShiftGeoCityCoverage } from "./india-city-types";

export type OpenShiftGeoPage = {
  slug: string;
  countryName: string;
  countryCode: "IN" | "AE" | "SA" | "QA" | "SG";
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtext: string;
  analyticsLabel: string;
  whatsappMessage: string;
  intro: string[];
  serviceSummaries: {
    href: string;
    label: string;
    paragraphs: string[];
  }[];
  compliance: string[];
  deploymentModels: string[];
  caseStudy: {
    href: string;
    title: string;
    summary: string;
  };
  faqs: { question: string; answer: string }[];
  finalCta: {
    headline: string;
    bookLabel: string;
    whatsappLabel: string;
  };
  cityCoverage?: OpenShiftGeoCityCoverage[];
};

export type { OpenShiftGeoCityCoverage } from "./india-city-types";
