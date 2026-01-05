'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Octahedron, Torus, Environment } from '@react-three/drei'
import * as THREE from 'three'

const CoreScene = () => {
    const ringRef = useRef()
    const innerRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (ringRef.current) {
            ringRef.current.rotation.z = t * 0.1
            ringRef.current.rotation.x = t * 0.05
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.2
        }
    })

    return (
        <group>
            {/* Ambient Lighting for base visibility */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />

            {/* Central Intelligence Core */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
                <Octahedron ref={innerRef} args={[1, 0]}>
                    <MeshDistortMaterial
                        color="#3b82f6"
                        speed={2}
                        distort={0.4}
                        roughness={0.1}
                        metalness={1}
                        emissive="#1d4ed8"
                        emissiveIntensity={0.5}
                    />
                </Octahedron>
            </Float>

            {/* Secure Data Perimeter Rings */}
            <group ref={ringRef}>
                <Torus args={[2.5, 0.01, 16, 100]}>
                    <meshStandardMaterial color="#60a5fa" transparent opacity={0.2} wireframe />
                </Torus>
                <Torus args={[2.8, 0.005, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#93c5fd" transparent opacity={0.1} wireframe />
                </Torus>
            </group>

            {/* Small Floating Nodes */}
            {[...Array(8)].map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[
                    Math.sin(i * (Math.PI * 2 / 8)) * 4,
                    Math.cos(i * (Math.PI * 2 / 8)) * 4,
                    Math.sin(i * 2) * 2
                ]}>
                    <Sphere args={[0.04, 16, 16]}>
                        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1} />
                    </Sphere>
                </Float>
            ))}
        </group>
    )
}

const DigitalCore = () => {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <CoreScene />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}

export default DigitalCore
