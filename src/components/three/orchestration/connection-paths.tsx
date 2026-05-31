"use client";

import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { HUB, getSatellitePositions } from "./nodes";
import { useOrchestrationPalette } from "./orchestration-palette-context";

export function buildHubCurves(): THREE.CatmullRomCurve3[] {
  const satellites = getSatellitePositions();
  return satellites.map((target) => {
    const mid = target.clone().multiplyScalar(0.45);
    mid.y += 0.15;
    return new THREE.CatmullRomCurve3([
      HUB.clone(),
      mid,
      target.clone(),
    ]);
  });
}

export function ConnectionPaths() {
  const palette = useOrchestrationPalette();
  const curves = useMemo(() => buildHubCurves(), []);

  return (
    <group renderOrder={1}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(32);
        return (
          <Line
            key={i}
            points={points}
            color={palette.cyan}
            lineWidth={0.5}
            transparent
            opacity={palette.paths.opacity}
          />
        );
      })}
    </group>
  );
}
