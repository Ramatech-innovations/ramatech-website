import { CaseStudyCards } from "@/components/case-studies/case-study-cards";

export function IndustryCaseStudyLinks({
  links,
}: {
  links: { slug: string; title: string; summary: string }[];
}) {
  return <CaseStudyCards slugs={links.map((l) => l.slug)} />;
}
