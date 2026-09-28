import type { CatalogItem } from "@/content/openshift/service-catalog";
import { OpenShiftServiceCards } from "@/components/openshift/openshift-service-cards";

export function OpenShiftGeoCards({ items }: { items: CatalogItem[] }) {
  return <OpenShiftServiceCards items={items} columns={3} />;
}
