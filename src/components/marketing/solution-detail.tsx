import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { PageHero } from "@/components/marketing/page-hero";
import type { Solution } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";
import { getSolutionAccent } from "@/lib/solution-accents";
import { cn } from "@/lib/utils";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const relatedCase = caseStudies.find((c) => c.solution === solution.slug);
  const accent = getSolutionAccent(solution.slug);

  return (
    <div className="relative">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] bg-gradient-to-b opacity-60",
          accent.gradient
        )}
        aria-hidden
      />
      <div className="relative z-10">
      <PageHero
        eyebrow="Solutions"
        title={solution.title}
        description={solution.description}
      />
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-2xl font-semibold">Outcomes</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {solution.outcomes.map((o) => (
              <Card key={o}>
                <p className="text-sm text-muted-foreground">{o}</p>
              </Card>
            ))}
          </ul>
        </div>
      </MotionSection>
      <MotionSection className="border-t border-white/5 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-2xl font-semibold">Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {solution.approach.map((a) => (
              <Card key={a.title}>
                <h3 className="font-heading font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-2xl font-semibold">Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {solution.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>
      {relatedCase && (
        <MotionSection className="border-t border-white/5 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <Card>
              <p className="font-mono text-xs text-brand-cyan">Case study</p>
              <h3 className="mt-2 font-heading text-xl font-semibold">{relatedCase.title}</h3>
              <p className="mt-2 text-muted-foreground">{relatedCase.summary}</p>
              <Button asChild variant="ghost" className="mt-4 px-0">
                <Link href={`/case-studies/${relatedCase.slug}`}>
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </MotionSection>
      )}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <Button asChild size="lg">
            <Link href="/book-consultation">Discuss {solution.shortTitle}</Link>
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
}
