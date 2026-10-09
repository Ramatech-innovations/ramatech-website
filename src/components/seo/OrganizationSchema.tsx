import { JsonLdScript } from "@/components/seo/json-ld-script";
import { schemaLogoUrl, siteConfig } from "@/lib/seo";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ramatech Innovation",
  url: "https://www.ramatech.co.in",
  logo: schemaLogoUrl,
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ramatech.co.in",
    contactType: "sales",
  },
  areaServed: ["IN", "AE", "SA", "QA", "SG"],
  sameAs: [siteConfig.linkedinUrl, siteConfig.xUrl],
};

export function OrganizationSchema() {
  return <JsonLdScript data={ORGANIZATION_JSON_LD} />;
}
