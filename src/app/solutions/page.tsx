import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { solutions } from "@/content/solutions";

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
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`}>
                <Card className="h-full group">
                  <h2 className="font-heading text-2xl font-semibold group-hover:text-brand-cyan">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-brand-cyan/90">{s.tagline}</p>
                  <p className="mt-4 text-muted-foreground">{s.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
