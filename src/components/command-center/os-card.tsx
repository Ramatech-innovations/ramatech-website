"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/marketing/animated-counter";
import type { OsCardConfig } from "@/content/command-center-os";

export function OsCard({
  card,
  index,
  active,
  className,
}: {
  card: OsCardConfig;
  index: number;
  active: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const positioned = card.top !== "auto";

  return (
    <motion.div
      className={
        className ??
        "absolute z-20 w-[min(148px,42vw)] rounded-lg border border-white/10 bg-[#0a1224]/90 px-3 py-2.5 shadow-lg shadow-black/40 backdrop-blur-md sm:w-[156px]"
      }
      style={positioned ? { top: card.top, left: card.left } : undefined}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={
        reduce
          ? { opacity: 1 }
          : active
            ? {
                opacity: 1,
                y: [0, -5, 0],
              }
            : { opacity: 0.6, y: 0 }
      }
      transition={
        reduce
          ? {}
          : {
              opacity: { duration: 0.5, delay: index * 0.06 },
              y: { duration: 3.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      <p className="font-mono text-[9px] uppercase tracking-wider text-white/55 sm:text-[10px]">
        {card.label}
      </p>
      <p className="type-metric mt-1 text-lg text-brand-cyan sm:text-xl">
        <AnimatedCounter
          value={card.value}
          prefix={card.prefix}
          suffix={card.suffix}
          duration={1600}
        />
      </p>
      <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-brand-cyan/70"
          initial={{ width: "0%" }}
          animate={active ? { width: ["35%", "88%", "55%"] } : { width: "40%" }}
          transition={
            reduce
              ? {}
              : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }
          }
        />
      </div>
    </motion.div>
  );
}
