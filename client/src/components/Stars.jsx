import * as THREE from "three";
import  { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Stars = () => {
    const [stars, setStars] = useState(Array(200).fill(0));
  
    return (
      <>
        {stars.map((_, index) => (
          <Star key={index} />
        ))}
      </>
    );
  };
  
  const Star = () => {
    const starRef = useRef();
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    useFrame(() => {
      starRef.current.rotation.x += 0.01;
      starRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={starRef} position={[x, y, z]}>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
    );
  };
  