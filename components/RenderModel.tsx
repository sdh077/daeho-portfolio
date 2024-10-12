"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <Canvas
      className={clsx(" -z-10 relative", className)}
      shadows={false}
      camera={{ position: [5, 0, 15], fov: 30 }}
    >
      <OrbitControls />
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;