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
    <section className="section-light on-light border-t border-slate-200 py-12 md:py-14">
      <div className={PAGE_CONTAINER}>
        <RelatedResources heading="Related OpenShift services" resources={serviceResources} />
        {insightLinks.length > 0 && (
          <div className="mt-10">
            <RelatedResources
              heading="Related reading"
              resources={linksToResources(insightLinks, "insight")}
            />
          </div>
        )}
      </div>
    </section>
  );
}
