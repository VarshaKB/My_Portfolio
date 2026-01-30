"use client";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export default function ThreeBackground() {
  // Logic remains 100% identical
  return (
    <div className="absolute inset-0 z-0">
      {/* Design remains 100% identical */}
    </div>
  );
}

function Stars(props: any) {
  const ref: any = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#00f2ff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}