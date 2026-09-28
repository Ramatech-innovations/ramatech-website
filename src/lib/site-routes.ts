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

/** Stable sitemap lastmod — bump only when content meaningfully changes */
export const SITEMAP_LAST_MODIFIED = new Date("2026-09-18T00:00:00.000Z");

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

/** Highest-intent OpenShift service / geo money pages */
const OPENSHIFT_MONEY_PATHS = new Set([
  "/openshift/installation-services",
  "/openshift/migration-services",
  "/openshift/support-services",
  "/openshift/managed-services",
  "/openshift/platform-engineering",
  "/openshift/india",
]);

const PRIORITY_INSIGHT_PATHS = new Set([
  "/insights/openshift/security",
  "/insights/openshift/installation-guide",
  "/insights/openshift/gitops",
  "/insights/openshift/openshift-vs-kubernetes",
  "/insights/openshift/multi-cluster-management",
]);

const OPENSHIFT_SERVICE_SLUGS = new Set(openshiftServices.map((s) => s.slug));
const OPENSHIFT_GEO_SLUGS = new Set(openshiftGeoPages.map((g) => g.slug));

function getPriority(path: string): number {
  if (path === "" || path === "/openshift") return 1.0;
  if (OPENSHIFT_MONEY_PATHS.has(path)) return 0.95;
  if (path === "/openshift/india/bangalore") return 0.75;
  if (path.startsWith("/openshift/india/")) return 0.65;
  if (PRIORITY_INSIGHT_PATHS.has(path)) return 0.8;
  if (
    path.startsWith("/openshift/") &&
    (OPENSHIFT_SERVICE_SLUGS.has(path.slice("/openshift/".length)) ||
      OPENSHIFT_GEO_SLUGS.has(path.slice("/openshift/".length)))
  ) {
    return 0.9;
  }
  if (path === "/insights/openshift" || path === "/technology") return 0.8;
  if (path.startsWith("/industries/")) return 0.4;
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
  if (OPENSHIFT_MONEY_PATHS.has(path) || PRIORITY_INSIGHT_PATHS.has(path)) {
    return "weekly";
  }
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
    lastModified: SITEMAP_LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
