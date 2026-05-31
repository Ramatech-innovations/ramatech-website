"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BRAND } from "./nodes";

export function Globe({ segments = 32 }: { segments?: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={ref} position={[0, 0, -0.6]} renderOrder={0}>
      <mesh>
        <icosahedronGeometry args={[2.1, segments >= 24 ? 2 : 1]} />
        <meshBasicMaterial
          color={BRAND.deepBlue}
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.05, segments, segments]} />
        <meshBasicMaterial
          color={BRAND.cyan}
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
      <points>
        <sphereGeometry args={[2.08, segments, segments]} />
        <pointsMaterial
          color={BRAND.cyan}
          size={0.025}
          transparent
          opacity={0.45}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
