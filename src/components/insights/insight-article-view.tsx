import Link from "next/link";
import type { InsightArticle } from "@/content/insights/insight-types";
import { PackageSection } from "@/components/packages/package-section";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { InsightRelatedBoxes } from "@/components/insights/insight-related-boxes";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

export function InsightArticleView({ article }: { article: InsightArticle }) {
  return (
    <>
      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">Insights · OpenShift</p>
          <h1 className="type-display mt-4 max-w-4xl">{article.h1}</h1>
        </div>
      </section>

      <PackageSection title="Overview" variant="light">
        <OpenShiftProse paragraphs={article.intro} />
      </PackageSection>

      {article.sections.map((section, i) => (
        <PackageSection
          key={section.id}
          title={section.title}
          variant={i % 2 === 0 ? "dark" : "light"}
        >
          <div className={i % 2 === 0 ? "text-slate-300" : undefined}>
            <OpenShiftProse paragraphs={section.paragraphs} />
          </div>
        </PackageSection>
      ))}

      <PackageSection title="Explore further" variant="light">
        <InsightRelatedBoxes article={article} />
      </PackageSection>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className={`${PAGE_CONTAINER} text-center`}>
          <h2 className="type-h3 text-brand-ink">Need help with OpenShift?</h2>
          <p className="type-body-muted mx-auto mt-4 max-w-xl">
            Talk to engineers who implement these patterns in production—not generic advisory decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/book-consultation">Book a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/openshift">OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
