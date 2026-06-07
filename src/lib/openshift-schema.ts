import { organizationJsonLd, siteConfig } from "@/lib/seo";
import type { OpenShiftService } from "@/content/openshift/services";

const base = () => siteConfig.url.replace(/\/$/, "");

export function openshiftBreadcrumbJsonLd(
  pageName: string,
  pagePath: string
) {
  const pageUrl = `${base()}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "OpenShift",
        item: `${base()}/openshift`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

export function openshiftHubBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "OpenShift",
        item: `${base()}/openshift`,
      },
    ],
  };
}

export function openshiftHubServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OpenShift Consulting and Professional Services",
    provider: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: base(),
    },
    serviceType: "IT Consulting",
    description:
      "Red Hat OpenShift installation, deployment, migration, support, upgrade, and managed services for enterprise clients across India, UAE, Saudi Arabia, and Singapore.",
    areaServed: ["India", "UAE", "Saudi Arabia", "Qatar", "Singapore"],
    url: `${base()}/openshift`,
  };
}

export function openshiftServiceJsonLd(service: OpenShiftService) {
  const pageUrl = `${base()}/openshift/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.schemaName,
    description: service.metaDescription,
    url: pageUrl,
    serviceType: service.serviceType,
    provider: {
      "@type": "Organization",
      name: organizationJsonLd.name,
      url: organizationJsonLd.url,
    },
    areaServed: service.areaServed.map((name) => ({
      "@type": "Country",
      name,
    })),
  };
}

export function openshiftFaqJsonLd(
  faqs: { question: string; answer: string }[]
) {
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
