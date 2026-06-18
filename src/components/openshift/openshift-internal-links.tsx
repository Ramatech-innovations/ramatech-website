import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAGE_CONTAINER } from "@/lib/layout";

export function OpenShiftInternalLinks({
  links,
  insightLinks = [],
}: {
  links: { href: string; label: string }[];
  insightLinks?: { href: string; label: string }[];
}) {
  return (
    <section className="border-t border-white/10 bg-brand-dark py-10">
      <div className={PAGE_CONTAINER}>
        <p className="type-caption font-medium text-muted-foreground">
          Related OpenShift services
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link
              href="/openshift"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              All OpenShift services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </li>
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        {insightLinks.length > 0 && (
          <>
            <p className="type-caption mt-8 font-medium text-muted-foreground">
              From our Insights hub
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {insightLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
