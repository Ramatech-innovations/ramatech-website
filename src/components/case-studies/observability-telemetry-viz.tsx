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

const SERVICES = [
  { id: "api", label: "API", y: 54 },
  { id: "pay", label: "Payments", y: 76 },
  { id: "auth", label: "Auth", y: 98 },
  { id: "inv", label: "Inventory", y: 120 },
  { id: "ai", label: "AI Svc", y: 142 },
] as const;

const DESTINATIONS = [
  { id: "metrics", label: "Metrics", y: 72 },
  { id: "logs", label: "Logs", y: 118 },
  { id: "traces", label: "Traces", y: 164 },
] as const;

const SVC_X = 78;
const HUB = { x: 240, y: 112 };
const DEST_X = 402;
const AI = { x: 240, y: 198 };
const INCIDENT = { x: 240, y: 228 };

function ServicePill({
  label,
  y,
  active,
  pulseDelay,
  shouldAnimate,
  hovered,
  loopDur,
}: {
  label: string;
  y: number;
  active: boolean;
  pulseDelay: number;
  shouldAnimate: boolean;
  hovered: boolean;
  loopDur: number;
}) {
  return (
    <g>
      <motion.rect
        x={SVC_X - 36}
        y={y - 10}
        width={72}
        height={20}
        rx={5}
        fill={BRAND.blue}
        stroke={BRAND.cyan}
        strokeWidth={0.75}
        animate={
          shouldAnimate && active
            ? {
                fillOpacity: [0.32, hovered ? 0.55 : 0.42, 0.32],
                strokeOpacity: [0.35, hovered ? 0.8 : 0.6, 0.35],
              }
            : { fillOpacity: 0.36, strokeOpacity: 0.45 }
        }
        transition={
          shouldAnimate && active
            ? { duration: 0.45, delay: pulseDelay, repeat: Infinity, repeatDelay: loopDur - 0.5 }
            : {}
        }
      />
      <text
        x={SVC_X}
        y={y + 4}
        textAnchor="middle"
        fill="rgba(248,250,252,0.6)"
        fontSize={7.5}
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
    </g>
  );
}

function OtelHub({
  shouldAnimate,
  hovered,
}: {
  shouldAnimate: boolean;
  hovered: boolean;
}) {
  return (
    <g transform={`translate(${HUB.x}, ${HUB.y})`}>
      <motion.circle
        r={34}
        fill="none"
        stroke={BRAND.cyan}
        strokeWidth={0.5}
        strokeOpacity={0.12}
        animate={shouldAnimate ? { rotate: 360 } : undefined}
        transition={shouldAnimate ? { duration: 28, repeat: Infinity, ease: "linear" } : undefined}
      />
      <motion.circle
        r={24}
        fill={BRAND.blue}
        stroke={BRAND.cyan}
        strokeWidth={1}
        animate={
          shouldAnimate
            ? { fillOpacity: [0.4, hovered ? 0.68 : 0.52, 0.4] }
            : { fillOpacity: 0.45 }
        }
        transition={shouldAnimate ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : {}}
      />
      <text
        y={-2}
        textAnchor="middle"
        fill={BRAND.cyan}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fontWeight={600}
      >
        OTel Hub
      </text>
      <text
        y={8}
        textAnchor="middle"
        fill="rgba(248,250,252,0.4)"
        fontSize={6}
        fontFamily="ui-monospace, monospace"
      >
        ingest
      </text>
    </g>
  );
}

