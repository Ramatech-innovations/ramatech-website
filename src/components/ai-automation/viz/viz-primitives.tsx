"use client";

import { motion } from "framer-motion";
import { useAiMotion } from "../motion/use-ai-motion";
import { nodeActiveVariant } from "../motion/ai-motion-presets";

export const BRAND = {
  navy: "#030B1A",
  blue: "#0A4C95",
  cyan: "#11D3E8",
  accent: "#1565C0",
} as const;

export function VizFrame({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={className ?? "h-full w-full"}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

export function FlowNode({
  x,
  y,
  w = 36,
  h = 28,
  active,
  label,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  active: boolean;
  label?: string;
}) {
  const { hovered } = useAiMotion();
  const v = nodeActiveVariant(active, hovered);

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
        animate={v}
        transition={{ duration: 0.25 }}
      />
      {active && (
        <motion.rect
          x={x - w / 2 - 2}
          y={y - h / 2 - 2}
          width={w + 4}
          height={h + 4}
          rx={6}
          fill="none"
          stroke={BRAND.cyan}
          strokeWidth={0.75}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.6 : 0.35 }}
          transition={{ duration: 0.2 }}
        />
      )}
      {label && (
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
      )}
    </g>
  );
}

export function FlowLine({
  x1,
  y1,
  x2,
  y2,
  active,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active?: boolean;
}) {
  const { hovered, shouldAnimate } = useAiMotion();
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={BRAND.cyan}
      strokeWidth={1}
      animate={{
        opacity: active ? (hovered ? 0.75 : 0.55) : shouldAnimate ? [0.2, 0.4, 0.2] : 0.25,
      }}
      transition={
        shouldAnimate && !active
          ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.2 }
      }
    />
  );
}

export function Packet({
  cx,
  cy,
  r = 3.5,
}: {
  cx: number | number[];
  cy: number | number[];
  r?: number;
}) {
  const { shouldAnimate, duration, hovered } = useAiMotion();
  return (
    <motion.circle
      r={r}
      fill={BRAND.cyan}
      animate={
        shouldAnimate
          ? { cx, cy, opacity: hovered ? [0.7, 1, 0.7] : [0.5, 0.9, 0.5] }
          : { cx: Array.isArray(cx) ? cx[0] : cx, cy: Array.isArray(cy) ? cy[0] : cy, opacity: 0.7 }
      }
      transition={
        shouldAnimate
          ? {
              duration: Array.isArray(cx) ? duration(5) : 0.2,
              repeat: Infinity,
              ease: "linear",
            }
          : {}
      }
    />
  );
}
