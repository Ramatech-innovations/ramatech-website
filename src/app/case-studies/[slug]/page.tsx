import Link from "next/link";
import { notFound } from "next/navigation";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { RelatedResources } from "@/components/marketing/related-resources";
import { CaseStudyArchitecture } from "@/components/illustrations/case-study-architecture";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { createMetadata, metaDescription, siteConfig } from "@/lib/seo";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { getSolution } from "@/content/solutions";
import { PAGE_CONTAINER, PAGE_CONTAINER_NARROW } from "@/lib/layout";

const RELATED_OPENSHIFT: Record<string, { title: string; href: string }[]> = {
  "openshift-enterprise-migration": [
    { title: "OpenShift installation services", href: "/openshift/installation-services" },
    { title: "OpenShift migration services", href: "/openshift/migration-services" },
  ],
  "openshift-helm-gitops-production": [
    { title: "OpenShift deployment services", href: "/openshift/deployment-services" },
    { title: "OpenShift migration services", href: "/openshift/migration-services" },
  ],
  "openshift-operations-automation": [
    { title: "OpenShift managed services", href: "/openshift/managed-services" },
    { title: "OpenShift platform engineering", href: "/openshift/platform-engineering" },
  ],
};

function relatedServices(study: CaseStudy) {
  const solution = getSolution(study.solution);
  return [
    ...(RELATED_OPENSHIFT[study.slug] ?? []),
    ...(solution ? [{ title: solution.title, href: `/solutions/${solution.slug}` }] : []),
  ].map((r) => ({ ...r, type: "service" as const }));
}

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
  const others = caseStudies.filter((c) => c.slug !== slug);

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
        datePublished={study.publishedAt}
        dateModified={study.publishedAt}
      />
      <PageHero
        eyebrow={`${study.industry} · ${study.environment}`}
        title={study.title}
        description={study.summary}
        breadcrumbs={
          <Breadcrumbs items={[{ name: "Case Studies", href: "/case-studies" }, { name: study.title }]} />
        }
      />

      <section className="section-light on-light py-14 md:py-16">
        <div className={`${PAGE_CONTAINER_NARROW} space-y-12`}>
          {study.anonymised && (
            <p className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {study.client}. Delivery experience of the Ramatech team; the client name is withheld
              under confidentiality.
            </p>
          )}
          <figure>
            <CaseStudyArchitecture slug={study.slug} className="min-h-[200px] md:min-h-[220px]" />
            <figcaption className="mt-2 text-xs text-slate-500">
              Architecture overview. Hover to animate the flow.
            </figcaption>
          </figure>
          <div>
            <h2 className="type-h3 text-brand-ink">Challenge</h2>
            <p className="type-body-card mt-4">{study.challenge}</p>
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">What we did</h2>
            <p className="type-body-card mt-4">{study.solutionDetail}</p>
          </div>
          <div>
            <h2 className="type-h3 text-brand-ink">Results</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {study.results.map((r) => (
                <li key={r.label} className="card-on-light p-5">
                  <p className="font-heading text-lg font-semibold text-brand-primary">{r.metric}</p>
                  <p className="mt-1 text-sm text-slate-600">{r.label}</p>
                </li>
              ))}
            </ul>
          </div>
          {study.testimonial && (
            <figure className="card-on-light border-l-4 border-l-brand-primary p-6 md:p-8">
              <blockquote className="type-body-card text-brand-ink">
                <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-600">
                {study.testimonial.attribution}
              </figcaption>
            </figure>
          )}
          <div>
            <h2 className="type-h3 text-brand-ink">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-sm text-slate-700"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-light-elevated on-light border-t border-slate-200 py-12 md:py-14">
        <div className={`${PAGE_CONTAINER} space-y-10`}>
          <RelatedResources heading="Related services" resources={relatedServices(study)} />
          <RelatedResources
            heading="Other case studies"
            resources={others.map((c) => ({
              title: c.title,
              href: `/case-studies/${c.slug}`,
              type: "case-study" as const,
            }))}
          />
        </div>
      </section>

      <ClosingCta headline="Planning similar work?">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource={`/case-studies/${slug}`} interest={study.solution}>
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/case-studies">All case studies</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
