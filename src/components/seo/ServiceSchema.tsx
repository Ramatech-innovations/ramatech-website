import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/seo";

export function ServiceSchema({
  name,
  serviceType,
  description,
  url,
  areaServed,
  addressLocality,
}: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  areaServed: string[];
  addressLocality?: string;
}) {
  const areaServedSchema = addressLocality
    ? [
        {
          "@type": "City",
          name: addressLocality,
          containedInPlace: {
            "@type": "Country",
            name: areaServed[0] ?? "IN",
          },
        },
      ]
    : areaServed.map((code) => ({
        "@type": "Country",
        name: code,
      }));

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
    areaServed: areaServedSchema,
  };

  return <JsonLdScript data={data} />;
}
