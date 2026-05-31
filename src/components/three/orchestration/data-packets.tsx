"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";
import { BRAND } from "./nodes";
import { buildHubCurves } from "./connection-paths";

function PacketOnCurve({
  curve,
  delay,
  duration,
}: {
  curve: THREE.CatmullRomCurve3;
  delay: number;
  duration: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const progress = useRef({ value: 0 });

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

  useFrame(() => {
    if (!meshRef.current) return;
    const t = progress.current.value % 1;
    const point = curve.getPoint(t);
    const tangent = curve.getTangent(t).normalize();
    meshRef.current.position.copy(point);
    meshRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.06, 0.06, 0.14]} />
      <meshStandardMaterial
        color={BRAND.cyan}
        emissive={BRAND.cyan}
        emissiveIntensity={0.9}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

export function DataPackets({ packetsPerPath }: { packetsPerPath: number }) {
  const curves = useMemo(() => buildHubCurves(), []);

  return (
    <group renderOrder={4}>
      {curves.map((curve, ci) =>
        Array.from({ length: packetsPerPath }, (_, pi) => (
          <PacketOnCurve
            key={`${ci}-${pi}`}
            curve={curve}
            delay={pi * 0.4 + ci * 0.15}
            duration={2.8 + pi * 0.35}
          />
        ))
      )}
    </group>
  );
}
