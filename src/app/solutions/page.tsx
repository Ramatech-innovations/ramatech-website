import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { solutions } from "@/content/solutions";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.solutions.title,
  description: pageMeta.solutions.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Engineering domains we own end-to-end"
        description="Five capability areas. One accountable team. Built for founders, CTOs, and platform leaders."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`}>
                <Card className="group h-full">
                  <h2 className="type-h3 text-brand-ink group-hover:text-brand-cyan">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-[0.9375rem] font-medium text-brand-primary">{s.tagline}</p>
                  <p className="type-body-card mt-4">{s.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
