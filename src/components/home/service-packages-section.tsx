"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/marketing/section-header";
import { getPackageIcon, servicePackages } from "@/content/packages";
import { PAGE_CONTAINER } from "@/lib/layout";

export function ServicePackagesSection() {
  return (
    <section className="section-light on-light relative overflow-hidden border-t border-slate-200 py-16 md:py-20">
      <div className={PAGE_CONTAINER}>
        <SectionHeader
          title="Service Packages Built for Speed"
          description="Fixed-scope. Fixed-timeline. No surprises."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {servicePackages.map((pkg) => {
            const Icon = getPackageIcon(pkg.icon);
            return (
              <Card key={pkg.slug} tone="light" className="flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-primary/20 bg-brand-primary/5 text-brand-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold leading-tight text-brand-ink md:text-xl">
                      {pkg.title}
                    </h3>
                    <p className="type-body-card mt-2">{pkg.tagline}</p>
                  </div>
                </div>
                <p className="type-caption mt-5 uppercase tracking-wide text-brand-primary">
                  Timeline: {pkg.timeline}
                </p>
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-opacity hover:opacity-90"
                >
                  View Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
