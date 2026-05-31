"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { LOGO_Z } from "./nodes";
import { useOrchestrationPalette } from "./orchestration-palette-context";

export function ControlCore() {
  const palette = useOrchestrationPalette();
  const logo = useTexture("/brand/logo-mark.png");
  const ref = useRef<THREE.Group>(null);
  const logoLight = useRef<THREE.PointLight>(null);
  const depthLight = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    const t = state.clock.elapsedTime;
    if (logoLight.current) {
      logoLight.current.intensity =
        palette.logoLight.intensity + Math.sin(t * 2) * palette.logoLight.pulse;
    }
    if (depthLight.current) {
      depthLight.current.intensity = 0.25 + Math.sin(t * 1.6 + 0.5) * 0.12;
    }
  });

  const haloInner = palette.labelsOnLight ? 0.14 : 0.2;
  const haloOuter = palette.labelsOnLight ? 0.05 : 0.08;
  const logoOpacity = palette.labelsOnLight ? 0.88 : 1;

  return (
    <group ref={ref}>
      <group position={[0, 0, -0.22]} renderOrder={1}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
          <circleGeometry args={[0.88, 64]} />
          <meshBasicMaterial
            color={palette.deepBlue}
            transparent
            opacity={palette.hubGlow.platformOpacity}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.012, 16, 80]} />
          <meshBasicMaterial
            color={palette.cyan}
            transparent
            opacity={palette.hubGlow.ringOpacity}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[0.62, 0.014, 16, 64]} />
          <meshBasicMaterial
            color={palette.cyan}
            transparent
            opacity={palette.hubGlow.innerRingOpacity}
            depthWrite={false}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.32, 1]} />
          <meshBasicMaterial
            color={palette.deepBlue}
            wireframe
            transparent
            opacity={palette.labelsOnLight ? 0.1 : 0.14}
            depthWrite={false}
          />
        </mesh>
      </group>

      <group position={[0, 0, LOGO_Z - 0.1]} renderOrder={8}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.42, 48]} />
          <meshBasicMaterial
            color={palette.cyan}
            transparent
            opacity={haloInner}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.58, 48]} />
          <meshBasicMaterial
            color={palette.cyan}
            transparent
            opacity={haloOuter}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <Billboard follow lockX lockY position={[0, 0, LOGO_Z]}>
        <group renderOrder={12}>
          <mesh renderOrder={12}>
            <planeGeometry args={[0.72, 0.72]} />
            <meshBasicMaterial
              map={logo}
              transparent
              toneMapped={false}
              depthTest={true}
              depthWrite={true}
              alphaTest={0.06}
              opacity={logoOpacity}
            />
          </mesh>
        </group>
      </Billboard>

      <pointLight
        ref={logoLight}
        position={[0, 0.2, LOGO_Z + 0.4]}
        intensity={palette.logoLight.intensity}
        color={palette.cyan}
        distance={3}
      />
      <pointLight
        ref={depthLight}
        position={[0, 0, 0.2]}
        intensity={palette.labelsOnLight ? 0.28 : 0.35}
        color={palette.accentBlue}
        distance={2.8}
      />
      <pointLight
        position={[0, -0.4, 0]}
        intensity={palette.labelsOnLight ? 0.28 : 0.35}
        color={palette.deepBlue}
        distance={2.5}
      />
    </group>
  );
}
