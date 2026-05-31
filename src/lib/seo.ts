import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ramatech.co.in";

export const siteConfig = {
  name: "Ramatech Innovation",
  description:
    "AI-powered technology company building intelligent systems, cloud platforms, and enterprise automation.",
  url: siteUrl,
  tagline: "Engineering intelligent systems at scale.",
  email: "info@ramatech.co.in",
};

/** Inbox for contact form delivery; optional CONTACT_EMAIL env override */
export function getContactEmail(): string {
  return process.env.CONTACT_EMAIL ?? siteConfig.email;
}

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path ? `${siteConfig.url}${path}` : siteConfig.url },
    openGraph: {
      title: fullTitle,
      description,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: ["https://www.linkedin.com/company/ramatechinnovation"],
};
