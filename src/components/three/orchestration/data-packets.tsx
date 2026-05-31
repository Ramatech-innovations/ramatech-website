"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";
import { useOrchestrationPalette } from "./orchestration-palette-context";
import { buildHubCurves } from "./connection-paths";

const STAR_GEO = new THREE.SphereGeometry(1, 8, 8);
const TRAIL_OFFSETS = [0.04, 0.08] as const;

function wrap01(t: number) {
  return ((t % 1) + 1) % 1;
}

function StarOnCurve({
  curve,
  delay,
  duration,
}: {
  curve: THREE.CatmullRomCurve3;
  delay: number;
  duration: number;
}) {
  const palette = useOrchestrationPalette();
  const headRef = useRef<THREE.Mesh>(null);
  const trail0Ref = useRef<THREE.Mesh>(null);
  const trail1Ref = useRef<THREE.Mesh>(null);
  const progress = useRef({ value: 0 });

  const matHead = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: palette.cyan,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [palette.cyan]
  );
  const matTrail = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: palette.cyan,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [palette.cyan]
  );

  useEffect(() => {
    const tw = gsap.to(progress.current, {
      value: 1,
      duration,
      repeat: -1,
      ease: "none",
      delay,
    });
    return () => {
      tw.kill();
    };
  }, [delay, duration]);

  const updateMesh = (mesh: THREE.Mesh | null, param: number, isHead: boolean) => {
    if (!mesh) return;
    const p = wrap01(param);
    const point = curve.getPoint(p);
    mesh.position.copy(point);
    const pulse = Math.sin(p * Math.PI);
    const scale = (0.018 + pulse * 0.022) * palette.stars.scaleMul;
    mesh.scale.setScalar(scale);
    const mat = mesh.material as THREE.MeshBasicMaterial;
    const headMax = palette.stars.headOpacityMax;
    mat.opacity = isHead ? 0.2 + pulse * headMax : 0.04 + pulse * (headMax * 0.35);
  };

  useFrame(() => {
    const t = progress.current.value;
    updateMesh(headRef.current, t, true);
    updateMesh(trail0Ref.current, t - TRAIL_OFFSETS[0], false);
    updateMesh(trail1Ref.current, t - TRAIL_OFFSETS[1], false);
  });

  return (
    <group renderOrder={5}>
      <mesh ref={trail1Ref} geometry={STAR_GEO} material={matTrail} />
      <mesh ref={trail0Ref} geometry={STAR_GEO} material={matTrail} />
      <mesh ref={headRef} geometry={STAR_GEO} material={matHead} />
    </group>
  );
}

export function DataPackets({ streaksPerPath }: { streaksPerPath: number }) {
  const reduce = useReducedMotion();
  const curves = useMemo(() => buildHubCurves(), []);

  if (reduce) return null;

  return (
    <group renderOrder={5}>
      {curves.map((curve, ci) =>
        Array.from({ length: streaksPerPath }, (_, pi) => (
          <StarOnCurve
            key={`${ci}-${pi}`}
            curve={curve}
            delay={pi * 0.5 + ci * 0.18}
            duration={2.6 + pi * 0.4}
          />
        ))
      )}
    </group>
  );
}
