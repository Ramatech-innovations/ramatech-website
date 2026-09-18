import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAGE_CONTAINER } from "@/lib/layout";

const MOST_REQUESTED = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift installation services",
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift migration services",
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift support services",
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift managed services",
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift platform engineering",
  },
] as const;

/** High-signal crawl paths from the hub to money pages Google has under-indexed */
export function OpenShiftMostRequested() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-8 md:py-10">
      <div className={PAGE_CONTAINER}>
        <p className="type-caption font-medium text-slate-500">Most requested</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {MOST_REQUESTED.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-cyan hover:underline"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
