import { CaseStudyCards } from "@/components/case-studies/case-study-cards";

export function OpenShiftCaseStudyCallout({ slugs }: { slugs?: string[] }) {
  return <CaseStudyCards slugs={slugs} />;
}
