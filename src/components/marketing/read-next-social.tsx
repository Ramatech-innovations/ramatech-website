import { PackageSection } from "@/components/packages/package-section";
import {
  RelatedResources,
  linksToResources,
  type RelatedResource,
} from "@/components/marketing/related-resources";
import { getReadNextForPath } from "@/content/read-next-social";

export function ReadNextSocial({ pathname }: { pathname: string }) {
  const entry = getReadNextForPath(pathname);
  if (!entry) return null;

  const resources: RelatedResource[] = [
    ...linksToResources([...entry.guides], "insight"),
    ...linksToResources([entry.consultation], "service"),
  ];

  return (
    <PackageSection title="Read next" variant="light" headingId="read-next">
      <RelatedResources resources={resources} />
    </PackageSection>
  );
}
