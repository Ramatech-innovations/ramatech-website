import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { solutions } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";
import { servicePackages } from "@/content/packages";

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

  return [...staticRoutes, ...solutionRoutes, ...caseRoutes, ...packageRoutes].map(
    (path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
    })
  );
}
