import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/seo";

export type BreadcrumbSchemaItem = {
  name: string;
  path: string;
};

export function BreadcrumbSchema({ items }: { items: BreadcrumbSchemaItem[] }) {
  const base = siteConfig.url.replace(/\/$/, "");

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };

  return <JsonLdScript data={data} />;
}
