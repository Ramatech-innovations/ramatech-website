import { JsonLdScript } from "@/components/seo/json-ld-script";
import { schemaLogoUrl, siteConfig } from "@/lib/seo";

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
      name: "Ramatech Innovation",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Ramatech Innovation",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: schemaLogoUrl,
      },
    },
  };

  return <JsonLdScript data={data} />;
}
