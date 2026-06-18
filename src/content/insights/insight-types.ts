export type InsightArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  h1: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  sections: InsightArticleSection[];
  relatedServices: { href: string; label: string }[];
  relatedTechnology: { href: string; label: string }[];
  relatedReading: string[];
  datePublished: string;
  dateModified: string;
};

export type OpenShiftPillar = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtext: string;
  body: string[];
};

export const INSIGHT_SCHEMA_DATE = "2026-06-14";
