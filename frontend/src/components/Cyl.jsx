import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
function Cyl() {
  let tex = useTexture("./bg3.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.3, 0.4]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 300, 300, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Cyl;
