import type { OpenShiftService } from "@/content/openshift/services";
import type { BreadcrumbSchemaItem } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/lib/seo";

const base = () => siteConfig.url.replace(/\/$/, "");

export const OPENSHIFT_AREA_SERVED = ["IN", "AE", "SA", "QA", "SG"] as const;

const COUNTRY_NAME_TO_ISO: Record<string, string> = {
  India: "IN",
  UAE: "AE",
  "Saudi Arabia": "SA",
  Qatar: "QA",
  Singapore: "SG",
};

export function countryNamesToIsoCodes(names: string[]): string[] {
  return names.map((name) => COUNTRY_NAME_TO_ISO[name] ?? name);
}

export function openshiftHubBreadcrumbItems(): BreadcrumbSchemaItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "OpenShift", path: "/openshift" },
  ];
}

export function openshiftServiceBreadcrumbItems(
  pageName: string,
  pagePath: string
): BreadcrumbSchemaItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "OpenShift", path: "/openshift" },
    { name: pageName, path: pagePath },
  ];
}

export function openshiftHubServiceSchemaProps() {
  return {
    name: "OpenShift Consulting and Professional Services",
    serviceType: "OpenShift Consulting and Professional Services",
    description:
      "Red Hat OpenShift installation, deployment, migration, support, upgrade, and managed services for enterprise clients across India, UAE, Saudi Arabia, Qatar, and Singapore.",
    url: `${base()}/openshift`,
    areaServed: [...OPENSHIFT_AREA_SERVED],
  };
}

export function openshiftServiceSchemaProps(service: OpenShiftService) {
  return {
    name: service.schemaName,
    serviceType: service.h1,
    description: service.metaDescription,
    url: `${base()}/openshift/${service.slug}`,
    areaServed: countryNamesToIsoCodes(service.areaServed),
  };
}

export function openshiftGeoServiceSchemaProps(geo: {
  h1: string;
  metaDescription: string;
  slug: string;
  countryCode: string;
}) {
  return {
    name: geo.h1,
    serviceType: geo.h1,
    description: geo.metaDescription,
    url: `${base()}/openshift/${geo.slug}`,
    areaServed: [geo.countryCode],
  };
}

/** @deprecated Use OrganizationSchema component in layout */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ramatech Innovation Pvt Ltd",
  url: "https://www.ramatech.co.in",
  logo: "https://www.ramatech.co.in/brand/logo-dark.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ramatech.co.in",
    contactType: "sales",
  },
  areaServed: ["IN", "AE", "SA", "QA", "SG"],
};

/** @deprecated Use BreadcrumbSchema component */
export function openshiftBreadcrumbJsonLd(pageName: string, pagePath: string) {
  const pageUrl = `${base()}${pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: openshiftServiceBreadcrumbItems(pageName, pagePath).map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${base()}${item.path}`,
      })
    ),
  };
}

/** @deprecated Use BreadcrumbSchema component */
export function openshiftHubBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: openshiftHubBreadcrumbItems().map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base()}${item.path}`,
    })),
  };
}

/** @deprecated Use ServiceSchema component */
export function openshiftHubServiceJsonLd() {
  const props = openshiftHubServiceSchemaProps();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...props,
    provider: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: base(),
    },
    areaServed: props.areaServed.map((code) => ({
      "@type": "Country",
      name: code,
    })),
  };
}

/** @deprecated Use ServiceSchema component */
export function openshiftServiceJsonLd(service: OpenShiftService) {
  const props = openshiftServiceSchemaProps(service);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...props,
    provider: {
      "@type": "Organization",
      name: organizationJsonLd.name,
      url: organizationJsonLd.url,
    },
    areaServed: props.areaServed.map((code) => ({
      "@type": "Country",
      name: code,
    })),
  };
}

/** @deprecated Use FaqSchema component */
export function openshiftFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
