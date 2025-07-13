import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Environment, Html, ContactShadows } from '@react-three/drei';
import './Chatbot3D.css';

function Face() {
  return (
    <group>
      {/* Glowing Eyes */}
      <mesh position={[-0.25, 0.3, 1.1]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial emissive="cyan" emissiveIntensity={2} color="black" />
      </mesh>
      <mesh position={[0.25, 0.3, 1.1]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial emissive="cyan" emissiveIntensity={2} color="black" />
      </mesh>
      {/* Happy Smile */}
      <mesh position={[0, -0.1, 1.15]} rotation={[Math.PI, 0, 0]}>
        <torusGeometry args={[0.22, 0.04, 16, 100, Math.PI]} />
        <meshStandardMaterial emissive="cyan" emissiveIntensity={1.5} color="black" />
      </mesh>
    </group>
  );
}

function Avatar({ inputText }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.3;
      ref.current.position.y = Math.sin(t * 1.2) * 0.1;
      ref.current.scale.setScalar(0.6 + inputText.length * 0.003); // Slight growth on typing
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={9}>
      <mesh ref={ref} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0f0f0f"
          metalness={0.7}
          roughness={0.2}
          emissive="#222"
          emissiveIntensity={0.3}
        />
        <Face />
      </mesh>
    </Float>
  );
}

function Particle({ position }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y += Math.sin(clock.elapsedTime * 0.5 + position[0]) * 0.002;
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial emissive="#00ffff" emissiveIntensity={1.5} color="black" />
    </mesh>
  );
}

const Chatbot3D = ({ inputText = "", className="" }) => {
  const particles = Array.from({ length: 10 }, () => [
    (Math.random() - 0.5) * 6,
    Math.random() * 2 - 1,
    (Math.random() - 0.5) * 4,
  ]);

  return (
    <div className="chatbot-3d-container">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: '#0d0d0d' }}
        className={className}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00ffff" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          intensity={1}
          penumbra={1}
          castShadow
          color="#00ffff"
        />

        {/* Background effects */}
        <Environment preset="night" />
        <Stars radius={80} depth={40} count={3000} factor={4} fade />

        {/* Floating Particles */}
        {particles.map((pos, idx) => (
          <Particle key={idx} position={pos} />
        ))}

        {/* Avatar */}
        <Avatar inputText={inputText} />

        {/* Shadows */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={2}
        />

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  );
};

export default Chatbot3D;
