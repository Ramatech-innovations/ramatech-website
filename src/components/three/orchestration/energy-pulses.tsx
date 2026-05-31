"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { BRAND } from "./nodes";

/** Pulses expand outward from behind the hub — never over the logo plane */
function PulseRing({ delay }: { delay: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const mat = mesh.material as THREE.MeshBasicMaterial;
    mesh.scale.set(1, 1, 1);
    mat.opacity = 0.4;
    const tl = gsap.timeline({ repeat: -1, delay });
    tl.fromTo(
      mesh.scale,
      { x: 1, y: 1, z: 1 },
      { x: 2.8, y: 2.8, z: 2.8, duration: 2.6, ease: "power2.out" }
    );
    tl.fromTo(mat, { opacity: 0.4 }, { opacity: 0, duration: 2.6, ease: "power2.out" }, 0);
    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, -0.28]} renderOrder={0}>
      <ringGeometry args={[0.72, 0.76, 48]} />
      <meshBasicMaterial
        color={BRAND.cyan}
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export function EnergyPulses({ count }: { count: number }) {
  return (
    <group renderOrder={0}>
      {Array.from({ length: count }, (_, i) => (
        <PulseRing key={i} delay={i * 0.8} />
      ))}
    </group>
  );
}
