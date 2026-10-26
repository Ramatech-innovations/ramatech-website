import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { industryLandings } from "@/content/industry-landings";
import { insightArticles } from "@/content/insights/articles";
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

/** Default sitemap lastmod: the 2026-09-28 redesign touched every page. */
const SITE_REDESIGN_DATE = "2026-09-28";

/**
 * Pages changed after the redesign. Bump a path's date when its content meaningfully
 * changes; guides use their own dateModified and case studies their publishedAt.
 */
const PAGE_LAST_MODIFIED: Record<string, string> = {
  "": "2026-10-09",
  "/about": "2026-10-09",
  "/case-studies": "2026-10-09",
  "/openshift": "2026-10-09",
  "/openshift/india": "2026-10-09",
  "/openshift/consulting-services": "2026-10-09",
  "/openshift/platform-engineering": "2026-10-09",
  "/openshift/deployment-services": "2026-10-09",
  "/openshift/managed-services": "2026-10-09",
};

function latest(...dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b));
}

export function getLastModified(path: string): Date {
  const article = insightArticles.find(
    (a) => path === `/insights/openshift/${a.slug}`
  );
  const caseStudy = caseStudies.find((c) => path === `/case-studies/${c.slug}`);
  const date =
    PAGE_LAST_MODIFIED[path] ??
    (article && latest(article.dateModified, SITE_REDESIGN_DATE)) ??
    (caseStudy && latest(caseStudy.publishedAt, SITE_REDESIGN_DATE)) ??
    SITE_REDESIGN_DATE;
  return new Date(`${date}T00:00:00.000Z`);
}

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
  "/openshift/consulting-services",
  "/openshift/deployment-services",
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
    lastModified: getLastModified(path),
    changeFrequency,
    priority,
  }));
}
