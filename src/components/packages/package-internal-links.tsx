import { PAGE_CONTAINER } from "@/lib/layout";
import {
  RelatedResources,
  linksWithInferredType,
} from "@/components/marketing/related-resources";

export function PackageInternalLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <section className="section-light on-light border-t border-slate-200 py-12 md:py-14">
      <div className={PAGE_CONTAINER}>
        <RelatedResources heading="Related" resources={linksWithInferredType(links)} />
      </div>
    </section>
  );
}
