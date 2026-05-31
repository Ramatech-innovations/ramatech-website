"use client";

import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { BRAND, HUB, getSatellitePositions } from "./nodes";

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
  const curves = useMemo(() => buildHubCurves(), []);

  return (
    <group renderOrder={1}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(32);
        return (
          <Line
            key={i}
            points={points}
            color={BRAND.cyan}
            lineWidth={1}
            transparent
            opacity={0.45}
          />
        );
      })}
    </group>
  );
}
