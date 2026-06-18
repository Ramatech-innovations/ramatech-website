import { JsonLdScript } from "@/components/seo/json-ld-script";

const ORGANIZATION_JSON_LD = {
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

export function OrganizationSchema() {
  return <JsonLdScript data={ORGANIZATION_JSON_LD} />;
}
