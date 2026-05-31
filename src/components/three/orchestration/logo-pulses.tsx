"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import gsap from "gsap";
import { BRAND, LOGO_Z } from "./nodes";

function LogoPulseRing({ delay }: { delay: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const mat = mesh.material as THREE.MeshBasicMaterial;
    mesh.scale.set(1, 1, 1);
    mat.opacity = 0.45;
    const tl = gsap.timeline({ repeat: -1, delay });
    tl.fromTo(
      mesh.scale,
      { x: 1, y: 1, z: 1 },
      { x: 1.2, y: 1.2, z: 1.2, duration: 2.2, ease: "power2.out" }
    );
    tl.fromTo(mat, { opacity: 0.45 }, { opacity: 0, duration: 2.2, ease: "power2.out" }, 0);
    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} renderOrder={9}>
      <ringGeometry args={[0.32, 0.36, 48]} />
      <meshBasicMaterial
        color={BRAND.cyan}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export function LogoPulses({ count = 3 }: { count?: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <group position={[0, 0, LOGO_Z - 0.12]} renderOrder={9}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.34, 0.38, 48]} />
          <meshBasicMaterial
            color={BRAND.cyan}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      </group>
    );
  }

  return (
    <group position={[0, 0, LOGO_Z - 0.12]} renderOrder={9}>
      {Array.from({ length: count }, (_, i) => (
        <LogoPulseRing key={i} delay={i * 0.6} />
      ))}
    </group>
  );
}
