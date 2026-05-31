"use client";

import { AnimatedCounter } from "@/components/marketing/animated-counter";
import { commandCenterOsCards } from "@/content/command-center-os";
import Image from "next/image";

/** Static OS layout for reduced motion / no WebGL */
export function OsFallback() {
  return (
    <div
      className="relative grid min-h-[380px] w-full gap-3 rounded-2xl border border-white/10 bg-[#030B1A]/90 p-4 sm:grid-cols-2 lg:min-h-[420px]"
      role="img"
      aria-label="Ramatech control plane connecting AI, cloud, applications, and operations"
    >
      <div className="col-span-full flex flex-col items-center justify-center py-6 sm:col-span-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-cyan/30 bg-[#0a1224]">
          <Image src="/brand/logo-mark.png" alt="" width={48} height={48} className="h-11 w-auto" />
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
          Ramatech Control Plane
        </p>
      </div>
      {commandCenterOsCards.map((card) => (
        <div
          key={card.id}
          className="rounded-lg border border-white/10 bg-[#0a1224]/80 px-3 py-2.5"
        >
          <p className="font-mono text-[9px] uppercase tracking-wider text-white/55">{card.label}</p>
          <p className="type-metric mt-1 text-brand-cyan">
            <AnimatedCounter value={card.value} prefix={card.prefix} suffix={card.suffix} />
          </p>
        </div>
      ))}
    </div>
  );
}
