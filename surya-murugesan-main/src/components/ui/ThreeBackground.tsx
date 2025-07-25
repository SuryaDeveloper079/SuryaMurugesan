import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.3, 0.7, 0.4 + Math.random() * 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

function BinaryStreams() {
  const streamRef1 = useRef<THREE.Mesh>(null);
  const streamRef2 = useRef<THREE.Mesh>(null);
  const streamRef3 = useRef<THREE.Mesh>(null);
  const streamRef4 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Binary stream effects with digital movement
    [streamRef1, streamRef2, streamRef3, streamRef4].forEach((ref, index) => {
      if (ref.current) {
        ref.current.position.y = ((time * (2 + index * 0.5)) % 15) - 7.5;
        ref.current.rotation.z = Math.sin(time * 3 + index) * 0.1;
        ref.current.scale.y = 1 + Math.sin(time * 8 + index * 2) * 0.3;
        (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 4 + index) * 0.3;
      }
    });
  });

  return (
    <>
      <mesh ref={streamRef1} position={[-6, -7.5, -6]}>
        <planeGeometry args={[0.1, 12]} />
        <meshBasicMaterial color="#00ff41" transparent />
      </mesh>
      <mesh ref={streamRef2} position={[6, -7.5, -5]}>
        <planeGeometry args={[0.08, 10]} />
        <meshBasicMaterial color="#0080ff" transparent />
      </mesh>
      <mesh ref={streamRef3} position={[-4, -7.5, -7]}>
        <planeGeometry args={[0.06, 8]} />
        <meshBasicMaterial color="#ff4080" transparent />
      </mesh>
      <mesh ref={streamRef4} position={[4.5, -7.5, -4]}>
        <planeGeometry args={[0.12, 14]} />
        <meshBasicMaterial color="#80ff00" transparent />
      </mesh>
    </>
  );
}

function NetworkNodes() {
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const connectionRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useMemo(() => [
    { pos: [2, 3, -5], id: 0 },
    { pos: [-3, 2, -4], id: 1 },
    { pos: [1, -1, -6], id: 2 },
    { pos: [-2, -2, -3], id: 3 },
    { pos: [4, 0, -5], id: 4 },
    { pos: [-1, 3, -7], id: 5 }
  ], []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    nodeRefs.current.forEach((node, index) => {
      if (node) {
        node.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.3);
        node.rotation.x = time * 0.5 + index;
        node.rotation.y = time * 0.3 + index * 0.5;
        (node.material as THREE.MeshPhongMaterial).emissive.setHSL((time * 0.1 + index * 0.2) % 1, 0.8, 0.2);
      }
    });

    connectionRefs.current.forEach((connection, index) => {
      if (connection) {
        (connection.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(time * 2 + index) * 0.2;
        connection.rotation.z = Math.sin(time + index) * 0.1;
      }
    });
  });

  return (
    <>
      {nodes.map((node, index) => (
        <mesh 
          key={`node-${index}`}
          ref={(el) => { nodeRefs.current[index] = el; }}
          position={node.pos as [number, number, number]}
        >
          <icosahedronGeometry args={[0.15]} />
          <meshPhongMaterial 
            color="#00ccff" 
            transparent 
            opacity={0.8}
            emissive="#004466"
            wireframe={true}
          />
        </mesh>
      ))}
      
      {/* Network connections */}
      <mesh ref={(el) => { connectionRefs.current[0] = el; }} position={[-0.5, 2.5, -4.5]}>
        <cylinderGeometry args={[0.01, 0.01, 5.4, 6]} />
        <meshBasicMaterial color="#00ffaa" transparent />
      </mesh>
      <mesh ref={(el) => { connectionRefs.current[1] = el; }} position={[1.5, 0.5, -5]}>
        <cylinderGeometry args={[0.008, 0.008, 3.6, 6]} />
        <meshBasicMaterial color="#ff6600" transparent />
      </mesh>
      <mesh ref={(el) => { connectionRefs.current[2] = el; }} position={[-0.5, 0, -4.5]}>
        <cylinderGeometry args={[0.012, 0.012, 4.1, 6]} />
        <meshBasicMaterial color="#6600ff" transparent />
      </mesh>
    </>
  );
}

