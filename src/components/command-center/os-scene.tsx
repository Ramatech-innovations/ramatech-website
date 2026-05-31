"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BRAND } from "@/components/three/orchestration/nodes";

const PACKET_COUNT = 12;

function CoreGlow() {
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = 0.85 + Math.sin((t / 4) * Math.PI * 2) * 0.15;
    if (core.current) core.current.scale.setScalar(pulse);
    if (ring.current) {
      const ringPulse = 1 + Math.sin((t / 4) * Math.PI * 2) * 0.12;
      ring.current.scale.setScalar(ringPulse);
      const mat = ring.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.2 + Math.sin((t / 4) * Math.PI * 2) * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color={BRAND.cyan}
          transparent
          opacity={0.35}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.42, 0.48, 48]} />
        <meshBasicMaterial
          color={BRAND.cyan}
          transparent
          opacity={0.25}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <pointLight intensity={1.4} color={BRAND.cyan} distance={4} />
    </group>
  );
}

function OrbitParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 180;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 1.8;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={BRAND.cyan}
        size={0.035}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function DataPackets() {
  const group = useRef<THREE.Group>(null);
  const slots = useMemo(() => {
    return Array.from({ length: PACKET_COUNT }, (_, i) => ({
      angle: (i / PACKET_COUNT) * Math.PI * 2,
      speed: 0.15 + (i % 3) * 0.04,
      radius: 1.1 + (i % 4) * 0.25,
      phase: i * 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const s = slots[i];
      const a = s.angle + t * s.speed + s.phase;
      child.position.set(
        Math.cos(a) * s.radius,
        Math.sin(t * 0.6 + i) * 0.08,
        Math.sin(a) * s.radius
      );
    });
  });

  return (
    <group ref={group}>
      {slots.map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.05, 0.05, 0.1]} />
          <meshBasicMaterial color={BRAND.cyan} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function HubLines() {
  const lines = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
      const r = 2.2;
      pts.push(0, 0, 0, Math.cos(a) * r, Math.sin(a) * 0.2, Math.sin(a) * r);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, []);

  return (
    <lineSegments geometry={lines}>
      <lineBasicMaterial color={BRAND.cyan} transparent opacity={0.2} />
    </lineSegments>
  );
}

export function OsScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <fog attach="fog" args={[BRAND.bg, 3, 12]} />
      <OrbitParticles />
      <HubLines />
      <DataPackets />
      <CoreGlow />
    </>
  );
}
