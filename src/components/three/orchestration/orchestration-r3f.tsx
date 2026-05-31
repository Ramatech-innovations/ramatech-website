"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

useTexture.preload("/brand/logo-mark.png");
import type * as THREE from "three";
import {
  OrchestrationSceneContent,
  OrchestrationPerformance,
} from "./orchestration-scene";
import { getPalette, qualityConfig, type OrchestrationQuality, type SceneTone } from "./nodes";

type Props = {
  quality: OrchestrationQuality;
  sceneTone?: SceneTone;
  frameloop?: "always" | "demand" | "never";
  parallaxGroupRef?: React.RefObject<THREE.Group | null>;
  applyParallax?: () => void;
};

function Loader() {
  return null;
}

export function OrchestrationR3F({
  quality,
  sceneTone = "dark",
  frameloop = "always",
  parallaxGroupRef,
  applyParallax,
}: Props) {
  const { dpr } = qualityConfig(quality, sceneTone);
  const palette = getPalette(sceneTone);

  return (
    <Canvas
      camera={{ position: [0, 0.15, 6.8], fov: 40 }}
      dpr={dpr}
      frameloop={frameloop}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={[palette.bg]} />
      <Suspense fallback={<Loader />}>
        <OrchestrationPerformance quality={quality} />
        <OrchestrationSceneContent
          quality={quality}
          sceneTone={sceneTone}
          parallaxGroupRef={parallaxGroupRef}
          applyParallax={applyParallax}
        />
      </Suspense>
    </Canvas>
  );
}
