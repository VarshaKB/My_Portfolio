// @ts-nocheck
"use client";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame, Canvas } from "@react-three/fiber";

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}