"use client";

import { motion, useReducedMotion } from "framer-motion";
import { commandCenterOsCards } from "@/content/command-center-os";

const CX = 50;
const CY = 52;

function cardAnchor(card: (typeof commandCenterOsCards)[0]) {
  const left = parseFloat(card.left);
  const top = parseFloat(card.top);
  return {
    x: left + 14,
    y: top + 12,
  };
}

export function OsConnections({ active }: { active: boolean }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="os-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A4C95" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#11D3E8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0A4C95" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {commandCenterOsCards.map((card, i) => {
        const end = cardAnchor(card);
        return (
          <g key={card.id}>
            <motion.line
              x1={CX}
              y1={CY}
              x2={end.x}
              y2={end.y}
              stroke="url(#os-line-grad)"
              strokeWidth="0.35"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={
                reduce || !active
                  ? { opacity: 0.35 }
                  : { pathLength: 1, opacity: [0.25, 0.55, 0.25] }
              }
              transition={
                reduce
                  ? {}
                  : {
                      pathLength: { duration: 1.2, delay: i * 0.08 },
                      opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 },
                    }
              }
            />
            {!reduce && active && (
              <motion.circle
                r="0.55"
                fill="#11D3E8"
                initial={{ cx: CX, cy: CY }}
                animate={{
                  cx: [CX, end.x, CX],
                  cy: [CY, end.y, CY],
                }}
                transition={{
                  duration: 2.8 + i * 0.15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.25,
                }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
