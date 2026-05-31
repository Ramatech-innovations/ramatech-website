"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/marketing/section-header";
import { whyRamatech } from "@/content/site";

const HOME_WHY = whyRamatech.slice(0, 3);

export function WhyUsSection() {
  return (
    <section className="relative section-light on-light py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Why Ramatech"
              title="Built for production outcomes"
              description="Engineering-first delivery with measurable reliability—not generic IT services."
              density="compact"
              className="mb-0 text-left md:mx-0 md:text-left"
              align="left"
            />
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-cyan hover:underline md:mb-1"
            >
              How we deliver
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {HOME_WHY.map((item) => (
              <li
                key={item.title}
                className="card-on-light flex gap-3 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                <div>
                  <h3 className="font-heading text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
