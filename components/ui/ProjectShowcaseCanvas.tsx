"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

interface ProjectShowcaseCanvasProps {
  themeColor: string;
}

function AbstractArchitecture({ themeColor }: { themeColor: string }) {
  const group = useRef<THREE.Group>(null);
  const color = useMemo(() => new THREE.Color(themeColor), [themeColor]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core architectural block */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 2, 1.5]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.01}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor={color}
            color="#ffffff"
          />
        </mesh>

        {/* Orbiting structure element */}
        <mesh position={[1.2, 0.5, 0.8]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.2, 2.5, 0.2]} />
          <meshStandardMaterial color={themeColor} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Floating accent ring */}
        <mesh position={[-0.5, -0.8, 1]} rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.2, 0.05, 16, 64]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ProjectShowcaseCanvas({ themeColor }: ProjectShowcaseCanvasProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={2} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, -5, -5]} color={themeColor} intensity={5} />
        <AbstractArchitecture themeColor={themeColor} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
