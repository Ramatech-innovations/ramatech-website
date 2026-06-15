import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CatalogItem } from "@/content/openshift/service-catalog";
import { cn } from "@/lib/utils";

export function OpenShiftGeoCards({ items }: { items: CatalogItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const isLive = item.href && !item.comingSoon;

        return (
          <li key={item.slug}>
            <Card
              tone="light"
              className={cn("flex h-full flex-col p-6", item.comingSoon && "opacity-75")}
            >
              {item.comingSoon && (
                <span className="type-caption mb-2 text-brand-primary">Coming soon</span>
              )}
              <h3 className="font-heading text-lg font-semibold text-brand-ink">
                {item.title}
              </h3>
              <p className="type-body-card mt-2 flex-1">{item.description}</p>
              {isLive ? (
                <Link
                  href={item.href!}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : (
                <span className="type-caption mt-4 text-slate-500">Available soon</span>
              )}
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
