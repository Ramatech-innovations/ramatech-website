import type { IndustryLanding } from "@/content/industry-landings";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";

export function IndustryBreadcrumbs({ landing }: { landing: IndustryLanding }) {
  return (
    <Breadcrumbs
      items={[{ name: "Industries", href: "/industries" }, { name: landing.industryName }]}
    />
  );
}
