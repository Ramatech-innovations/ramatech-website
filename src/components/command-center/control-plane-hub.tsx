"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ControlPlaneHub({ active }: { active: boolean }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative z-30 flex flex-col items-center text-center"
      animate={reduce || !active ? {} : undefined}
    >
      <motion.div
        className="relative flex h-24 w-24 items-center justify-center rounded-full border border-brand-cyan/30 bg-[#0a1224]/95 shadow-[0_0_40px_rgba(17,211,232,0.15)] sm:h-28 sm:w-28"
        animate={
          reduce || !active
            ? {}
            : {
                boxShadow: [
                  "0 0 24px rgba(17,211,232,0.2)",
                  "0 0 56px rgba(17,211,232,0.45)",
                  "0 0 24px rgba(17,211,232,0.2)",
                ],
              }
        }
        transition={
          reduce ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={56}
          height={56}
          className="h-12 w-auto drop-shadow-[0_0_12px_rgba(17,211,232,0.5)] sm:h-14"
        />
      </motion.div>
      <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan sm:text-[11px]">
        Ramatech
      </p>
      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/45 sm:text-[10px]">
        Control Plane
      </p>
    </motion.div>
  );
}
