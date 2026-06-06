import { organizationJsonLd, siteConfig } from "@/lib/seo";
import type { IndustryLanding } from "@/content/industry-landings";

export function industryBreadcrumbJsonLd(landing: IndustryLanding) {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/industries/${landing.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${base}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: landing.industryName,
        item: pageUrl,
      },
    ],
  };
}

export function industryServiceJsonLd(landing: IndustryLanding) {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/industries/${landing.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: landing.serviceType,
    description: landing.metaDescription,
    url: pageUrl,
    serviceType: landing.serviceType,
    provider: {
      "@type": "Organization",
      name: organizationJsonLd.name,
      url: organizationJsonLd.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
