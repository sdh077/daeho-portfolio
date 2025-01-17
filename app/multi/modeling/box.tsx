'use client'
import { Canvas } from '@react-three/fiber'

export default function Box() {
  return (
    <div id="canvas-container">
      <Canvas >
        <mesh />
      </Canvas>
    </div>
  )
}

