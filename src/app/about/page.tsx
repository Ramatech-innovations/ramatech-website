import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FrameworkStrip } from "@/components/home/framework-strip";
import { MotionSection } from "@/components/motion/motion-section";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeader } from "@/components/marketing/section-header";
import { createMetadata } from "@/lib/seo";
import { whyRamatech, deliveryModel } from "@/content/site";
import { businessOutcomes } from "@/content/enterprise";

export const metadata = createMetadata({
  title: "About",
  description:
    "Ramatech Innovation — AI-powered technology company engineering platforms, automation, and cloud systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build systems that move businesses forward"
        description="Ramatech is an AI-powered technology company—not an IT agency. We engineer platforms, intelligent automation, and cloud infrastructure for product and platform teams."
      />

      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeader title="What we believe" align="left" />
          <div className="grid gap-6 md:grid-cols-2">
            {whyRamatech.map((item) => (
              <Card key={item.title}>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-slate-200 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeader
            title="Business outcomes we deliver"
            description="How enterprise leaders measure success with Ramatech."
            align="left"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessOutcomes.map((item) => (
              <Card key={item.id} className="p-6">
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <FrameworkStrip />
        </div>
      </MotionSection>

      <MotionSection className="border-t border-slate-200 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeader
            title="How we deliver"
            description="AI-accelerated scaffolding with senior engineer ownership—the same model we use on every engagement."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-mono text-sm text-brand-cyan">AI handles</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {deliveryModel.ai.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-mono text-sm text-brand-cyan">Engineers handle</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {deliveryModel.engineers.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
