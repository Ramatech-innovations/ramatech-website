"use client";

import { frameworkSteps } from "@/content/site";
import { SectionHeader } from "@/components/marketing/section-header";

export function FrameworkStrip() {
  return (
    <>
      <SectionHeader
        eyebrow="Framework"
        title="Transformation framework"
        description="Discovery → operated systems."
        className="mb-0"
      />
      <div className="relative mt-8">
        <div
          className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-brand-cyan/35 to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
          {frameworkSteps.map((step, i) => (
            <li
              key={step.step}
              className="card-on-light relative px-3 py-4 lg:px-2.5 lg:py-3 lg:text-center"
            >
              {i < frameworkSteps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-1.5 top-1/2 hidden h-px w-3 bg-brand-cyan/25 lg:block"
                  aria-hidden
                />
              )}
              <span className="font-mono text-[10px] font-bold text-brand-cyan">{step.step}</span>
              <h3 className="mt-1 font-heading text-sm font-semibold leading-tight">{step.title}</h3>
              <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground lg:mx-auto lg:max-w-[9.5rem]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
