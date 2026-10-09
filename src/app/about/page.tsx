import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BookConsultationLink, WhatsAppLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { SectionShell } from "@/components/marketing/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { createMetadata, siteConfig } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";
import { contactDetails, deliveryPrinciples, frameworkSteps, serviceLinks } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";

export const metadata = createMetadata({
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  path: "/about",
});

const WHAT_WE_DO = [
  {
    title: "Red Hat OpenShift",
    description:
      "Installation, migration from VMware and legacy VMs, OpenShift Virtualization, GitOps with Argo CD, upgrades, support, and platform engineering.",
    href: "/openshift",
  },
  {
    title: "Production AI",
    description:
      "LLM workflows, RAG pipelines, and AI agents integrated into products and operations, with guardrails, evaluation, and cost control.",
    href: "/solutions/ai-solutions",
  },
  ...serviceLinks.map((s) => ({ title: s.label, description: `${s.description}.`, href: s.href })),
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An engineering firm for OpenShift platforms and production AI"
        description="Ramatech Innovation works with teams across India and worldwide. We install, build, and hand over systems your team can run."
        breadcrumbs={<Breadcrumbs items={[{ name: "About" }]} />}
      />

      <SectionShell variant="light">
        <div className={`${PAGE_CONTAINER} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]`}>
          <div className="max-w-2xl space-y-4 text-body-lg leading-relaxed text-slate-700">
            <h2 className="type-h2-section text-brand-ink">Who we are</h2>
            <p>
              We are a small engineering team. Most of our work is Red Hat OpenShift: installing
              clusters on bare metal, VMware vSphere, KVM, AWS, and air-gapped networks, moving
              workloads onto them, and setting up GitOps so they stay manageable.
            </p>
            <p>
              We also build AI systems for production, and take on cloud, DevOps, automation, and
              software work where it fits the same engineering approach.
            </p>
            <p>
              From a single task to a full platform build. Scoped per project.
            </p>
            <p>
              We install and operate; we do not sell Red Hat licenses. You keep your own
              subscriptions, and we do not claim a partner tier.
            </p>
          </div>
          <aside className="card-on-light h-fit p-6">
            <h2 className="font-heading text-base font-semibold text-brand-ink">Contact</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="text-brand-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">WhatsApp</dt>
                <dd className="text-slate-800">{contactDetails.whatsappDisplay}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Business hours</dt>
                <dd className="text-slate-800">{contactDetails.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </SectionShell>

      <SectionShell variant="lightElevated">
        <div className={PAGE_CONTAINER}>
          <SectionHeader title="What we do" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="card-on-light group flex h-full flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-ink group-hover:text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <ArrowRight className="mt-4 h-4 w-4 text-brand-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell variant="light">
        <div className={PAGE_CONTAINER}>
          <SectionHeader title="How we work" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {frameworkSteps.map((step) => (
              <li key={step.step} className="border-t-2 border-brand-primary pt-4">
                <span className="font-mono text-sm text-slate-500">{step.step}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-brand-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-12 grid gap-4 border-t border-slate-200 pt-10 md:grid-cols-2">
            {deliveryPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell variant="lightElevated">
        <div className={PAGE_CONTAINER}>
          <SectionHeader
            title="Delivery experience"
            description="OpenShift work delivered by the Ramatech team. Client names are withheld under confidentiality."
          />
          <CaseStudyCards columns={4} compact />
        </div>
      </SectionShell>

      <ClosingCta headline="Talk to us about your project">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource="/about">Book Consultation</BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <WhatsAppLink source="about">WhatsApp</WhatsAppLink>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
