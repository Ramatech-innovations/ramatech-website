import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { industryLandings } from "@/content/industry-landings";
import {
  insightArticles,
  openshiftIndiaCityPages,
} from "@/content/insights/articles";
import { servicePackages } from "@/content/packages";
import { openshiftGeoPages } from "@/content/openshift/geo-pages";
import { openshiftServices } from "@/content/openshift/services";
import { solutions } from "@/content/solutions";
import { technologyPages } from "@/content/technology-pages";
import { siteConfig } from "@/lib/seo";

export type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES = [
  "",
  "/about",
  "/solutions",
  "/industries",
  "/case-studies",
  "/technology",
  "/contact",
  "/book-consultation",
  "/packages",
  "/privacy",
  "/terms",
];

const INSIGHT_STATIC_ROUTES = ["/insights", "/insights/openshift"];

const OPENSHIFT_SERVICE_SLUGS = new Set(openshiftServices.map((s) => s.slug));
const OPENSHIFT_GEO_SLUGS = new Set(openshiftGeoPages.map((g) => g.slug));

function getPriority(path: string): number {
  if (path === "" || path === "/openshift") return 1.0;
  if (path.startsWith("/openshift/india/")) return 0.6;
  if (
    path.startsWith("/openshift/") &&
    (OPENSHIFT_SERVICE_SLUGS.has(path.slice("/openshift/".length)) ||
      OPENSHIFT_GEO_SLUGS.has(path.slice("/openshift/".length)))
  ) {
    return 0.9;
  }
  if (path === "/insights/openshift" || path === "/technology") return 0.8;
  if (
    path.startsWith("/insights/openshift/") ||
    path.startsWith("/technology/") ||
    path.startsWith("/case-studies/")
  ) {
    return 0.7;
  }
  return 0.8;
}

function getChangeFrequency(path: string): SitemapEntry["changeFrequency"] {
  if (path === "" || path === "/openshift") return "weekly";
  return "monthly";
}

export function getSitemapEntries(): SitemapEntry[] {
  const paths = [
    ...STATIC_ROUTES,
    ...INSIGHT_STATIC_ROUTES,
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...servicePackages.map((p) => `/packages/${p.slug}`),
    ...industryLandings.map((i) => `/industries/${i.slug}`),
    "/openshift",
    ...openshiftServices.map((s) => `/openshift/${s.slug}`),
    ...openshiftGeoPages.map((g) => `/openshift/${g.slug}`),
    ...technologyPages.map((t) => `/technology/${t.slug}`),
    ...insightArticles.map((a) => `/insights/openshift/${a.slug}`),
    ...openshiftIndiaCityPages.map((c) => `/openshift/india/${c.slug}`),
  ];

  return paths.map((path) => ({
    path,
    priority: getPriority(path),
    changeFrequency: getChangeFrequency(path),
  }));
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  return getSitemapEntries().map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
