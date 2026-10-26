import { getIndustryName } from "@/content/industry-landings";
import { PAGE_CONTAINER } from "@/lib/layout";
import { RelatedResources } from "@/components/marketing/related-resources";

export function IndustryInternalLinks({
  relatedSlugs,
}: {
  relatedSlugs: string[];
}) {
  const resources = [
    { title: "All industries", href: "/industries", type: "service" as const },
    ...relatedSlugs.map((slug) => ({
      title: getIndustryName(slug) ?? slug,
      href: `/industries/${slug}`,
      type: "service" as const,
    })),
  ];

  return (
    <section className="section-light on-light border-t border-slate-200 py-12 md:py-14">
      <div className={PAGE_CONTAINER}>
        <RelatedResources heading="Other industries" resources={resources} />
      </div>
    </section>
  );
}
