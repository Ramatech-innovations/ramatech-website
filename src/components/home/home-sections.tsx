import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  BookConsultationLink,
  ExploreSolutionsLink,
  WhatsAppLink,
} from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/marketing/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { ClosingCta, REPLY_PROMISE } from "@/components/marketing/closing-cta";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { deliveryPrinciples, frameworkSteps, serviceLinks } from "@/content/site";
import { stackCategories } from "@/content/stack";
import { PAGE_CONTAINER } from "@/lib/layout";

const OPENSHIFT_LINKS = [
  { label: "Installation (IPI and UPI)", href: "/openshift/installation-services" },
  { label: "Migration and OpenShift Virtualization", href: "/openshift/migration-services" },
  { label: "Support and managed services", href: "/openshift/support-services" },
  { label: "Planned version upgrades", href: "/openshift/upgrade-services" },
  { label: "Platform engineering and GitOps", href: "/openshift/platform-engineering" },
];

const AI_CAPABILITIES = [
  "LLM workflows",
  "RAG pipelines",
  "AI agents integrated into products and operations",
  "Guardrails, evaluation, observability, and cost control",
];

const HOME_TECH_GROUPS = [
  "Platforms",
  "GitOps and CI/CD",
  "Automation",
  "Observability",
  "Environments",
];

function HeroPanel() {
  return (
    <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white sm:grid-cols-2">
      <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">OpenShift</p>
        <ul className="mt-4 space-y-3">
          {OPENSHIFT_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.9375rem] font-medium text-brand-ink hover:text-brand-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Production AI
        </p>
        <ul className="mt-4 space-y-3">
          {AI_CAPABILITIES.map((item) => (
            <li key={item}>
              <Link
                href="/solutions/ai-solutions"
                className="text-[0.9375rem] font-medium text-brand-ink hover:text-brand-primary"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="section-light on-light border-b border-slate-200">
      <div className={`${PAGE_CONTAINER} grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:py-24`}>
        <div className="max-w-xl">
          <p className="type-eyebrow">Engineering services · India and worldwide</p>
          <h1 className="type-display-lg mt-4 text-brand-ink">
            Engineering OpenShift platforms and production AI
          </h1>
          <p className="mt-5 text-body-lg leading-relaxed text-slate-600">
            We install, migrate, and operate Red Hat OpenShift, and build AI systems for production,
            plus cloud, DevOps, and automation. Engineers do the work and hand it over to your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <BookConsultationLink pageSource="/">Book Consultation</BookConsultationLink>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <ExploreSolutionsLink>Explore services</ExploreSolutionsLink>
            </Button>
          </div>
        </div>
        <HeroPanel />
      </div>
    </section>
  );
}

function FlagshipsSection() {
  return (
    <SectionShell variant="lightElevated">
      <div className={PAGE_CONTAINER}>
        <SectionHeader
          eyebrow="What we do"
          title="Two core practices"
          description="Most of our work is Red Hat OpenShift. Our AI practice builds on the same engineering discipline."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-on-light flex flex-col p-8">
            <h3 className="type-h3 text-brand-ink">Red Hat OpenShift services</h3>
            <p className="type-body-card mt-3">
              Installation on bare metal, VMware vSphere, KVM, AWS, and air-gapped networks.
              Migration from VMware and legacy VMs, OpenShift Virtualization, GitOps with Argo CD,
              and support agreed per contract.
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {OPENSHIFT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-[0.9375rem] text-slate-700 hover:text-brand-primary"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/openshift"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
            >
              All OpenShift services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="card-on-light flex flex-col p-8">
            <h3 className="type-h3 text-brand-ink">Production AI</h3>
            <p className="type-body-card mt-3">
              AI systems built to run inside your products and operations, with the controls
              production needs.
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {AI_CAPABILITIES.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.9375rem] text-slate-700">
                  <Check className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/solutions/ai-solutions"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
            >
              AI solutions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function OtherServicesSection() {
  return (
    <SectionShell variant="light">
      <div className={PAGE_CONTAINER}>
        <SectionHeader
          title="More engineering services"
          description="Cloud, DevOps, automation, and software engineering, delivered by the same engineers who run our OpenShift and AI work."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceLinks.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="card-on-light group flex h-full flex-col p-6">
                <span className="font-heading text-base font-semibold text-brand-ink group-hover:text-brand-primary">
                  {service.label}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </span>
                <ArrowRight className="mt-4 h-4 w-4 text-brand-primary" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function CaseStudiesSection() {
  return (
    <SectionShell variant="lightElevated">
      <div className={PAGE_CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Case studies"
            title="Delivery experience"
            description="OpenShift, automation and cloud work delivered by the Ramatech team. Client names are withheld under confidentiality unless the client has agreed to be named."
            className="mb-0"
          />
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
          >
            All case studies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <CaseStudyCards columns={4} compact className="mt-10" />
      </div>
    </SectionShell>
  );
}

function HowWeWorkSection() {
  return (
    <SectionShell variant="light">
      <div className={PAGE_CONTAINER}>
        <SectionHeader eyebrow="How we work" title="From first call to handover" />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {frameworkSteps.map((step) => (
            <li key={step.step} className="border-t-2 border-brand-primary pt-4">
              <span className="font-mono text-sm text-slate-500">{step.step}</span>
              <h3 className="mt-1 font-heading text-lg font-semibold text-brand-ink">
                {step.title}
              </h3>
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
  );
}

function TechnologiesSection() {
  const groups = stackCategories.filter((c) => HOME_TECH_GROUPS.includes(c.name));

  return (
    <SectionShell variant="lightElevated">
      <div className={PAGE_CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader title="Technologies we work with" className="mb-0" />
          <Link
            href="/technology"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
          >
            All technologies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group) => (
            <div key={group.name}>
              <dt className="text-sm font-semibold text-brand-ink">{group.name}</dt>
              <dd className="mt-3">
                <ul className="space-y-2">
                  {group.tools.map((tool) => (
                    <li key={tool.name} className="text-sm text-slate-600">
                      {tool.href ? (
                        <Link href={tool.href} className="text-brand-primary hover:underline">
                          {tool.name}
                        </Link>
                      ) : (
                        tool.name
                      )}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}

export function HomePageSections() {
  return (
    <>
      <HeroSection />
      <FlagshipsSection />
      <OtherServicesSection />
      <CaseStudiesSection />
      <HowWeWorkSection />
      <TechnologiesSection />
      <ClosingCta
        headline="Talk to an engineer about your platform"
        description={`Book a free 30-minute consultation or message us on WhatsApp. ${REPLY_PROMISE}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource="/">Book Consultation</BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <WhatsAppLink source="home_cta">WhatsApp</WhatsAppLink>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
