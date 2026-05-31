"use client";

import { AnimatedCounter } from "@/components/marketing/animated-counter";
import { enterpriseKpis } from "@/content/enterprise";

export function EnterpriseKpisSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#060a12] py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(17,211,232,0.12), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container relative mx-auto max-w-6xl px-4">
        <p className="type-eyebrow text-center">Enterprise metrics</p>
        <h2 className="type-h2 mx-auto mt-5 max-w-3xl text-center md:mt-6">
          Proof at production scale
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {enterpriseKpis.map((kpi) => (
            <div key={kpi.label} className="text-center lg:text-left">
              <p className="type-metric-home">
                <AnimatedCounter
                  value={kpi.value}
                  decimals={kpi.decimals}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                />
              </p>
              <p className="type-metric-label mx-auto mt-2 max-w-[240px] lg:mx-0">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
