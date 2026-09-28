import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { PageHero } from "@/components/marketing/page-hero";
import type { Solution } from "@/content/solutions";
import { caseStudies } from "@/content/case-studies";
import { getSolutionAccent } from "@/lib/solution-accents";
import { PAGE_CONTAINER } from "@/lib/layout";
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
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <h2 className="type-h2-section text-brand-ink">Outcomes</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {solution.outcomes.map((o) => (
              <Card key={o}>
                <p className="type-body-card">{o}</p>
              </Card>
            ))}
          </ul>
        </div>
      </MotionSection>
      <MotionSection className="border-t border-slate-200 py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <h2 className="type-h2-section text-brand-ink">Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {solution.approach.map((a) => (
              <Card key={a.title}>
                <h3 className="type-h3 text-brand-ink">{a.title}</h3>
                <p className="type-body-card mt-2">{a.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <h2 className="type-h2-section text-brand-ink">Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {solution.stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-sm text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>
      {relatedCase && (
        <MotionSection className="border-t border-slate-200 py-16 md:py-20">
          <div className={PAGE_CONTAINER}>
            <Card>
              <p className="font-mono text-sm text-brand-cyan">Case study</p>
              <h3 className="type-h3 mt-2 text-brand-ink">{relatedCase.title}</h3>
              <p className="type-body-card mt-2">{relatedCase.summary}</p>
              <Button asChild variant="ghost" className="mt-4 px-0">
                <Link href={`/case-studies/${relatedCase.slug}`}>
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </MotionSection>
      )}
      <section className="py-16 md:py-20">
        <div className={`${PAGE_CONTAINER} text-center`}>
          <Button asChild size="lg">
            <BookConsultationLink
              pageSource={`/solutions/${solution.slug}`}
              interest={solution.slug}
            >
              Discuss {solution.shortTitle}
            </BookConsultationLink>
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
}
