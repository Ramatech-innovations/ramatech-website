import { PAGE_CONTAINER } from "@/lib/layout";
import {
  RelatedResources,
  linksToResources,
} from "@/components/marketing/related-resources";

export function OpenShiftInternalLinks({
  links,
  insightLinks = [],
}: {
  links: { href: string; label: string }[];
  insightLinks?: { href: string; label: string }[];
}) {
  const serviceResources = [
    { title: "All OpenShift services", href: "/openshift", type: "service" as const },
    ...linksToResources(links, "service"),
  ];

  return (
    <section className="border-t border-white/10 bg-brand-dark py-10">
      <div className={PAGE_CONTAINER}>
        <RelatedResources
          heading="Related OpenShift services"
          resources={serviceResources}
          variant="dark"
        />
        {insightLinks.length > 0 && (
          <div className="mt-8">
            <RelatedResources
              heading="From our Insights hub"
              resources={linksToResources(insightLinks, "insight")}
              variant="dark"
            />
          </div>
        )}
      </div>
    </section>
  );
}
