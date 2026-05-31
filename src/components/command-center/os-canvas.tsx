"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const OsScene = dynamic(() => import("./os-scene").then((m) => m.OsScene), {
  ssr: false,
  loading: () => null,
});

export function OsCanvas({
  frameloop = "always",
}: {
  frameloop?: "always" | "demand" | "never";
}) {
  return (
    <Canvas
      className="!absolute inset-0 h-full w-full"
      camera={{ position: [0, 0.3, 5.5], fov: 42 }}
      dpr={[1, 1.25]}
      frameloop={frameloop}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <OsScene />
      </Suspense>
    </Canvas>
  );
}
