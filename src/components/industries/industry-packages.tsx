import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getPackageBySlug } from "@/content/packages";
import type { IndustryLanding } from "@/content/industry-landings";

export function IndustryPackages({
  packages,
}: {
  packages: IndustryLanding["packages"];
}) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {packages.map((pkg) => {
        const meta = getPackageBySlug(pkg.slug);
        return (
          <li key={pkg.slug}>
            <Card tone="light" className="flex h-full flex-col p-6 md:p-8">
              <h3 className="type-h3 text-brand-ink">{pkg.title}</h3>
              <p className="type-body-card mt-2">
                {pkg.tagline ?? meta?.tagline}
              </p>
              {meta?.timeline && (
                <p className="type-caption mt-3 text-brand-primary">
                  Timeline: {meta.timeline}
                </p>
              )}
              <Link
                href={`/packages/${pkg.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
              >
                View package
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
