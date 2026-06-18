"use client";

import { motion } from "framer-motion";
import {
  BRAND,
  CaseStudyVizShell,
  FlowLine,
  FlowNode,
  FlowPacket,
  TechRow,
  useCaseStudyVizMotion,
} from "./viz-shared";

const FLOW_Y = 108;

const STAGES = [
  { id: "git", x: 72, label: "Git", caption: "Source", variant: "default" as const },
  { id: "ci", x: 168, label: "CI", caption: "Build", variant: "default" as const },
  { id: "argocd", x: 264, label: "Argo CD", caption: "Sync", variant: "hub" as const },
  { id: "policy", x: 360, label: "Kyverno", caption: "Policy", variant: "default" as const },
  { id: "cluster", x: 420, label: "OCP", caption: "Cluster", variant: "dest" as const },
];

const NODE_W = 56;
const NODE_H = 32;

export function GitopsAutomationViz({ className }: { className?: string }) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;

  const pipelinePath = {
    cx: STAGES.map((s) => s.x),
    cy: STAGES.map(() => FLOW_Y),
  };

  return (
    <CaseStudyVizShell
      className={className}
      ariaLabel="GitOps automation: Git through CI, Argo CD, policy gates to OpenShift cluster"
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
          />
        );
      })}

      {shouldAnimate && !reduced && (
        <motion.circle
          cx={312}
          cy={FLOW_Y - 24}
          r={3}
          fill={BRAND.cyan}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: loopDur * 0.8, repeat: Infinity }}
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
          variant={s.variant}
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
          { name: "ApplicationSet", icon: "argo" },
          { name: "GitOps", icon: "git" },
          { name: "OpenShift", icon: "openshift" },
        ]}
      />

      {shouldAnimate && !reduced && (
        <FlowPacket path={pipelinePath} duration={loopDur * 1.2} delay={0} active />
      )}
    </CaseStudyVizShell>
  );
}
