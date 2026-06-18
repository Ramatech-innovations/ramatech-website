import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PAGE_CONTAINER } from "@/lib/layout";

const hubs = [
  {
    href: "/openshift",
    eyebrow: "OpenShift",
    title: "Enterprise OpenShift services",
    description:
      "Installation, migration, managed operations, and platform engineering across India, UAE, and Singapore.",
  },
  {
    href: "/insights/openshift",
    eyebrow: "Insights",
    title: "OpenShift operator guides",
    description:
      "Installation, GitOps, security, upgrades, and cost optimization—written for platform teams.",
  },
];

export function HomeResourceHubs() {
  return (
    <section className="section-light on-light border-y border-slate-200 py-14 md:py-16">
      <div className={PAGE_CONTAINER}>
        <p className="type-eyebrow text-center md:text-left">Platform resources</p>
        <h2 className="type-h2-section mt-3 text-center md:text-left">
          OpenShift expertise for engineering leaders
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {hubs.map((hub) => (
            <Card key={hub.href} className="flex h-full flex-col p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-brand-primary">
                {hub.eyebrow}
              </p>
              <h3 className="type-h3 mt-2 text-brand-ink">{hub.title}</h3>
              <p className="type-body-card mt-3 flex-1">{hub.description}</p>
              <Link
                href={hub.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-cyan"
              >
                Explore {hub.eyebrow}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
