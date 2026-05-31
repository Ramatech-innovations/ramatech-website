import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ramatech.co.in";

export const defaultOgImage = "/og-image.png";
export const defaultOgAlt =
  "Ramatech Innovation — AI-powered technology for product and platform teams";

export const siteConfig = {
  name: "Ramatech Innovation",
  description:
    "Ramatech Innovation engineers AI systems, cloud platforms, DevOps, and enterprise automation for product and platform teams worldwide.",
  url: siteUrl,
  tagline: "Engineering intelligent systems at scale.",
  email: "info@ramatech.co.in",
};

/** Inbox for contact form delivery; optional CONTACT_EMAIL env override */
export function getContactEmail(): string {
  return process.env.CONTACT_EMAIL ?? siteConfig.email;
}

/** Trim descriptions for SERP (~160 chars) */
export function metaDescription(text: string, max = 160): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
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
  const desc = metaDescription(description);
  const canonical = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: defaultOgAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [defaultOgImage],
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
  logo: `${siteConfig.url}/brand/logo-icon.png`,
  sameAs: ["https://www.linkedin.com/company/ramatechinnovation"],
};
