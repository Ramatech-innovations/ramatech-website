"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useOrchestrationPalette } from "./orchestration-palette-context";

export function Globe({ segments = 32 }: { segments?: number }) {
  const palette = useOrchestrationPalette();
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={ref} position={[0, 0, -0.6]} renderOrder={0}>
      <mesh>
        <icosahedronGeometry args={[2.1, segments >= 24 ? 2 : 1]} />
        <meshBasicMaterial
          color={palette.deepBlue}
          wireframe
          transparent
          opacity={palette.globe.wireOpacity}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.05, segments, segments]} />
        <meshBasicMaterial
          color={palette.accentBlue}
          wireframe
          transparent
          opacity={palette.globe.shellOpacity}
        />
      </mesh>
      <points>
        <sphereGeometry args={[2.08, segments, segments]} />
        <pointsMaterial
          color={palette.accentBlue}
          size={0.025}
          transparent
          opacity={palette.globe.pointsOpacity}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
