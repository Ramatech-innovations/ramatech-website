import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { solutions } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";
import { servicePackages } from "@/content/packages";
import { industryLandings } from "@/content/industry-landings";
import { openshiftServices } from "@/content/openshift/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
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

  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const caseRoutes = caseStudies.map((c) => `/case-studies/${c.slug}`);
  const packageRoutes = servicePackages.map((p) => `/packages/${p.slug}`);
  const industryRoutes = industryLandings.map((i) => `/industries/${i.slug}`);
  const openshiftRoutes = [
    "/openshift",
    ...openshiftServices.map((s) => `/openshift/${s.slug}`),
  ];

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...caseRoutes,
    ...packageRoutes,
    ...industryRoutes,
    ...openshiftRoutes,
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/openshift"
          ? 0.9
          : path.startsWith("/openshift/")
            ? 0.85
            : 0.8,
  }));
}
