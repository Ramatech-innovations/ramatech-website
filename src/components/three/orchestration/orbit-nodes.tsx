"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { HUB, SATELLITES, getSatellitePositions } from "./nodes";
import { useOrchestrationPalette } from "./orchestration-palette-context";

const HUB_LABEL_MIN_DIST = 1.85;

function labelPositionFor(position: THREE.Vector3): [number, number, number] {
  const dist = position.distanceTo(HUB);
  const away = position.clone().sub(HUB);
  away.y *= 0.6;
  if (away.lengthSq() < 0.01) {
    return [0, -0.55, 0];
  }
  away.normalize();
  const push = dist < HUB_LABEL_MIN_DIST ? 0.75 : 0.55;
  return [away.x * push, -0.38 + away.y * 0.14, away.z * push];
}

function SatelliteNode({
  label,
  color,
  position,
  index,
  showLabels,
}: {
  label: string;
  color: string;
  position: THREE.Vector3;
  index: number;
  showLabels: boolean;
}) {
  const palette = useOrchestrationPalette();
  const ref = useRef<THREE.Mesh>(null);
  const htmlPos = useMemo(() => labelPositionFor(position), [position]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position.y + Math.sin(t * 0.5 + index) * 0.05;
    const scale = 1 + Math.sin(t * 0.8 + index * 0.7) * 0.04;
    ref.current.scale.setScalar(scale);
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.22, 0.24, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
      {showLabels && (
        <Html
          position={htmlPos}
          center
          distanceFactor={5.5}
          style={{ pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap" }}
        >
          <span
            className={
              palette.labelsOnLight
                ? "rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-primary shadow-sm"
                : "rounded-md border border-brand-cyan/40 bg-[#030B1A]/95 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_0_14px_rgba(17,211,232,0.2)] backdrop-blur-sm"
            }
            style={{ borderLeftColor: color, borderLeftWidth: 2 }}
          >
            {label}
          </span>
        </Html>
      )}
    </group>
  );
}

export function OrbitNodes({ showLabels }: { showLabels: boolean }) {
  const group = useRef<THREE.Group>(null);
  const positions = getSatellitePositions();

  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <group ref={group} renderOrder={3}>
      {SATELLITES.map((s, i) => (
        <SatelliteNode
          key={s.id}
          label={s.shortLabel}
          position={positions[i]}
          color={s.color}
          index={i}
          showLabels={showLabels}
        />
      ))}
    </group>
  );
}
