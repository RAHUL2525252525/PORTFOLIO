import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const mouse = { x: 0, y: 0 };

function Rig({ children }) {
  const group = useRef();

  useEffect(() => {
    const move = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    const g = group.current;
    g.rotation.y += (mouse.x * 0.5 - g.rotation.y) * 0.05;
    g.rotation.x += (mouse.y * 0.3 - g.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

function Ring({ radius, tilt, speed, color }) {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.z += dt * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0.3, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 160]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function Orbiter({ radius, speed, size, offset, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.3) * 1.1,
      Math.sin(t) * radius
    );
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 0.7;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.25} />
    </mesh>
  );
}

function Blob({ position, size, color }) {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[size, 6]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) return null;

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 5]} intensity={2} />
        <pointLight position={[-4, -2, 3]} intensity={25} color="#78b7e8" />

        <Rig>
          <Blob position={[2.6, 1.7, -0.5]} size={0.8} color="#3b82c4" />
          <Blob position={[-2.7, -1.6, 0]} size={0.55} color="#071a33" />
          <Ring radius={2.7} tilt={1.2} speed={0.25} color="#071a33" />
          <Ring radius={3.2} tilt={0.5} speed={-0.18} color="#3b82c4" />
          <Orbiter radius={3} speed={0.6} size={0.2} offset={0} color="#071a33" />
          <Orbiter radius={3.4} speed={0.45} size={0.15} offset={2} color="#3b82c4" />
          <Orbiter radius={2.6} speed={0.8} size={0.12} offset={4} color="#78b7e8" />
        </Rig>
      </Canvas>
    </div>
  );
}
