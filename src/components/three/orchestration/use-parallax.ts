"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const MAX_OFFSET = 0.15;

export function useParallax(
  enabled: boolean,
  containerRef: React.RefObject<HTMLElement | null>
) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      target.current.x = nx * MAX_OFFSET;
      target.current.y = -ny * MAX_OFFSET * 0.6;
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, containerRef]);

  const applyParallax = () => {
    current.current.x += (target.current.x - current.current.x) * 0.06;
    current.current.y += (target.current.y - current.current.y) * 0.06;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x;
      groupRef.current.rotation.x = current.current.y;
    }
  };

  return { groupRef, applyParallax };
}
