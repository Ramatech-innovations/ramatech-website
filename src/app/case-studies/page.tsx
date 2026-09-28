import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { SectionShell } from "@/components/marketing/section-shell";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.caseStudies.title,
  description: pageMeta.caseStudies.description,
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Delivery experience"
        description="OpenShift platforms, CI/CD, GitOps, and automation delivered by the Ramatech team. Client names are withheld under confidentiality."
        breadcrumbs={<Breadcrumbs items={[{ name: "Case Studies" }]} />}
      />
      <SectionShell variant="light">
        <div className={PAGE_CONTAINER}>
          <CaseStudyCards />
        </div>
      </SectionShell>
      <ClosingCta headline="Planning similar work?">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource="/case-studies" interest="openshift">
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/openshift">OpenShift services</Link>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/openshift/consulting-services">OpenShift consulting</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
