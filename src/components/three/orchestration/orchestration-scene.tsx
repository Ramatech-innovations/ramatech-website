"use client";

import { useFrame } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import type * as THREE from "three";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ControlCore } from "./control-core";
import { Globe } from "./globe";
import { OrbitNodes } from "./orbit-nodes";
import { ConnectionPaths } from "./connection-paths";
import { DataPackets } from "./data-packets";
import { EnergyPulses } from "./energy-pulses";
import { LogoPulses } from "./logo-pulses";
import { ParticleField } from "./particle-field";
import { BRAND, qualityConfig, type OrchestrationQuality } from "./nodes";

type Props = {
  quality: OrchestrationQuality;
  parallaxGroupRef?: React.RefObject<THREE.Group | null>;
  applyParallax?: () => void;
};

export function OrchestrationSceneContent({
  quality,
  parallaxGroupRef,
  applyParallax,
}: Props) {
  const config = qualityConfig(quality);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const showLabels = config.showLabels && isLg;

  useFrame(() => {
    applyParallax?.();
  });

  return (
    <group ref={parallaxGroupRef}>
      <fog attach="fog" args={[BRAND.bg, 4, 14]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-4, 2, 3]} intensity={0.5} color={BRAND.cyan} />
      <pointLight position={[3, -2, -2]} intensity={0.35} color={BRAND.deepBlue} />

      <ParticleField count={config.particles} />
      <Globe segments={config.globeSegments} />
      <ConnectionPaths />
      <EnergyPulses count={config.pulseCount} />
      <ControlCore />
      <LogoPulses count={quality === "full" ? 3 : 1} />
      <OrbitNodes showLabels={showLabels} />
      <DataPackets packetsPerPath={config.packetsPerPath} />
    </group>
  );
}

export function OrchestrationPerformance({ quality }: { quality: OrchestrationQuality }) {
  if (quality !== "full") return null;
  return (
    <>
      <PerformanceMonitor />
      <AdaptiveDpr pixelated />
    </>
  );
}
