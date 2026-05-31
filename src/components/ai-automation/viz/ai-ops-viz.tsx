"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { BRAND, VizFrame } from "./viz-primitives";

const STAGES = [
  { x: 28, y: 75, label: "Metrics" },
  { x: 68, y: 75, label: "Detect" },
  { x: 108, y: 75, label: "Analyze" },
  { x: 168, y: 75, label: "Recommend" },
];

const BASELINE = "30,88 55,82 80,78 105,72 130,68 155,62 175,58";

export function AiOpsViz() {
  const { shouldAnimate, duration, reduced, hovered } = useAiMotion();
  const loopDur = duration(5);
  const label = "AI operations: detect anomalies and recommend resolution";

  return (
    <VizFrame label={reduced ? label : `Animated ${label}`}>
      <polyline
        points={BASELINE}
        fill="none"
        stroke={BRAND.cyan}
        strokeWidth={1}
        strokeOpacity={0.25}
      />
      {shouldAnimate && (
        <motion.polyline
          points={BASELINE}
          fill="none"
          stroke={BRAND.cyan}
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0.15 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: loopDur / 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.polyline
        points="105,72 130,45 155,62 175,58"
        fill="none"
        stroke={BRAND.cyan}
        strokeWidth={1.5}
        strokeDasharray="4 3"
        animate={
          shouldAnimate
            ? { opacity: [0, hovered ? 0.9 : 0.7, 0.2], pathLength: [0, 1, 1] }
            : { opacity: 0.55 }
        }
        transition={
          shouldAnimate
            ? { duration: loopDur / 2, repeat: Infinity, delay: loopDur / 3, ease: "easeOut" }
            : {}
        }
      />
      {shouldAnimate && (
        <motion.circle
          cx={130}
          cy={45}
          r={5}
          fill={BRAND.cyan}
          animate={{ opacity: [0, 1, 0.6, 0], scale: [0.8, 1.2, 1, 0.8] }}
          transition={{ duration: loopDur / 2, repeat: Infinity, delay: loopDur / 3 }}
        />
      )}
      {STAGES.map((s, i) => (
        <g key={s.label}>
          <motion.rect
            x={s.x - 22}
            y={s.y - 12}
            width={44}
            height={24}
            rx={4}
            fill={BRAND.blue}
            stroke={BRAND.cyan}
            strokeWidth={1}
            animate={
              shouldAnimate
                ? {
                    fillOpacity: i === 1 ? [0.28, 0.65, 0.28] : [0.28, 0.4, 0.28],
                    strokeOpacity: i === 1 && hovered ? [0.4, 1, 0.4] : [0.35, 0.65, 0.35],
                  }
                : { fillOpacity: i === 1 ? 0.5 : 0.32, strokeOpacity: 0.5 }
            }
            transition={
              shouldAnimate
                ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.2 }
                : {}
            }
          />
          <text
            x={s.x}
            y={s.y + 20}
            textAnchor="middle"
            fill="rgba(248,250,252,0.45)"
            fontSize={7}
            fontFamily="ui-monospace, monospace"
          >
            {s.label}
          </text>
        </g>
      ))}
      {shouldAnimate &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r={2}
            fill={BRAND.cyan}
            animate={{
              cx: [STAGES[i].x, STAGES[i + 1].x],
              cy: [STAGES[i].y - 20, STAGES[i + 1].y - 20],
            }}
            transition={{
              duration: loopDur / 4,
              repeat: Infinity,
              delay: i * (loopDur / 4),
              ease: "linear",
            }}
          />
        ))}
    </VizFrame>
  );
}
