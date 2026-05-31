"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const PARTICLES = [
  { left: "12%", top: "18%", dur: 14, dx: 8, dy: -6 },
  { left: "78%", top: "22%", dur: 18, dx: -10, dy: 5 },
  { left: "45%", top: "65%", dur: 16, dx: 6, dy: 8 },
  { left: "88%", top: "70%", dur: 20, dx: -6, dy: -8 },
  { left: "22%", top: "80%", dur: 17, dx: 10, dy: 4 },
  { left: "62%", top: "12%", dur: 15, dx: -8, dy: 6 },
  { left: "35%", top: "42%", dur: 19, dx: 5, dy: -5 },
  { left: "92%", top: "45%", dur: 21, dx: -5, dy: 7 },
];

export function AiAutomationBackground({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const particles = isMobile ? PARTICLES.slice(0, 4) : PARTICLES;

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,211,232,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,211,232,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,76,149,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,76,149,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
        animate={active ? { backgroundPosition: ["0px 0px", "48px 48px"] } : undefined}
        transition={active ? { duration: 40, repeat: Infinity, ease: "linear" } : undefined}
      />
      {active &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-cyan"
            style={{ left: p.left, top: p.top, opacity: 0.05 }}
            animate={{
              x: [0, p.dx, 0],
              y: [0, p.dy, 0],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
