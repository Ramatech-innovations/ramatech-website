"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { BRAND, VizFrame } from "./viz-primitives";

const NODES = [
  { x: 35, y: 55, label: "Request" },
  { x: 75, y: 55, label: "AI Agent" },
  { x: 125, y: 55, label: "Knowledge" },
  { x: 165, y: 55, label: "Resolved" },
];

function NodeBox({
  x,
  y,
  label,
  pulseDelay,
  loopDur,
}: {
  x: number;
  y: number;
  label: string;
  pulseDelay: number;
  loopDur: number;
}) {
  const { shouldAnimate, hovered } = useAiMotion();
  const w = 36;
  const h = 28;

  return (
    <g>
      <motion.rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={5}
        fill={BRAND.blue}
        stroke={BRAND.cyan}
        strokeWidth={1}
        animate={
          shouldAnimate
            ? {
                fillOpacity: [0.28, 0.55, 0.28],
                strokeOpacity: [0.35, hovered ? 0.95 : 0.75, 0.35],
              }
            : { fillOpacity: 0.35, strokeOpacity: 0.5 }
        }
        transition={
          shouldAnimate
            ? {
                duration: loopDur / 5,
                delay: pulseDelay,
                repeat: Infinity,
                repeatDelay: loopDur - loopDur / 5,
              }
            : {}
        }
      />
      <text
        x={x}
        y={y + h / 2 + 10}
        textAnchor="middle"
        fill="rgba(248,250,252,0.45)"
        fontSize={7}
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
    </g>
  );
}

export function SupportRoutingViz() {
  const { shouldAnimate, duration, reduced } = useAiMotion();
  const loopDur = duration(5.5);
  const label = "Support routing: request through AI agent and knowledge to resolution";

  if (reduced) {
    return (
      <VizFrame label={label}>
        {NODES.map((n) => (
          <NodeBox key={n.label} {...n} pulseDelay={0} loopDur={loopDur} />
        ))}
        <circle cx={165} cy={55} r={3.5} fill={BRAND.cyan} />
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={NODES[i].x}
            y1={55}
            x2={NODES[i + 1].x}
            y2={55}
            stroke={BRAND.cyan}
            strokeOpacity={0.45}
          />
        ))}
      </VizFrame>
    );
  }

  return (
    <VizFrame label={`Animated ${label}`}>
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={NODES[i].x}
          y1={55}
          x2={NODES[i + 1].x}
          y2={55}
          stroke={BRAND.cyan}
          strokeWidth={1}
          animate={{ opacity: [0.22, 0.5, 0.22] }}
          transition={
            shouldAnimate
              ? { duration: loopDur / 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
              : {}
          }
        />
      ))}
      {NODES.map((n, i) => (
        <NodeBox key={n.label} {...n} pulseDelay={(loopDur / 4) * i} loopDur={loopDur} />
      ))}
      {shouldAnimate && (
        <motion.circle
          r={3.5}
          fill={BRAND.cyan}
          animate={{ cx: [35, 75, 125, 165, 35], cy: [55, 55, 55, 55, 55] }}
          transition={{ duration: loopDur, repeat: Infinity, ease: "linear" }}
        />
      )}
    </VizFrame>
  );
}
