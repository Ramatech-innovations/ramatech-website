"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BRAND = {
  navy: "#030B1A",
  blue: "#0A4C95",
  cyan: "#11D3E8",
  accent: "#1565C0",
  white: "#F8FAFC",
} as const;

export const VIZ_VIEWBOX = { w: 480, h: 268 } as const;

export function useCaseStudyVizMotion() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const speed = hovered ? 1.6 : 1;
  const loopDur = 6 / speed;

  return {
    containerRef,
    hovered,
    setHovered,
    shouldAnimate: active && !reduce,
    reduced: !!reduce,
    loopDur,
    speed,
  };
}

export function CaseStudyVizShell({
  className,
  ariaLabel,
  children,
  motion: m,
}: {
  className?: string;
  ariaLabel: string;
  children: ReactNode;
  motion: ReturnType<typeof useCaseStudyVizMotion>;
}) {
  const { containerRef, setHovered, hovered } = m;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md",
        hovered && "border-brand-cyan/30 shadow-[0_0_48px_rgba(17,211,232,0.1)]",
        className
      )}
      onMouseEnter={() => m.setHovered(true)}
      onMouseLeave={() => m.setHovered(false)}
      role="img"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(17,211,232,0.07), transparent 72%)",
        }}
        aria-hidden
      />
      <svg
        viewBox={`0 0 ${VIZ_VIEWBOX.w} ${VIZ_VIEWBOX.h}`}
        className="relative z-[1] h-full w-full min-h-[220px] md:min-h-[268px]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <filter id="cs-pkt-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {children}
      </svg>
    </div>
  );
}

/** Node with title inside box; optional caption below (never overlapping). */
export function FlowNode({
  x,
  y,
  w,
  h,
  title,
  caption,
  variant = "default",
  active,
  pulseDelay,
  shouldAnimate,
  hovered,
  loopDur,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  caption?: string;
  variant?: "default" | "hub" | "dest";
  active: boolean;
  pulseDelay: number;
  shouldAnimate: boolean;
  hovered: boolean;
  loopDur: number;
}) {
  const top = y - h / 2;
  const fill = variant === "dest" ? "#0d1528" : BRAND.blue;

  return (
    <g>
      <motion.rect
        x={x - w / 2}
        y={top}
        width={w}
        height={h}
        rx={6}
        fill={fill}
        stroke={BRAND.cyan}
        strokeWidth={variant === "hub" ? 1 : 0.75}
        animate={
          shouldAnimate && active
            ? {
                fillOpacity: [0.35, hovered ? 0.62 : 0.48, 0.35],
                strokeOpacity: [0.4, hovered ? 0.9 : 0.65, 0.4],
              }
            : { fillOpacity: 0.4, strokeOpacity: 0.5 }
        }
        transition={
          shouldAnimate && active
            ? { duration: 0.45, delay: pulseDelay, repeat: Infinity, repeatDelay: loopDur - 0.5 }
            : {}
        }
      />
      <text
        x={x}
        y={y + 3}
        textAnchor="middle"
        fill={variant === "hub" ? BRAND.cyan : "rgba(248,250,252,0.75)"}
        fontSize={8}
        fontFamily="ui-monospace, monospace"
        fontWeight={variant === "hub" ? 600 : 500}
      >
        {title}
      </text>
      {caption && (
        <text
          x={x}
          y={top + h + 11}
          textAnchor="middle"
          fill="rgba(248,250,252,0.38)"
          fontSize={6.5}
          fontFamily="ui-monospace, monospace"
        >
          {caption}
        </text>
      )}
    </g>
  );
}

export function FlowLine({
  x1,
  y1,
  x2,
  y2,
  shouldAnimate,
  hovered,
  delay = 0,
  loopDur,
  dashed,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  shouldAnimate: boolean;
  hovered: boolean;
  delay?: number;
  loopDur: number;
  dashed?: boolean;
}) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={BRAND.cyan}
      strokeWidth={0.75}
      strokeDasharray={dashed ? "5 5" : undefined}
      animate={
        shouldAnimate
          ? { opacity: [0.14, hovered ? 0.55 : 0.38, 0.14] }
          : { opacity: 0.22 }
      }
      transition={
        shouldAnimate
          ? { duration: loopDur / 1.8, repeat: Infinity, delay, ease: "easeInOut" }
          : {}
      }
    />
  );
}

export function FlowPacket({
  path,
  duration,
  delay,
  active,
  r = 2.2,
}: {
  path: { cx: number[]; cy: number[] };
  duration: number;
  delay: number;
  active: boolean;
  r?: number;
}) {
  if (!active) return null;
  return (
    <motion.circle
      r={r}
      fill={BRAND.cyan}
      filter="url(#cs-pkt-glow)"
      animate={{ cx: path.cx, cy: path.cy, opacity: [0.5, 0.95, 0.5] }}
      transition={{
        cx: { duration, repeat: Infinity, ease: "linear", delay },
        cy: { duration, repeat: Infinity, ease: "linear", delay },
        opacity: { duration: duration * 0.6, repeat: Infinity },
      }}
    />
  );
}

export type TechIcon =
  | "k8s"
  | "git"
  | "argo"
  | "openshift"
  | "otel"
  | "grafana"
  | "prom"
  | "vm"
  | "openai"
  | "anthropic"
  | "postgres"
  | "pgvector";

