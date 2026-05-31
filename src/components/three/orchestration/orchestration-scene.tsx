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
import {
  OrchestrationPaletteProvider,
  useOrchestrationPalette,
} from "./orchestration-palette-context";
import { qualityConfig, type OrchestrationQuality, type SceneTone } from "./nodes";

type Props = {
  quality: OrchestrationQuality;
  sceneTone?: SceneTone;
  parallaxGroupRef?: React.RefObject<THREE.Group | null>;
  applyParallax?: () => void;
};

function SceneInner({
  quality,
  parallaxGroupRef,
  applyParallax,
}: Omit<Props, "sceneTone">) {
  const palette = useOrchestrationPalette();
  const config = qualityConfig(quality, palette.labelsOnLight ? "heroOnLight" : "dark");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const showLabels = config.showLabels && isLg;

  useFrame(() => {
    applyParallax?.();
  });

  const cyanLight = palette.labelsOnLight ? 0.35 : 0.5;
  const deepLight = palette.labelsOnLight ? 0.25 : 0.35;

  return (
    <group ref={parallaxGroupRef}>
      <fog attach="fog" args={[palette.bg, palette.fogNear, palette.fogFar]} />
      <ambientLight intensity={palette.labelsOnLight ? 0.55 : 0.4} />
      <directionalLight position={[5, 5, 5]} intensity={palette.labelsOnLight ? 0.75 : 0.9} color="#ffffff" />
      <pointLight position={[-4, 2, 3]} intensity={cyanLight} color={palette.cyan} />
      <pointLight position={[3, -2, -2]} intensity={deepLight} color={palette.deepBlue} />

      <ParticleField count={config.particles} />
      <Globe segments={config.globeSegments} />
      <ConnectionPaths />
      <EnergyPulses count={config.pulseCount} />
      <ControlCore />
      <LogoPulses count={quality === "full" ? 3 : 1} />
      <OrbitNodes showLabels={showLabels} />
      <DataPackets streaksPerPath={config.streaksPerPath} />
    </group>
  );
}

export function OrchestrationSceneContent({
  quality,
  sceneTone = "dark",
  parallaxGroupRef,
  applyParallax,
}: Props) {
  return (
    <OrchestrationPaletteProvider tone={sceneTone}>
      <SceneInner
        quality={quality}
        parallaxGroupRef={parallaxGroupRef}
        applyParallax={applyParallax}
      />
    </OrchestrationPaletteProvider>
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
