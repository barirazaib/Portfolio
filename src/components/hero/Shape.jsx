

import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"    

const Shape = () => {
  const sphereRef = useRef()

  // Animate rotation, subtle floating, and gentle scaling
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Smooth Floating
    sphereRef.current.position.y = Math.sin(t) * 0.15

    // Slow Rotation
    sphereRef.current.rotation.y = t * 0.2

    // Gentle Breathing Effect
    const scaleFactor = 1.6 + Math.sin(t) * 0.05
    sphereRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
  })

  return (
    <>
      {/* Subtle Floating White Sphere */}
      <Sphere args={[1, 100, 200]} scale={1.6} ref={sphereRef}>
        <MeshDistortMaterial
          distort={0.3} /* Less distortion for a smooth look */
          speed={1} /* Slower wave speed */
          roughness={0.15}
          metalness={0.4}
          transparent
          opacity={0.8} /* Slight transparency for a soft blend */
          color={"#FFFFFF"} /* Pure White */
          emissive={"#DDDDDD"} /* Soft White Glow */
          emissiveIntensity={0.2}
          toneMapped={false}
        />
      </Sphere>

      {/* Softer Lighting for a More Natural Look */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 2, 4]} intensity={1.2} color="#EEEEEE" />
      <pointLight position={[-3, -2, -4]} intensity={0.8} color="#FFFFFF" />
    </>
  )
}

export default Shape
