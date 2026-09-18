import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAGE_CONTAINER } from "@/lib/layout";

const serviceDomains = [
  {
    label: "OpenShift",
    href: "/openshift",
    description: "Install, migrate, operate, platform",
  },
  {
    label: "Cloud",
    href: "/solutions/cloud-infrastructure",
    description: "Multi-cloud foundations",
  },
  {
    label: "DevOps & Platform",
    href: "/solutions/devops-platform-engineering",
    description: "GitOps, CI/CD, golden paths",
  },
  {
    label: "Monitoring / Observability",
    href: "/technology/prometheus",
    description: "Metrics, alerts, SLOs",
  },
  {
    label: "AI",
    href: "/solutions/ai-solutions",
    description: "Production AI systems",
  },
] as const;

/** First-viewport domain map — OpenShift flagship, multi-domain services firm */
export function ServiceDomainsStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10 md:py-12">
      <div className={PAGE_CONTAINER}>
        <p className="type-eyebrow text-center md:text-left">Service domains</p>
        <h2 className="type-h2-section mt-3 text-center text-brand-ink md:text-left md:text-2xl">
          OpenShift excellence across a full engineering stack
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceDomains.map((domain) => (
            <li key={domain.href}>
              <Link
                href={domain.href}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-cyan/40 hover:shadow-sm"
              >
                <span className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-ink group-hover:text-brand-primary">
                  {domain.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
                <span className="mt-2 text-xs leading-snug text-slate-500">
                  {domain.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
