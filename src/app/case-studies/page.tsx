import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { caseStudies } from "@/content/case-studies";
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
        eyebrow="Proof"
        title="Case studies"
        description="Real engineering outcomes—metrics, stacks, and delivery timelines."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <Card className="group p-8">
                  <div className="type-caption flex flex-wrap items-center gap-3">
                    <span>{c.client}</span>
                    <span>·</span>
                    <span>{c.industry}</span>
                  </div>
                  <h2 className="type-h3 mt-4 text-brand-ink group-hover:text-brand-cyan">
                    {c.title}
                  </h2>
                  <p className="type-body-card mt-2">{c.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-heading text-xl font-bold text-brand-primary">{r.metric}</p>
                        <p className="type-caption mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
