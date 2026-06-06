import Link from "next/link";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { industries } from "@/content/industries";
import { PAGE_CONTAINER } from "@/lib/layout";

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
        title="Technology built for how your business actually works"
        description="Clear, practical solutions for restaurants, law firms, manufacturers, startups, and growing SMEs — no jargon, no oversized IT contracts."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <Card key={ind.slug} tone="light" className="p-8">
                <h2 className="font-heading text-2xl font-semibold text-brand-ink">
                  {ind.title}
                </h2>
                <p className="type-body-card mt-4">{ind.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ind.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-brand-cyan/30 px-3 py-1.5 text-sm text-brand-cyan"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-brand-cyan hover:underline"
                >
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="glow-cta">
              <BookConsultationLink>Book free consultation</BookConsultationLink>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
