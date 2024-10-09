'use client'

import { useLayoutEffect, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, useGLTF } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";
function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<Group<Object3DEventMap>>(null!)
  useFrame((state, delta) => group.current && (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
  return (
    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      {/* Sides */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
    </>
  )
}
const Soldier = ({ ...props }) => {
  const { scene, nodes, materials } = useGLTF('/gltf/Soldier.glb')
  useLayoutEffect(() => {
    console.log(nodes, materials)
  }, [materials])
  return (
    <mesh  >
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <primitive object={scene} {...props} />
      <Environment frames={1} resolution={256} background={false} blur={1}>
        <Lightformers />
      </Environment>
    </mesh >
  )
}
const SoldierCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} className="w-full h-full">
      <OrbitControls />
      <ambientLight intensity={1} />

      <Soldier scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
    </Canvas>
  )
};

export default SoldierCanvas;