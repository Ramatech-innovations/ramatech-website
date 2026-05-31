"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  CapabilityVisual,
  hrefToVisualVariant,
} from "@/components/marketing/capability-visual";
import { capabilityCards } from "@/content/solutions";
import { solutions } from "@/content/solutions";

const FEATURED_SLUGS = ["cloud-infrastructure", "devops-platform-engineering", "ai-solutions"];

export function CapabilitiesBento({
  featuredOnly = false,
  dense = false,
}: {
  featuredOnly?: boolean;
  dense?: boolean;
}) {
  const cards = featuredOnly
    ? capabilityCards.filter((c) =>
        FEATURED_SLUGS.some((slug) => c.href === `/solutions/${slug}`)
      )
    : capabilityCards;

  return (
    <div className={dense ? "mt-6 grid gap-3" : "mt-10 grid gap-5 sm:grid-cols-2"}>
      {cards.map((c) => {
        const full = solutions.find((s) => `/solutions/${s.slug}` === c.href);
        const title = full?.title ?? c.title;
        const variant = hrefToVisualVariant(c.href);

        if (dense) {
          return (
            <Link key={c.href} href={c.href} className="group block" aria-label={title}>
              <Card className="flex overflow-hidden border-white/8 bg-transparent p-0 shadow-none transition-all hover:border-brand-cyan/25 hover:bg-white/[0.02] sm:flex-row">
                <CapabilityVisual
                  variant={variant}
                  compact
                  className="w-full shrink-0 rounded-b-none border-0 border-b border-white/10 sm:w-[38%] sm:max-w-[200px] sm:rounded-r-none sm:border-b-0 sm:border-r"
                />
                <div className="flex flex-1 flex-col justify-center p-4">
                  <h3 className="font-heading text-base font-semibold group-hover:text-brand-cyan">
                    {title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </Card>
            </Link>
          );
        }

        return (
          <Link key={c.href} href={c.href} className="group block" aria-label={title}>
            <Card className="overflow-hidden border-white/8 bg-transparent p-0 shadow-none transition-all duration-300 hover:border-brand-cyan/25 hover:bg-white/[0.02]">
              <CapabilityVisual
                variant={variant}
                className="rounded-b-none border-0 border-b border-white/10"
              />
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-lg font-semibold leading-tight tracking-tight group-hover:text-brand-cyan md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan opacity-80 transition-opacity group-hover:opacity-100">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Card>
          </Link>
        );
      })}
      {featuredOnly && (
        <div className="pt-2 text-center sm:col-span-2">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
          >
            All solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
