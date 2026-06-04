import { organizationJsonLd, siteConfig } from "@/lib/seo";
import type { PackageLanding } from "@/content/package-landings";

export function packageBreadcrumbJsonLd(landing: PackageLanding) {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/packages/${landing.slug}`;

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
        name: "Packages",
        item: `${base}/packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: landing.packageName,
        item: pageUrl,
      },
    ],
  };
}

export function packageServiceJsonLd(landing: PackageLanding) {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/packages/${landing.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: landing.packageName,
    description: landing.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: organizationJsonLd.name,
      url: organizationJsonLd.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: landing.pricing.display,
      url: pageUrl,
    },
  };
}
