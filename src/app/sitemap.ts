import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { solutions } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";

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
    "/privacy",
    "/terms",
  ];

  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const caseRoutes = caseStudies.map((c) => `/case-studies/${c.slug}`);

  return [...staticRoutes, ...solutionRoutes, ...caseRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
