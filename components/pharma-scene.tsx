'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sphere, Torus } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Molecule({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.18 })
  return <group ref={group} position={position} scale={scale}>
    <Sphere args={[0.2, 20, 20]}><meshStandardMaterial color="#b7e4ce" emissive="#315f4a" emissiveIntensity={0.35} /></Sphere>
    {[0, 1, 2].map((index) => { const angle = (index / 3) * Math.PI * 2; return <group key={index} rotation={[0.2, angle, 0.45]}><Torus args={[0.8, 0.025, 8, 32]}><meshStandardMaterial color="#7ab99d" transparent opacity={0.52} /></Torus><Sphere position={[0.8, 0, 0]} args={[0.12, 14, 14]}><meshStandardMaterial color="#e6b96a" emissive="#79572b" emissiveIntensity={0.25} /></Sphere></group> })}
  </group>
}

export function PharmaScene() {
  return <div className="pharma-scene" aria-hidden="true"><Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.2} /><pointLight position={[3, 4, 4]} intensity={4} color="#d5f3e0" /><pointLight position={[-4, -2, 2]} intensity={2} color="#e9bd72" /><Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.45}><Molecule position={[0, 0, 0]} scale={1.15} /></Float><Float speed={0.8} rotationIntensity={0.25} floatIntensity={0.65}><Molecule position={[-2.35, 0.85, -0.6]} scale={0.42} /></Float><Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}><Molecule position={[2.2, -1.05, -0.4]} scale={0.55} /></Float><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} /></Canvas></div>
}

export function DemoOverlay({ onDemo, onSkip }: { onDemo: () => void; onSkip: () => void }) {
  return <div className="demo-overlay" role="dialog" aria-modal="true" aria-labelledby="demo-title"><div className="demo-card"><div className="demo-kicker"><span className="demo-pulse" /> QUICK START / 01</div><h2 id="demo-title">Run your first field test</h2><p>See how ChemSure captures an image, checks the reference card, reads colour, and creates an auditable record.</p><div className="demo-actions"><button className="btn primary" onClick={onDemo}>Take the guided demo</button><button className="demo-skip" onClick={onSkip}>Skip for now</button></div><span className="demo-footnote">You can start a test anytime from the dashboard.</span></div></div>
}