function ObservabilityDiagram({
  shouldAnimate,
  hovered,
  loopDur,
}: {
  shouldAnimate: boolean;
  hovered: boolean;
  loopDur: number;
}) {
  const svcToHub = (sy: number) => ({
    cx: [SVC_X + 36, 168, HUB.x - 22],
    cy: [sy, (sy + HUB.y) / 2, HUB.y],
  });

  const hubToDest = (dy: number) => ({
    cx: [HUB.x + 22, 322, DEST_X - 32],
    cy: [HUB.y, (HUB.y + dy) / 2, dy],
  });

  const hubToAi = {
    cx: [HUB.x, HUB.x],
    cy: [HUB.y + 26, AI.y - 14],
  };

  const aiToIncident = {
    cx: [AI.x, INCIDENT.x],
    cy: [AI.y + 14, INCIDENT.y - 13],
  };

  return (
    <>
      <circle cx={HUB.x} cy={HUB.y} r={48} fill={BRAND.cyan} fillOpacity={0.04} />

      {SERVICES.map((s, i) => (
        <FlowLine
          key={`in-${s.id}`}
          x1={SVC_X + 36}
          y1={s.y}
          x2={HUB.x - 24}
          y2={HUB.y}
          shouldAnimate={shouldAnimate}
          hovered={hovered}
          delay={i * 0.08}
          loopDur={loopDur}
        />
      ))}

      {DESTINATIONS.map((d, i) => (
        <FlowLine
          key={`out-${d.id}`}
          x1={HUB.x + 24}
          y1={HUB.y}
          x2={DEST_X - 32}
          y2={d.y}
          shouldAnimate={shouldAnimate}
          hovered={hovered}
          delay={0.2 + i * 0.1}
          loopDur={loopDur}
        />
      ))}

      <FlowLine
        x1={HUB.x}
        y1={HUB.y + 26}
        x2={AI.x}
        y2={AI.y - 14}
        shouldAnimate={shouldAnimate}
        hovered={hovered}
        loopDur={loopDur}
        dashed
      />
      <FlowLine
        x1={AI.x}
        y1={AI.y + 14}
        x2={INCIDENT.x}
        y2={INCIDENT.y - 13}
        shouldAnimate={shouldAnimate}
        hovered={hovered}
        delay={0.35}
        loopDur={loopDur}
      />

      {SERVICES.map((s, i) => (
        <ServicePill
          key={s.id}
          label={s.label}
          y={s.y}
          pulseDelay={(loopDur / 6) * i}
          active={shouldAnimate}
          hovered={hovered}
          shouldAnimate={shouldAnimate}
          loopDur={loopDur}
        />
      ))}

      <OtelHub shouldAnimate={shouldAnimate} hovered={hovered} />

      {DESTINATIONS.map((d, i) => (
        <FlowNode
          key={d.id}
          x={DEST_X}
          y={d.y}
          w={64}
          h={22}
          title={d.label}
          variant="dest"
          active={shouldAnimate}
          pulseDelay={loopDur / 4 + i * 0.2}
          shouldAnimate={shouldAnimate}
          hovered={hovered}
          loopDur={loopDur}
        />
      ))}

      <FlowNode
        x={AI.x}
        y={AI.y}
        w={156}
        h={28}
        title="AI Analysis"
        variant="hub"
        active={shouldAnimate}
        pulseDelay={0}
        shouldAnimate={shouldAnimate}
        hovered={hovered}
        loopDur={loopDur}
      />

      <FlowNode
        x={INCIDENT.x}
        y={INCIDENT.y}
        w={120}
        h={26}
        title="Incidents"
        variant="dest"
        active={shouldAnimate}
        pulseDelay={loopDur / 3}
        shouldAnimate={shouldAnimate}
        hovered={hovered}
        loopDur={loopDur}
      />

      {shouldAnimate && (
        <FlowPacket
          path={svcToHub(SERVICES[0].y)}
          duration={loopDur}
          delay={0}
          active
        />
      )}
      {shouldAnimate && (
        <FlowPacket
          path={hubToDest(DESTINATIONS[0].y)}
          duration={loopDur * 0.9}
          delay={loopDur / 3}
          active
        />
      )}
      {shouldAnimate && (
        <>
          <FlowPacket path={hubToAi} duration={loopDur / 1.4} delay={loopDur / 2} active />
          <FlowPacket path={aiToIncident} duration={1.4} delay={loopDur * 0.75} active r={2} />
        </>
      )}

      <TechRow
        y={248}
        items={[
          { name: "OTel", icon: "otel" },
          { name: "Grafana", icon: "grafana" },
          { name: "Prom", icon: "prom" },
          { name: "Victoria", icon: "vm" },
        ]}
      />
    </>
  );
}

export function ObservabilityTelemetryViz({ className }: { className?: string }) {
  const m = useCaseStudyVizMotion();
  const { shouldAnimate, hovered, loopDur, reduced } = m;

  return (
    <CaseStudyVizShell
      className={className}
      ariaLabel={
        reduced
          ? "Observability platform architecture"
          : "Observability architecture: services through OpenTelemetry to metrics, logs, traces, AI analysis, and incident response"
      }
      motion={m}
    >
      <ObservabilityDiagram
        shouldAnimate={shouldAnimate && !reduced}
        hovered={hovered}
        loopDur={loopDur}
      />
    </CaseStudyVizShell>
  );
}
