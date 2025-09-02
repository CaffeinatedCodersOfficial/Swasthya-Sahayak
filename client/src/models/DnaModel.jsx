import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DNAModel() {
  const helix = [];
  const turns = 12; // number of twists
  const step = 0.4; // height per step
  const radius = 2; // radius of helix

  for (let i = 0; i < turns * 20; i++) {
    const angle = i * 0.3;
    const y = i * step * 0.1;

    helix.push(
      <mesh key={`left-${i}`} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );

    helix.push(
      <mesh key={`right-${i}`} position={[-Math.cos(angle) * radius, y, -Math.sin(angle) * radius]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );

    // connecting "base pairs"
    helix.push(
      <mesh key={`bond-${i}`} position={[0, y, 0]} rotation={[0, angle, 0]}>
        <cylinderGeometry args={[0.05, 0.05, radius * 2, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
    );
  }

  return <group>{helix}</group>;
}

export default function DNAViewer() {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <DNAModel />
      <OrbitControls />
    </Canvas>
  );
}
