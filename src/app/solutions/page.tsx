import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { SectionShell } from "@/components/marketing/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { getSolution, otherServiceSlugs } from "@/content/solutions";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.solutions.title,
  description: pageMeta.solutions.description,
  path: "/solutions",
});

const ai = getSolution("ai-solutions")!;

const FLAGSHIPS = [
  {
    eyebrow: "Flagship",
    title: "Red Hat OpenShift services",
    description:
      "Installation, migration, OpenShift Virtualization, GitOps, upgrades, support, and platform engineering. We install and operate; we do not sell Red Hat licenses.",
    href: "/openshift",
    linkLabel: "OpenShift services",
  },
  {
    eyebrow: "Flagship",
    title: ai.title,
    description: ai.description,
    href: `/solutions/${ai.slug}`,
    linkLabel: "AI solutions",
  },
];

export default function SolutionsPage() {
  const others = otherServiceSlugs.map((slug) => getSolution(slug)!);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services"
        description="OpenShift and production AI are our core practices. We also take on cloud, DevOps, automation, and software work, delivered by the same engineers."
        breadcrumbs={<Breadcrumbs items={[{ name: "Services" }]} />}
      />

      <SectionShell variant="light">
        <div className={`${PAGE_CONTAINER} grid gap-6 lg:grid-cols-2`}>
          {FLAGSHIPS.map((f) => (
            <Link key={f.href} href={f.href} className="card-on-light group flex flex-col p-8">
              <span className="type-eyebrow">{f.eyebrow}</span>
              <h2 className="type-h3 mt-3 text-brand-ink group-hover:text-brand-primary">{f.title}</h2>
              <p className="type-body-card mt-3 flex-1">{f.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                {f.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="lightElevated">
        <div className={PAGE_CONTAINER}>
          <SectionHeader
            title="More engineering services"
            description="Cloud, DevOps, automation, and software engineering, delivered by the same engineers who run our OpenShift and AI work."
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="card-on-light group flex h-full flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-ink group-hover:text-brand-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{s.tagline}</p>
                  <p className="type-body-card mt-3 flex-1">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <ClosingCta headline="Not sure which service fits?">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource="/solutions">Book Consultation</BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
