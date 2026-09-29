"use client";

import {
  CaseStudyVizShell,
  FlowLine,
  FlowNode,
  FlowPacket,
  TechRow,
  type TechIcon,
  useCaseStudyVizMotion,
} from "./viz-shared";

const FLOW_Y = 112;
const NODE_W = 60;
const NODE_H = 32;
const FIRST_X = 64;
const STEP_X = 88;

type Stage = {
  label: string;
  caption: string;
  variant?: "default" | "hub" | "dest";
};

type PipelineFlowVizProps = {
  className?: string;
  ariaLabel: string;
  stages: Stage[];
  tech: { name: string; icon: TechIcon }[];
};

export function PipelineFlowViz({ className, ariaLabel, stages, tech }: PipelineFlowVizProps) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;
  const animate = shouldAnimate && !reduced;
  const xs = stages.map((_, i) => FIRST_X + i * STEP_X);

  return (
    <CaseStudyVizShell className={className} ariaLabel={ariaLabel} motion={m}>
      {xs.slice(0, -1).map((x, i) => (
        <FlowLine
          key={stages[i].label}
          x1={x + NODE_W / 2}
          y1={FLOW_Y}
          x2={xs[i + 1] - NODE_W / 2}
          y2={FLOW_Y}
          shouldAnimate={animate}
          hovered={hovered}
          delay={i * 0.1}
          loopDur={loopDur}
        />
      ))}

      {stages.map((s, i) => (
        <FlowNode
          key={s.label}
          x={xs[i]}
          y={FLOW_Y}
          w={NODE_W}
          h={NODE_H}
          title={s.label}
          caption={s.caption}
          variant={s.variant ?? "default"}
          active={animate}
          pulseDelay={(loopDur / (stages.length + 1)) * i}
          shouldAnimate={animate}
          hovered={hovered}
          loopDur={loopDur}
        />
      ))}

      <TechRow y={232} items={tech} />

      {animate && (
        <FlowPacket
          path={{ cx: xs, cy: xs.map(() => FLOW_Y) }}
          duration={loopDur * 1.2}
          delay={0}
          active
        />
      )}
    </CaseStudyVizShell>
  );
}

export function HelmGitopsViz({ className }: { className?: string }) {
  return (
    <PipelineFlowViz
      className={className}
      ariaLabel="Helm and GitOps: GitLab source, Jenkins packaging, Helm chart, Argo CD sync to an air-gapped OpenShift cluster through a mirror registry"
      stages={[
        { label: "GitLab", caption: "Source" },
        { label: "Jenkins", caption: "Package" },
        { label: "Helm", caption: "Chart" },
        { label: "Argo CD", caption: "Sync", variant: "hub" },
        { label: "OCP", caption: "Air-gapped", variant: "dest" },
      ]}
      tech={[
        { name: "Helm", icon: "k8s" },
        { name: "Argo CD", icon: "argo" },
        { name: "Mirror", icon: "git" },
        { name: "OpenShift", icon: "openshift" },
      ]}
    />
  );
}

export function OperationsAutomationViz({ className }: { className?: string }) {
  return (
    <PipelineFlowViz
      className={className}
      ariaLabel="OpenShift operations automation: Jenkins triggers Ansible and Python automation, applied through Argo CD, Helm, and Operators to a bare-metal OpenShift cluster"
      stages={[
        { label: "Jenkins", caption: "Trigger" },
        { label: "Ansible", caption: "Automate", variant: "hub" },
        { label: "Argo CD", caption: "Apply" },
        { label: "Operators", caption: "Day 2" },
        { label: "OCP", caption: "Bare metal", variant: "dest" },
      ]}
      tech={[
        { name: "Ansible", icon: "git" },
        { name: "Python", icon: "git" },
        { name: "Helm", icon: "k8s" },
        { name: "OpenShift", icon: "openshift" },
      ]}
    />
  );
}
