import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { stackCategories } from "@/content/stack";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.technology.title,
  description: pageMeta.technology.description,
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Stack we run in production"
        description="Tools and platforms our engineers deploy—not a logo wall for a pitch deck."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-12 md:grid-cols-2">
            {stackCategories.map((cat) => (
              <div key={cat.name}>
                <h2 className="type-h3 text-brand-ink">{cat.name}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-600 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/solutions">Explore solutions</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
