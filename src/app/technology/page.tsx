import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { SectionShell } from "@/components/marketing/section-shell";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { stackCategories } from "@/content/stack";
import { technologyPages } from "@/content/technology-pages";
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
        title="Technologies we work with"
        description="The tools and platforms our engineers use on client work. Groups marked as capabilities list what we offer; our case studies show the delivery."
        breadcrumbs={<Breadcrumbs items={[{ name: "Technology" }]} />}
      />

      <SectionShell variant="light">
        <div className={PAGE_CONTAINER}>
          <h2 className="type-h2-section text-brand-ink">Technology guides</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologyPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/technology/${page.slug}`} className="card-on-light group flex h-full flex-col p-5">
                  <span className="font-heading text-lg font-semibold text-brand-ink group-hover:text-brand-primary">
                    {page.techName}
                  </span>
                  <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {page.heroSubtext}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell variant="lightElevated">
        <div className={`${PAGE_CONTAINER} grid gap-10 md:grid-cols-2 lg:grid-cols-4`}>
          {stackCategories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-sm font-semibold text-brand-ink">{cat.name}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <li key={tool.name}>
                    {tool.href ? (
                      <Link
                        href={tool.href}
                        className="inline-block rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-brand-primary hover:border-brand-primary"
                      >
                        {tool.name}
                      </Link>
                    ) : (
                      <span className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                        {tool.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>

      <ClosingCta headline="Planning work on one of these platforms?">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource="/technology">Book Consultation</BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/solutions">View services</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
