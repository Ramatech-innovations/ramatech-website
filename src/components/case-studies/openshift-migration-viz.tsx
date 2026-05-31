"use client";

import { motion } from "framer-motion";
import {
  BRAND,
  CaseStudyVizShell,
  FlowLine,
  FlowPacket,
  FlowNode,
  HealthDots,
  TechRow,
  useCaseStudyVizMotion,
} from "./viz-shared";

const FLOW_Y = 108;

const STAGES = [
  { id: "legacy", x: 72, label: "Legacy", caption: "Infra" },
  { id: "migration", x: 168, label: "Migrate", caption: "Layer" },
  { id: "gitops", x: 264, label: "GitOps", caption: "Pipeline", variant: "hub" as const },
  { id: "cluster", x: 388, label: "OpenShift", caption: "Cluster", variant: "dest" as const },
];

const NODE_W = 68;
const NODE_H = 32;

export function OpenshiftMigrationViz({ className }: { className?: string }) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;

  const pipelinePath = {
    cx: STAGES.map((s) => s.x),
    cy: STAGES.map(() => FLOW_Y),
  };

  return (
    <CaseStudyVizShell
      className={className}
      ariaLabel="OpenShift migration: legacy infrastructure through GitOps to OpenShift cluster"
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
            delay={i * 0.12}
            loopDur={loopDur}
          />
        );
      })}

      {shouldAnimate && !reduced && (
        <motion.path
          d="M 298 88 Q 340 72 388 88"
          fill="none"
          stroke={BRAND.cyan}
          strokeWidth={0.6}
          strokeDasharray="4 6"
          animate={{ opacity: [0.12, hovered ? 0.45 : 0.28, 0.12] }}
          transition={{ duration: loopDur * 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {STAGES.map((s, i) => (
        <FlowNode
          key={s.id}
          x={s.x}
          y={FLOW_Y}
          w={NODE_W}
          h={NODE_H}
          title={s.label}
          caption={s.caption}
          variant={s.variant ?? "default"}
          active={shouldAnimate && !reduced}
          pulseDelay={(loopDur / 5) * i}
          shouldAnimate={shouldAnimate && !reduced}
          hovered={hovered}
          loopDur={loopDur}
        />
      ))}

      <HealthDots x={368} y={FLOW_Y + NODE_H / 2 + 18} count={3} shouldAnimate={shouldAnimate && !reduced} />

      <TechRow
        y={232}
        items={[
          { name: "Argo CD", icon: "argo" },
          { name: "Git", icon: "git" },
          { name: "OpenShift", icon: "openshift" },
          { name: "K8s", icon: "k8s" },
        ]}
      />

      {shouldAnimate && !reduced && (
        <FlowPacket path={pipelinePath} duration={loopDur * 1.15} delay={0} active />
      )}
    </CaseStudyVizShell>
  );
}
