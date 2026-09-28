import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CatalogItem } from "@/content/openshift/service-catalog";
import { cn } from "@/lib/utils";

export function OpenShiftServiceCards({
  items,
  columns = 4,
}: {
  items: CatalogItem[];
  columns?: 3 | 4;
}) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      {items.map((item) => {
        const isLive = Boolean(item.href && !item.comingSoon);
        const body = (
          <>
            <h3 className="font-heading text-lg font-semibold text-brand-ink group-hover:text-brand-primary">
              {item.title}
            </h3>
            <p className="type-body-card mt-2 flex-1">{item.description}</p>
            {isLive ? (
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            ) : (
              <span className="mt-4 text-sm text-slate-500">Available soon</span>
            )}
          </>
        );

        return (
          <li key={item.slug}>
            {isLive ? (
              <Link href={item.href!} className="card-on-light group flex h-full flex-col p-6">
                {body}
              </Link>
            ) : (
              <div className="card-on-light flex h-full flex-col p-6">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
