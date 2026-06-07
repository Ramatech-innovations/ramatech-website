import { Card } from "@/components/ui/card";
import type { CatalogItem } from "@/content/openshift/service-catalog";

export function OpenShiftGeoCards({ items }: { items: CatalogItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.slug}>
          <Card tone="light" className="p-6 opacity-75">
            <span className="type-caption text-brand-primary">Coming soon</span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-brand-ink">
              {item.title}
            </h3>
            <p className="type-body-card mt-2">{item.description}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
