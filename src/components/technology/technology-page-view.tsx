import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TechnologyPage } from "@/content/technology-types";
import { PackageSection } from "@/components/packages/package-section";
import { OpenShiftProse } from "@/components/openshift/openshift-content-blocks";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

export function TechnologyPageView({ page }: { page: TechnologyPage }) {
  return (
    <>
      <section className="section-dark relative overflow-hidden border-b border-white/5 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(10,76,149,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative`}>
          <p className="type-eyebrow">Technology · {page.techName}</p>
          <h1 className="type-display mt-4 max-w-4xl">{page.h1}</h1>
          <p className="type-body-muted mt-6 max-w-2xl">{page.heroSubtext}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/book-consultation">Request a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/openshift">OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>

      <PackageSection title="What it is" variant="light">
        <OpenShiftProse paragraphs={page.whatItIs} />
      </PackageSection>

      <PackageSection title="Business value" variant="dark">
        <div className="text-slate-300">
          <OpenShiftProse paragraphs={page.businessValue} />
        </div>
      </PackageSection>

      <PackageSection title="Ramatech expertise" variant="light">
        <OpenShiftProse paragraphs={page.ramatechExpertise} />
        {page.relatedLinks.length > 0 && (
          <ul className="mt-8 space-y-3 border-t border-slate-200 pt-8">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-cyan hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {page.insightLinks && page.insightLinks.length > 0 && (
          <div className="mt-8 border-t border-slate-200 pt-8">
            <p className="type-caption font-medium text-slate-500">From our Insights hub</p>
            <ul className="mt-4 space-y-3">
              {page.insightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-cyan hover:underline"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </PackageSection>

      <PackageSection title="Use cases & architecture" variant="dark">
        <div className="text-slate-300">
          <OpenShiftProse paragraphs={page.useCases} />
        </div>
      </PackageSection>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className={`${PAGE_CONTAINER} text-center`}>
          <h2 className="type-h3 text-brand-ink">Discuss {page.techName} for your platform</h2>
          <p className="type-body-muted mx-auto mt-4 max-w-xl">
            Talk to engineers who deploy {page.techName} on OpenShift in production—not slide decks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/book-consultation">Book a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/openshift">Explore OpenShift services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
