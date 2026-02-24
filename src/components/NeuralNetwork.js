import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function NeuralNode({ position, color = '#00ff88', ...props }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.1, 16, 16]} position={position} {...props}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </Sphere>
  )
}

function Connection({ start, end, color = '#00ff88' }) {
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end])
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  )
}

function NeuralNetworkScene() {
  const nodes = useMemo(() => [
    // Input layer
    [-2, 1, 0], [-2, 0, 0], [-2, -1, 0],
    // Hidden layer 1
    [-0.5, 1.5, 0], [-0.5, 0.5, 0], [-0.5, -0.5, 0], [-0.5, -1.5, 0],
    // Hidden layer 2
    [0.5, 1.2, 0], [0.5, 0.4, 0], [0.5, -0.4, 0], [0.5, -1.2, 0],
    // Output layer
    [2, 0.5, 0], [2, -0.5, 0]
  ], [])

  const connections = useMemo(() => [
    // Input to Hidden 1
    [0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6],
    // Hidden 1 to Hidden 2
    [3, 7], [3, 8], [3, 9], [4, 7], [4, 8], [4, 9], [4, 10], [5, 8], [5, 9], [5, 10], [6, 9], [6, 10],
    // Hidden 2 to Output
    [7, 11], [7, 12], [8, 11], [8, 12], [9, 11], [9, 12], [10, 11], [10, 12]
  ], [])

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      {/* Render connections */}
      {connections.map(([startIdx, endIdx], i) => (
        <Connection
          key={i}
          start={nodes[startIdx]}
          end={nodes[endIdx]}
          color={i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#0099cc' : '#00ffcc'}
        />
      ))}
      
      {/* Render nodes */}
      {nodes.map((position, i) => (
        <NeuralNode
          key={i}
          position={position}
          color={i < 3 ? '#00ffcc' : i < 7 ? '#0099cc' : i < 11 ? '#00d4ff' : '#0099cc'}
        />
      ))}
    </>
  )
}

export default function NeuralNetwork() {
  return (
    <div className="fixed inset-0 z-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <NeuralNetworkScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
