import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { caseStudies } from "@/content/case-studies";

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
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <Card className="group p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{c.client}</span>
                    <span>·</span>
                    <span>{c.industry}</span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-semibold group-hover:text-brand-cyan">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{c.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-heading text-xl font-bold text-gradient">{r.metric}</p>
                        <p className="text-xs text-muted-foreground">{r.label}</p>
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