function CircuitPatterns() {
  const circuitRef1 = useRef<THREE.Mesh>(null);
  const circuitRef2 = useRef<THREE.Mesh>(null);
  const circuitRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (circuitRef1.current) {
      circuitRef1.current.rotation.z = time * 0.1;
      (circuitRef1.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(time * 2) * 0.2;
      circuitRef1.current.position.y = Math.sin(time * 0.8) * 0.5;
    }
    
    if (circuitRef2.current) {
      circuitRef2.current.rotation.z = -time * 0.15;
      (circuitRef2.current.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.cos(time * 2.5) * 0.15;
      circuitRef2.current.position.x = Math.cos(time * 0.6) * 0.3 - 3;
    }
    
    if (circuitRef3.current) {
      circuitRef3.current.rotation.z = time * 0.08;
      (circuitRef3.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 1.5) * 0.3;
      circuitRef3.current.position.x = Math.sin(time * 0.7) * 0.4 + 3;
    }
  });

  return (
    <>
      <mesh ref={circuitRef1} position={[0, 0, -8]}>
        <torusGeometry args={[3, 0.02, 8, 64]} />
        <meshBasicMaterial color="#00ff88" transparent wireframe={true} />
      </mesh>
      
      <mesh ref={circuitRef2} position={[-3, 1, -9]}>
        <torusGeometry args={[2, 0.015, 6, 48]} />
        <meshBasicMaterial color="#ff4400" transparent wireframe={true} />
      </mesh>
      
      <mesh ref={circuitRef3} position={[3, -1, -7]}>
        <torusGeometry args={[1.5, 0.01, 4, 32]} />
        <meshBasicMaterial color="#4400ff" transparent wireframe={true} />
      </mesh>
    </>
  );
}

function HolographicDisplays() {
  const holoRef1 = useRef<THREE.Mesh>(null);
  const holoRef2 = useRef<THREE.Mesh>(null);
  const holoRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (holoRef1.current) {
      holoRef1.current.rotation.y = time * 0.4;
      holoRef1.current.position.y = 2 + Math.sin(time * 2) * 0.3;
      holoRef1.current.scale.setScalar(1 + Math.sin(time * 5) * 0.1);
      (holoRef1.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 3) * 0.2;
    }
    
    if (holoRef2.current) {
      holoRef2.current.rotation.x = time * 0.3;
      holoRef2.current.rotation.y = time * 0.6;
      holoRef2.current.position.y = -1 + Math.cos(time * 1.8) * 0.4;
      (holoRef2.current.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.cos(time * 4) * 0.3;
    }
    
    if (holoRef3.current) {
      holoRef3.current.rotation.z = time * 0.5;
      holoRef3.current.position.x = Math.sin(time * 1.2) * 1.5 + 4;
      holoRef3.current.position.y = Math.cos(time * 1.5) * 0.8;
      holoRef3.current.scale.setScalar(0.8 + Math.sin(time * 6) * 0.3);
    }
  });

  return (
    <>
      <mesh ref={holoRef1} position={[-4, 2, -3]}>
        <planeGeometry args={[1.5, 1]} />
        <meshBasicMaterial 
          color="#00aaff" 
          transparent 
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
      
      <mesh ref={holoRef2} position={[2, -1, -4]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshBasicMaterial 
          color="#aa00ff" 
          transparent 
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
      
      <mesh ref={holoRef3} position={[4, 0, -2]}>
        <planeGeometry args={[1, 1.2]} />
        <meshBasicMaterial 
          color="#ffaa00" 
          transparent 
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
    </>
  );
}

function TechParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(150 * 3);
    const colors = new Float32Array(150 * 3);

    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const color = new THREE.Color();
      color.setHSL(0.1 + Math.random() * 0.8, 0.8, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.x = time * 0.05;
      particlesRef.current.rotation.y = time * 0.08;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < 150; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.001;
        positions[i * 3] += Math.cos(time + i * 0.05) * 0.0005;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCodeCubes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 30;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: 0.1 + Math.random() * 0.3
    }));
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    particles.forEach((particle, index) => {
      // Update positions with floating movement
      particle.position[0] += particle.velocity[0] + Math.sin(time + index) * 0.001;
      particle.position[1] += particle.velocity[1] + Math.cos(time + index * 0.5) * 0.001;
      particle.position[2] += particle.velocity[2];
      
      // Wrap around edges
      if (particle.position[0] > 10) particle.position[0] = -10;
      if (particle.position[0] < -10) particle.position[0] = 10;
      if (particle.position[1] > 10) particle.position[1] = -10;
      if (particle.position[1] < -10) particle.position[1] = 10;
      if (particle.position[2] > 5) particle.position[2] = -15;
      
      // Update rotation for tech effect
      particle.rotation[0] += 0.01;
      particle.rotation[1] += 0.005;
      particle.rotation[2] += 0.008;
      
      // Apply transformations
      dummy.position.set(particle.position[0], particle.position[1], particle.position[2]);
      dummy.rotation.set(particle.rotation[0], particle.rotation[1], particle.rotation[2]);
      dummy.scale.setScalar(particle.scale * (1 + Math.sin(time * 3 + index) * 0.3));
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(index, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshPhongMaterial 
        color="#00ff00" 
        transparent 
        opacity={0.6}
        wireframe={true}
      />
    </instancedMesh>
  );
}

function TechGeometry() {
  const techRef1 = useRef<THREE.Mesh>(null);
  const techRef2 = useRef<THREE.Mesh>(null);
  const techRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (techRef1.current) {
      techRef1.current.rotation.x = time * 0.7;
      techRef1.current.rotation.y = time * 0.3;
      techRef1.current.position.y = Math.sin(time * 2) * 0.5 + 1;
      techRef1.current.scale.setScalar(1 + Math.sin(time * 5) * 0.2);
    }
    
    if (techRef2.current) {
      techRef2.current.rotation.z = time * 1.2;
      techRef2.current.position.x = Math.cos(time * 1.8) * 1.5 - 4;
      techRef2.current.position.y = Math.sin(time * 2.5) * 0.8;
      const glitch = Math.random() > 0.95 ? 1.5 : 1;
      techRef2.current.scale.setScalar(glitch);
    }
    
    if (techRef3.current) {
      techRef3.current.rotation.x = time * 0.4;
      techRef3.current.rotation.y = time * 0.6;
      techRef3.current.position.y = Math.cos(time * 3) * 1.2 - 2;
      techRef3.current.position.z = Math.sin(time * 1.5) * 0.5 - 2;
    }
  });

  return (
    <>
      <mesh ref={techRef1} position={[-1, 1, -3]}>
        <octahedronGeometry args={[0.6]} />
        <meshPhongMaterial 
          color="#ff6600" 
          transparent 
          opacity={0.8}
          wireframe={true}
          emissive="#221100"
        />
      </mesh>
      
      <mesh ref={techRef2} position={[-4, 0, -1]}>
        <tetrahedronGeometry args={[0.5]} />
        <meshPhongMaterial 
          color="#0066ff" 
          transparent 
          opacity={0.7}
          emissive="#001122"
        />
      </mesh>
      
      <mesh ref={techRef3} position={[2, -2, -2]}>
        <icosahedronGeometry args={[0.4]} />
        <meshPhongMaterial 
          color="#ff0066" 
          transparent 
          opacity={0.9}
          wireframe={true}
          emissive="#220011"
        />
      </mesh>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00ffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#ff4080" />
        <pointLight position={[0, 5, -5]} intensity={0.4} color="#40ff80" />
        
        <Stars />
        <BinaryStreams />
        <NetworkNodes />
        <CircuitPatterns />
        <HolographicDisplays />
        <TechParticleField />
        <FloatingCodeCubes />
        <TechGeometry />
      </Canvas>
    </div>
  );
}