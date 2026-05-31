"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { BRAND, VizFrame } from "./viz-primitives";

const GRAPH_NODES = [
  { x: 100, y: 38 },
  { x: 130, y: 55 },
  { x: 118, y: 82 },
  { x: 82, y: 82 },
  { x: 70, y: 55 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
];

export function KnowledgeGraphViz() {
  const { shouldAnimate, duration, reduced, hovered } = useAiMotion();
  const loopDur = duration(5);
  const label = "Knowledge graph: query retrieval and answer generation";

  return (
    <VizFrame label={reduced ? label : `Animated ${label}`}>
      <motion.g
        style={{ transformOrigin: "100px 60px" }}
        animate={shouldAnimate ? { rotate: [-1.5, 1.5, -1.5] } : undefined}
        transition={shouldAnimate ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={GRAPH_NODES[a].x}
            y1={GRAPH_NODES[a].y}
            x2={GRAPH_NODES[b].x}
            y2={GRAPH_NODES[b].y}
            stroke={BRAND.cyan}
            strokeWidth={0.75}
            animate={shouldAnimate ? { opacity: [0.15, 0.5, 0.15] } : { opacity: 0.3 }}
            transition={
              shouldAnimate
                ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.12 }
                : {}
            }
          />
        ))}
        {GRAPH_NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={6}
            fill={BRAND.cyan}
            animate={
              shouldAnimate
                ? { fillOpacity: [0.35, hovered ? 0.85 : 0.65, 0.35] }
                : { fillOpacity: 0.5 }
            }
            transition={
              shouldAnimate
                ? { duration: loopDur / 2, repeat: Infinity, delay: i * 0.15 }
                : {}
            }
          />
        ))}
      </motion.g>
      {shouldAnimate && (
        <>
          <motion.circle
            r={3}
            fill={BRAND.cyan}
            animate={{ cx: [12, 70, 100], cy: [60, 55, 38] }}
            transition={{ duration: loopDur / 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r={3}
            fill={BRAND.cyan}
            fillOpacity={0.8}
            animate={{ cx: [100, 130, 188], cy: [38, 55, 60] }}
            transition={{
              duration: loopDur / 2,
              repeat: Infinity,
              ease: "linear",
              delay: loopDur / 2,
            }}
          />
        </>
      )}
      <text x={12} y={68} fill="rgba(248,250,252,0.35)" fontSize={7} fontFamily="monospace">
        Query
      </text>
      <text x={175} y={68} fill="rgba(248,250,252,0.35)" fontSize={7} fontFamily="monospace">
        Answer
      </text>
    </VizFrame>
  );
}