const TECH_ICONS: Record<TechIcon, ReactNode> = {
  k8s: (
    <polygon
      points="8,2 13,4.5 13,10 8,12.5 3,10 3,4.5"
      fill="none"
      stroke={BRAND.cyan}
      strokeWidth="0.7"
      opacity="0.8"
    />
  ),
  git: (
    <g stroke={BRAND.cyan} strokeWidth="0.8" fill="none" opacity="0.8">
      <circle cx="8" cy="5" r="1.5" />
      <circle cx="5" cy="10" r="1.5" />
      <path d="M8 6.5v1.5M8 6.5L5 8.5" />
    </g>
  ),
  argo: (
    <g stroke={BRAND.cyan} strokeWidth="0.75" fill="none" opacity="0.8">
      <path d="M4 11 L8 4 L12 11" />
    </g>
  ),
  openshift: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <circle cx="8" cy="8" r="5" strokeWidth="0.75" />
      <path d="M8 5v6M6 7h4" strokeWidth="0.75" />
    </g>
  ),
  otel: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <circle cx="8" cy="8" r="4.5" strokeWidth="0.75" />
      <path d="M5.5 8h5M8 5.5v5" strokeWidth="0.75" />
    </g>
  ),
  grafana: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <path d="M4 11 A5 5 0 0 1 11 4" strokeWidth="0.75" />
    </g>
  ),
  prom: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <path d="M8 4 L9.5 10 L6.5 10 Z" strokeWidth="0.75" />
    </g>
  ),
  vm: (
    <text x="8" y="10" textAnchor="middle" fill={BRAND.cyan} fontSize="6" fontFamily="monospace" opacity="0.85">
      VM
    </text>
  ),
  openai: (
    <polygon
      points="8,3 10.5,4.5 10.5,9.5 8,11 5.5,9.5 5.5,4.5"
      fill="none"
      stroke={BRAND.cyan}
      strokeWidth="0.7"
      opacity="0.8"
    />
  ),
  anthropic: (
    <text x="8" y="10" textAnchor="middle" fill={BRAND.cyan} fontSize="7" fontFamily="serif" opacity="0.85">
      A
    </text>
  ),
  postgres: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <ellipse cx="8" cy="6" rx="4.5" ry="2.5" strokeWidth="0.75" />
      <path d="M3.5 6v4.5c0 1.5 9 1.5 9 0V6" strokeWidth="0.75" />
    </g>
  ),
  pgvector: (
    <g stroke={BRAND.cyan} fill="none" opacity="0.8">
      <rect x="4" y="4" width="8" height="7" rx="1" strokeWidth="0.75" />
      <path d="M5.5 9.5 L8 5 L10.5 9.5" strokeWidth="0.75" />
    </g>
  ),
};

export function TechRow({
  y,
  items,
}: {
  y: number;
  items: { name: string; icon: TechIcon }[];
}) {
  const step = VIZ_VIEWBOX.w / (items.length + 1);
  return (
    <>
      {items.map((item, i) => {
        const cx = step * (i + 1);
        return (
          <g key={item.name} transform={`translate(${cx - 30}, ${y})`}>
            <rect
              width={60}
              height={24}
              rx={5}
              fill={BRAND.navy}
              fillOpacity={0.55}
              stroke={BRAND.cyan}
              strokeOpacity={0.18}
            />
            <svg x={6} y={4} width={16} height={16} viewBox="0 0 16 16">
              {TECH_ICONS[item.icon]}
            </svg>
            <text
              x={34}
              y={14}
              fill="rgba(248,250,252,0.5)"
              fontSize={6}
              fontFamily="ui-monospace, monospace"
            >
              {item.name}
            </text>
          </g>
        );
      })}
    </>
  );
}

export function HealthDots({
  x,
  y,
  count,
  shouldAnimate,
}: {
  x: number;
  y: number;
  count: number;
  shouldAnimate: boolean;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <motion.circle
          key={i}
          cx={x + i * 12}
          cy={y}
          r={2.5}
          fill={BRAND.cyan}
          animate={
            shouldAnimate
              ? { opacity: [0.3, 0.85, 0.3] }
              : { opacity: 0.45 }
          }
          transition={
            shouldAnimate
              ? { duration: 2.2, repeat: Infinity, delay: i * 0.35 }
              : {}
          }
        />
      ))}
    </>
  );
}

/** @deprecated Use FlowNode */
export function PlatformNode(props: Parameters<typeof FlowNode>[0] & { label: string; sublabel?: string }) {
  return <FlowNode {...props} title={props.label} caption={props.sublabel} />;
}

export function TechBadge() {
  return null;
}

export function HealthIndicator(props: {
  x: number;
  y: number;
  shouldAnimate: boolean;
  delay: number;
}) {
  return (
    <motion.circle
      cx={props.x}
      cy={props.y}
      r={2.5}
      fill={BRAND.cyan}
      animate={
        props.shouldAnimate
          ? { opacity: [0.3, 0.85, 0.3] }
          : { opacity: 0.45 }
      }
      transition={
        props.shouldAnimate
          ? { duration: 2.2, repeat: Infinity, delay: props.delay }
          : {}
      }
    />
  );
}
