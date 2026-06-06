import { PackageDeliverables } from "@/components/packages/package-deliverables";

export function IndustrySolutions({ items }: { items: string[] }) {
  return <PackageDeliverables items={items} variant="light" />;
}
