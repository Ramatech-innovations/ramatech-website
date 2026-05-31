"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TagMarquee({ tags }: { tags: string[] }) {
  const reduce = useReducedMotion();
  const doubled = [...tags, ...tags];

  if (reduce) {
    return (
      <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
        {tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>
    );
  }

  return (
    <div className="group/marquee relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0f1a] to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0f1a] to-transparent md:w-24"
        aria-hidden
      />
      <div className="flex animate-marquee-slow gap-4 whitespace-nowrap group-hover/marquee:[animation-play-state:paused]">
        {doubled.map((tag, i) => (
          <TagChip key={`${tag}-${i}`} label={tag} />
        ))}
      </div>
    </div>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-cyan/25",
        "bg-gradient-to-r from-brand-primary/20 to-brand-cyan/10 px-5 py-2.5",
        "font-sans text-sm font-medium tracking-wide text-foreground/90",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        "transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#11D3E8]" />
      {label}
    </span>
  );
}
