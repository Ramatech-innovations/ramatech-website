import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { createMetadata } from "@/lib/seo";
import { stackCategories } from "@/content/stack";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "Production technology stack: Kubernetes, OpenShift, cloud, AI, observability, and enterprise platforms.",
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
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {stackCategories.map((cat) => (
              <div key={cat.name}>
                <h2 className="font-heading text-xl font-semibold">{cat.name}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-muted-foreground"
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
