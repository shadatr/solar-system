import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { normal } from "../assets";
import { planets } from "./planets";
import { Html } from "@react-three/drei";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const Planet = ({ user, fetchUser, planet_name }) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const planet = planets.find((i) => i.name === planet_name);

  useFrame(() => {
    const mesh = planetRef.current as THREE.Mesh;
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.0025;
    mesh.rotation.z += 0.005;
  });

  const moonTexture = new TextureLoader().load(planet?.image);
  const normalTexture = new TextureLoader().load(normal);

  return (
    <mesh ref={planetRef} scale={[1.8, 1.8, 1.8]}>
      {!user && (
        <Html>
          <a
            href={`/auth/google`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-20%, -50%)",
              width: "300px",
            }}
          >
            <button className=" w-[300px] bg-opacity-40 p-2 rounded-2xl text-secondary" style={{
              padding: "0.4rem", 
              backgroundColor: "rgba(0, 0, 0, 0.30)",
            }}>
              Sign in with Google
            </button>
          </a>
        </Html>
      )}
      <sphereGeometry args={[8, 32, 32]} />
      <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
    </mesh>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, { fetchUser })(Planet);
