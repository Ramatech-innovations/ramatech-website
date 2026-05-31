"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { BRAND, LOGO_Z } from "./nodes";

export function ControlCore() {
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
      logoLight.current.intensity = 0.9 + Math.sin(t * 2) * 0.35;
    }
    if (depthLight.current) {
      depthLight.current.intensity = 0.25 + Math.sin(t * 1.6 + 0.5) * 0.12;
    }
  });

  return (
    <group ref={ref}>
      <group position={[0, 0, -0.22]} renderOrder={1}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
          <circleGeometry args={[0.88, 64]} />
          <meshBasicMaterial
            color={BRAND.deepBlue}
            transparent
            opacity={0.18}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.012, 16, 80]} />
          <meshBasicMaterial
            color={BRAND.cyan}
            transparent
            opacity={0.22}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[0.62, 0.014, 16, 64]} />
          <meshBasicMaterial
            color={BRAND.cyan}
            transparent
            opacity={0.28}
            depthWrite={false}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.32, 1]} />
          <meshBasicMaterial
            color={BRAND.deepBlue}
            wireframe
            transparent
            opacity={0.14}
            depthWrite={false}
          />
        </mesh>
      </group>

      <group position={[0, 0, LOGO_Z - 0.1]} renderOrder={8}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.42, 48]} />
          <meshBasicMaterial
            color={BRAND.cyan}
            transparent
            opacity={0.2}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.58, 48]} />
          <meshBasicMaterial
            color={BRAND.cyan}
            transparent
            opacity={0.08}
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
            />
          </mesh>
        </group>
      </Billboard>

      <pointLight
        ref={logoLight}
        position={[0, 0.2, LOGO_Z + 0.4]}
        intensity={1.2}
        color={BRAND.cyan}
        distance={3}
      />
      <pointLight
        ref={depthLight}
        position={[0, 0, 0.2]}
        intensity={0.35}
        color={BRAND.accentBlue}
        distance={2.8}
      />
      <pointLight position={[0, -0.4, 0]} intensity={0.35} color={BRAND.deepBlue} distance={2.5} />
    </group>
  );
}
