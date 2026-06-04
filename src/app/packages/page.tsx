import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { Card } from "@/components/ui/card";
import { getPackageIcon, servicePackages } from "@/content/packages";
import { PAGE_CONTAINER } from "@/lib/layout";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Service Packages",
  description:
    "Fixed-scope service packages from Ramatech Innovation — business websites, startup cloud deployment, AI automation, and custom business systems.",
  path: "/packages",
});

export default function PackagesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Service Packages Built for Speed"
        description="Fixed-scope. Fixed-timeline. No surprises."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 md:grid-cols-2">
            {servicePackages.map((pkg) => {
              const Icon = getPackageIcon(pkg.icon);
              return (
                <Link key={pkg.slug} href={`/packages/${pkg.slug}`}>
                  <Card tone="light" className="group h-full">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-primary/20 bg-brand-primary/5 text-brand-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h2 className="font-heading text-xl font-semibold text-brand-ink group-hover:text-brand-cyan">
                          {pkg.title}
                        </h2>
                        <p className="type-body-card mt-2">{pkg.tagline}</p>
                        <p className="type-caption mt-3 uppercase tracking-wide text-brand-primary">
                          {pkg.timeline}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan">
                          View package
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
