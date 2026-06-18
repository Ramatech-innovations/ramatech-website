import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { MotionSection } from "@/components/motion/motion-section";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.insights.title,
  description: pageMeta.insights.description,
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title="Engineering guides"
        description="Operator-level articles on OpenShift, platform engineering, and production operations."
      />
      <MotionSection className="py-16 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/insights/openshift" className="block">
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-brand-cyan">
                <span className="font-mono text-xs text-brand-cyan">Pillar</span>
                <h2 className="type-h3 mt-3 text-brand-ink">OpenShift Insights</h2>
                <p className="type-body-card mt-2">
                  Twelve guides on installation, GitOps, security, monitoring, upgrades, virtualization,
                  and AI integration—plus links to Ramatech OpenShift services.
                </p>
                <p className="mt-4 text-sm font-medium text-brand-primary">Browse OpenShift guides →</p>
              </div>
            </Link>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
