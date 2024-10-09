'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        {/* Camera controls */}
        <OrbitControls enableZoom={false} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        {/* Example Mesh */}
        <mesh
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={isHovered ? 'hotpink' : 'orange'} />
        </mesh>
      </Canvas>
    </div>
  );
}
