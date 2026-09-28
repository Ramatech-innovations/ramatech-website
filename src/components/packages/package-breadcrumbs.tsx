import type { PackageLanding } from "@/content/package-landings";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";

export function PackageBreadcrumbs({ landing }: { landing: PackageLanding }) {
  return (
    <Breadcrumbs
      items={[{ name: "Packages", href: "/packages" }, { name: landing.packageName }]}
    />
  );
}
