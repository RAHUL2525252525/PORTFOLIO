import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const mouse = { x: 0, y: 0 };

/* Moves the whole scene with the mouse */
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
    if (!g) return;
    g.rotation.y += (mouse.x * 0.6 - g.rotation.y) * 0.05;
    g.rotation.x += (mouse.y * 0.4 - g.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

/* Thin rotating ring */
function Ring({ radius, tilt, speed, color, thickness = 0.03 }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0.3, 0]}>
      <torusGeometry args={[radius, thickness, 16, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

/* Crystal that orbits around the photo */
function Orbiter({ radius, speed, size, offset, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime * speed + offset;
    m.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.3) * 1.3,
      Math.sin(t) * radius
    );
    m.rotation.x = t;
    m.rotation.y = t * 0.7;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

/* Morphing floating blob */
function Blob({ position, size, color, distort = 0.5, speed = 2.2 }) {
  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={2.4}>
      <mesh position={position}>
        <icosahedronGeometry args={[size, 8]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

/* Slowly spinning wireframe sphere */
function WireSphere({ radius, color }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.15;
    ref.current.rotation.x += dt * 0.08;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.28} />
    </mesh>
  );
}

/* Floating dust particles */
function Particles({ count = 140 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82c4"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  );
}

export default function HeroScene() {
  /* The reduced-motion check was removed so the scene always shows. */
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[4, 5, 5]} intensity={2.2} />
        <pointLight position={[-4, -2, 3]} intensity={30} color="#78b7e8" />
        <pointLight position={[4, 3, 2]} intensity={20} color="#3b82c4" />

        <Rig>
          {/* Big blobs */}
          <Blob position={[2.8, 1.8, -0.5]} size={1.0} color="#3b82c4" />
          <Blob position={[-3, -1.7, 0]} size={0.75} color="#071a33" distort={0.6} />
          <Blob position={[-2.4, 2.2, -1]} size={0.45} color="#78b7e8" speed={3} />
          <Blob position={[2.6, -2.2, 0.3]} size={0.4} color="#16395f" speed={2.8} />

          {/* Wireframe sphere behind the photo */}
          <WireSphere radius={3} color="#3b82c4" />

          {/* Rings */}
          <Ring radius={2.9} tilt={1.2} speed={0.25} color="#071a33" />
          <Ring radius={3.5} tilt={0.5} speed={-0.18} color="#3b82c4" />
          <Ring radius={4.1} tilt={1.0} speed={0.12} color="#78b7e8" thickness={0.02} />

          {/* Orbiting crystals */}
          <Orbiter radius={3.1} speed={0.6} size={0.28} offset={0} color="#071a33" />
          <Orbiter radius={3.6} speed={0.45} size={0.22} offset={2} color="#3b82c4" />
          <Orbiter radius={2.8} speed={0.8} size={0.18} offset={4} color="#78b7e8" />
          <Orbiter radius={3.9} speed={0.35} size={0.2} offset={5.5} color="#16395f" />

          <Particles />
        </Rig>
      </Canvas>
    </div>
  );
}
