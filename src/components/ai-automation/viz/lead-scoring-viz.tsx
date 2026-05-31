"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { BRAND, VizFrame } from "./viz-primitives";

const BARS = [
  { x: 95, h: 22 },
  { x: 115, h: 38 },
  { x: 135, h: 52 },
  { x: 155, h: 68 },
];

const NODES = [
  { x: 40, y: 88, label: "Lead" },
  { x: 75, y: 70, label: "Score" },
  { x: 115, y: 48, label: "Route" },
  { x: 168, y: 32, label: "Qualified" },
];

export function LeadScoringViz() {
  const { shouldAnimate, duration, reduced, hovered } = useAiMotion();
  const loopDur = duration(4.5);
  const label = "Lead qualification: scoring, routing, and qualification";

  return (
    <VizFrame label={reduced ? label : `Animated ${label}`}>
      <motion.line
        x1={40}
        y1={88}
        x2={168}
        y2={32}
        stroke={BRAND.cyan}
        strokeWidth={1}
        strokeDasharray="3 4"
        strokeOpacity={0.35}
        animate={shouldAnimate ? { opacity: [0.2, 0.5, 0.2] } : undefined}
        transition={shouldAnimate ? { duration: loopDur / 2, repeat: Infinity } : undefined}
      />
      {BARS.map((b, i) => (
        <motion.rect
          key={b.x}
          x={b.x}
          width={14}
          rx={2}
          fill={BRAND.accent}
          stroke={BRAND.cyan}
          strokeWidth={0.75}
          strokeOpacity={0.4}
          initial={{ y: 95, height: 8 }}
          animate={
            shouldAnimate
              ? { y: [95, 95 - b.h, 95], height: [8, b.h, 8] }
              : { y: 95 - b.h, height: b.h }
          }
          transition={
            shouldAnimate
              ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }
              : {}
          }
        />
      ))}
      {NODES.map((n, i) => (
        <g key={n.label}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={i === 3 ? 10 : 7}
            fill={BRAND.blue}
            stroke={BRAND.cyan}
            strokeWidth={1}
            animate={
              shouldAnimate
                ? {
                    fillOpacity: i === 3 ? [0.3, 0.7, 0.3] : [0.28, 0.45, 0.28],
                    strokeOpacity: i === 3 && hovered ? [0.5, 1, 0.5] : [0.35, 0.7, 0.35],
                  }
                : { fillOpacity: i === 3 ? 0.55 : 0.35, strokeOpacity: 0.6 }
            }
            transition={
              shouldAnimate
                ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.25 }
                : {}
            }
          />
          <text
            x={n.x}
            y={n.y + (i === 3 ? 18 : 16)}
            textAnchor="middle"
            fill="rgba(248,250,252,0.45)"
            fontSize={7}
            fontFamily="ui-monospace, monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
      {shouldAnimate && (
        <motion.circle
          r={3.5}
          fill={BRAND.cyan}
          animate={{
            cx: [40, 75, 115, 168, 40],
            cy: [88, 70, 48, 32, 88],
          }}
          transition={{ duration: loopDur, repeat: Infinity, ease: "linear" }}
        />
      )}
    </VizFrame>
  );
}
