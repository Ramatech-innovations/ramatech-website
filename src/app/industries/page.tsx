import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { industries } from "@/content/industries";

export const metadata = createMetadata({
  title: pageMeta.industries.title,
  description: pageMeta.industries.description,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Patterns proven in demanding environments"
        description="We adapt platform, AI, and automation engineering to the compliance and scale constraints of your industry."
      />
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <Card key={ind.slug} className="p-8">
                <h2 className="font-heading text-2xl font-semibold">{ind.title}</h2>
                <p className="mt-4 text-muted-foreground">{ind.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ind.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-brand-cyan/30 px-3 py-1 text-xs text-brand-cyan"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Discuss your industry</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
