"use client";

import { motion } from "framer-motion";
import {
  BRAND,
  CaseStudyVizShell,
  FlowLine,
  FlowPacket,
  FlowNode,
  TechRow,
  useCaseStudyVizMotion,
} from "./viz-shared";

const FLOW_Y = 108;

const STAGES = [
  { id: "docs", x: 68, title: "Docs", caption: "Intake" },
  { id: "embed", x: 158, title: "Embed", caption: "Encode" },
  { id: "vector", x: 248, title: "Vectors", caption: "Retrieve", variant: "hub" as const },
  { id: "llm", x: 338, title: "LLM", caption: "Generate" },
  { id: "review", x: 428, title: "Review", caption: "Human", variant: "dest" as const },
];

const NODE_W = 58;
const NODE_H = 30;

export function AiOperationsViz({ className }: { className?: string }) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;

  const pipelinePath = {
    cx: STAGES.map((s) => s.x),
    cy: STAGES.map(() => FLOW_Y),
  };

  return (
    <CaseStudyVizShell
      className={className}
      ariaLabel="AI operations pipeline: documents through embeddings and vector search to LLM and human review"
      motion={m}
    >
      {STAGES.slice(0, -1).map((s, i) => {
        const n = STAGES[i + 1];
        return (
          <FlowLine
            key={s.id}
            x1={s.x + NODE_W / 2}
            y1={FLOW_Y}
            x2={n.x - NODE_W / 2}
            y2={FLOW_Y}
            shouldAnimate={shouldAnimate && !reduced}
            hovered={hovered}
            delay={i * 0.1}
            loopDur={loopDur}
            dashed={i === 2}
          />
        );
      })}

      {shouldAnimate && !reduced && (
        <motion.circle
          cx={248}
          cy={FLOW_Y}
          r={28}
          fill="none"
          stroke={BRAND.cyan}
          strokeWidth={0.5}
          animate={{ opacity: [0.08, hovered ? 0.28 : 0.18, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {STAGES.map((s, i) => (
        <FlowNode
          key={s.id}
          x={s.x}
          y={FLOW_Y}
          w={NODE_W}
          h={NODE_H}
          title={s.title}
          caption={s.caption}
          variant={s.variant ?? "default"}
          active={shouldAnimate && !reduced}
          pulseDelay={(loopDur / 6) * i}
          shouldAnimate={shouldAnimate && !reduced}
          hovered={hovered}
          loopDur={loopDur}
        />
      ))}

      <TechRow
        y={232}
        items={[
          { name: "Postgres", icon: "postgres" },
          { name: "pgvector", icon: "pgvector" },
          { name: "OpenAI", icon: "openai" },
          { name: "Anthropic", icon: "anthropic" },
        ]}
      />

      {shouldAnimate && !reduced && (
        <FlowPacket path={pipelinePath} duration={loopDur * 1.1} delay={0} active />
      )}
    </CaseStudyVizShell>
  );
}
