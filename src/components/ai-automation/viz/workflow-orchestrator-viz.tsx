"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { BRAND, VizFrame } from "./viz-primitives";

const STEPS = [
  { x: 32, y: 58, label: "Trigger" },
  { x: 72, y: 58, label: "Validate" },
  { x: 112, y: 58, label: "Process" },
  { x: 168, y: 58, label: "Notify" },
];

export function WorkflowOrchestratorViz() {
  const { shouldAnimate, duration, reduced, hovered } = useAiMotion();
  const loopDur = duration(4);
  const label = "Workflow orchestration: trigger, validate, process, notify";

  return (
    <VizFrame label={reduced ? label : `Animated ${label}`}>
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={STEPS[i].x + 18}
          y1={58}
          x2={STEPS[i + 1].x - 18}
          y2={58}
          stroke={BRAND.cyan}
          strokeWidth={1}
          strokeOpacity={reduced ? 0.4 : undefined}
          animate={shouldAnimate ? { opacity: [0.2, 0.55, 0.2] } : undefined}
          transition={
            shouldAnimate
              ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.1 }
              : undefined
          }
        />
      ))}
      {STEPS.map((s, i) => (
        <g key={s.label}>
          <motion.rect
            x={s.x - 20}
            y={s.y - 14}
            width={40}
            height={28}
            rx={5}
            fill={BRAND.blue}
            stroke={BRAND.cyan}
            strokeWidth={1}
            animate={
              shouldAnimate
                ? {
                    fillOpacity: [0.28, 0.28, 0.28, 0.28, 0.6, 0.28],
                    strokeOpacity: [0.35, 0.35, 0.35, 0.35, hovered ? 1 : 0.85, 0.35],
                  }
                : { fillOpacity: i === 2 ? 0.45 : 0.3, strokeOpacity: 0.5 }
            }
            transition={
              shouldAnimate
                ? {
                    duration: loopDur,
                    times: [0, 0.2, 0.4, 0.6, 0.75, 1],
                    repeat: Infinity,
                  }
                : {}
            }
          />
          <text
            x={s.x}
            y={s.y + 22}
            textAnchor="middle"
            fill="rgba(248,250,252,0.45)"
            fontSize={7}
            fontFamily="ui-monospace, monospace"
          >
            {s.label}
          </text>
        </g>
      ))}
      {shouldAnimate ? (
        <motion.circle
          r={4}
          fill={BRAND.cyan}
          animate={{
            cx: [...STEPS.map((s) => s.x), STEPS[0].x],
            cy: [...STEPS.map(() => 58), 58],
          }}
          transition={{ duration: loopDur, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <circle cx={112} cy={58} r={4} fill={BRAND.cyan} />
      )}
    </VizFrame>
  );
}
