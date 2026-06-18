import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion/motion-section";
import { PageHero } from "@/components/marketing/page-hero";
import { CaseStudyArchitecture } from "@/components/illustrations/case-study-architecture";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { createMetadata, metaDescription, siteConfig } from "@/lib/seo";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

/** ISO dates for Article schema on case study pages */
const CASE_STUDY_SCHEMA_DATE = "2026-06-14";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return createMetadata({
    title: study.title,
    description: metaDescription(study.summary),
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/case-studies/${slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${slug}` },
        ]}
      />
      <ArticleSchema
        headline={study.title}
        description={study.summary}
        url={pageUrl}
        datePublished={CASE_STUDY_SCHEMA_DATE}
        dateModified={CASE_STUDY_SCHEMA_DATE}
      />
      <PageHero
        eyebrow={`${study.client} · ${study.industry}`}
        title={study.title}
        description={study.summary}
      />
      <MotionSection className="py-16 md:py-20">
        <div className={`${PAGE_CONTAINER_NARROW} space-y-12`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#060a12] p-5 md:p-6">
            <p className="type-eyebrow text-[10px] text-slate-400">Architecture</p>
            <CaseStudyArchitecture slug={study.slug} className="mt-3 min-h-[200px] md:min-h-[220px]" />
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">Challenge</h2>
            <p className="type-body-card mt-4">{study.challenge}</p>
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">Solution</h2>
            <p className="type-body-card mt-4">{study.solutionDetail}</p>
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">Results</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {study.results.map((r) => (
                <Card key={r.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-brand-primary">{r.metric}</p>
                  <p className="type-caption mt-1">{r.label}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Button asChild size="lg">
            <Link href="/book-consultation">Start a similar engagement</Link>
          </Button>
        </div>
      </MotionSection>
    </>
  );
}
