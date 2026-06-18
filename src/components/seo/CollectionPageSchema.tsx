import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/seo";

export function CollectionPageSchema({
  name,
  description,
  url,
  hasPart,
}: {
  name: string;
  description: string;
  url: string;
  hasPart: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: siteConfig.url,
    },
    hasPart: hasPart.map((part) => ({
      "@type": "Article",
      name: part.name,
      url: part.url,
    })),
  };

  return <JsonLdScript data={data} />;
}
