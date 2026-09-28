import { Breadcrumbs } from "@/components/marketing/breadcrumbs";

export function OpenShiftBreadcrumbs({
  pageName,
  trail = [],
}: {
  pageName?: string;
  trail?: { name: string; path: string }[];
}) {
  return (
    <Breadcrumbs
      items={[
        { name: "OpenShift", href: "/openshift" },
        ...trail.map((item) => ({ name: item.name, href: item.path })),
        ...(pageName ? [{ name: pageName }] : []),
      ]}
    />
  );
}
