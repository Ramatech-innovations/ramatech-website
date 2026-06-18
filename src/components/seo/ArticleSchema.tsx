import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/seo";

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url.replace(/\/$/, "")}/brand/logo-dark.png`,
      },
    },
  };

  return <JsonLdScript data={data} />;
}
