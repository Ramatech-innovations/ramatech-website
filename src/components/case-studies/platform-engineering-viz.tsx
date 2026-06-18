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

const FLOW_Y = 118;

const STAGES = [
  { id: "portal", x: 80, label: "Portal", caption: "Self-svc", variant: "default" as const },
  { id: "template", x: 180, label: "Golden", caption: "Path", variant: "hub" as const },
  { id: "gitops", x: 280, label: "GitOps", caption: "Tenant", variant: "default" as const },
  { id: "namespace", x: 380, label: "Namespace", caption: "Ready", variant: "dest" as const },
];

const NODE_W = 64;
const NODE_H = 32;

export function PlatformEngineeringViz({ className }: { className?: string }) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;

  const pipelinePath = {
    cx: STAGES.map((s) => s.x),
    cy: STAGES.map(() => FLOW_Y),
  };

  return (
    <CaseStudyVizShell
      className={className}
      ariaLabel="Platform engineering: self-service portal through golden-path templates to provisioned namespace"
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
        <motion.rect
          x={160}
          y={FLOW_Y - 48}
          width={120}
          height={20}
          rx={4}
          fill="none"
          stroke={BRAND.cyan}
          strokeWidth={0.6}
          strokeDasharray="3 5"
          animate={{ opacity: [0.15, hovered ? 0.5 : 0.3, 0.15] }}
          transition={{ duration: loopDur, repeat: Infinity }}
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
          pulseDelay={(loopDur / 5) * i}
          shouldAnimate={shouldAnimate && !reduced}
          hovered={hovered}
          loopDur={loopDur}
        />
      ))}

      <TechRow
        y={232}
        items={[
          { name: "Backstage", icon: "git" },
          { name: "Helm", icon: "k8s" },
          { name: "OpenShift", icon: "openshift" },
        ]}
      />

      {shouldAnimate && !reduced && (
        <FlowPacket path={pipelinePath} duration={loopDur * 1.1} delay={0.2} active />
      )}
    </CaseStudyVizShell>
  );
}
