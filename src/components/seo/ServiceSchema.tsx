import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/seo";

export function ServiceSchema({
  name,
  serviceType,
  description,
  url,
  areaServed,
}: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  areaServed: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Ramatech Innovation Pvt Ltd",
      url: siteConfig.url,
    },
    areaServed: areaServed.map((code) => ({
      "@type": "Country",
      name: code,
    })),
  };

  return <JsonLdScript data={data} />;
}
