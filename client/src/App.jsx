/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { connect } from "react-redux";
import Planet from "./components/Planet";
import { fetchUser } from "./actions";
import { Stars } from "@react-three/drei";
import { planets } from "./components/planets";

const App = ({ user, fetchUser }) => {
  const externalLink = 'https://solar-system-plum-gamma.vercel.app/';

  const openExternalLink = () => {
    window.open(externalLink, '_blank');
  };
  useEffect(() => {
    fetchUser();
    openExternalLink()
  }, [fetchUser]);


  return (
    <div className="">
      
      <div className="flex flex-col ">
      {user ? (
        <a href={`/api/logout`} className="z-10 fixed right-0 py-2 px-10 m-5 bg-secondary bg-opacity-30 text-secondary rounded-2xl" >
          logout
        </a>
      ) : ""}
        {user ? (
          planets.map((planet) => (
            <div className="flex lg:flex-row sm:flex-col h-screen">
              <Canvas camera={{ position: [0, 0, 30], rotation: [0, 0, 0] }}>
                <pointLight
                  color={0xffffff}
                  position={[5, 5, 5]}
                  intensity={2.5}
                />
                <ambientLight color={0xffffff} intensity={1.6} />
                <Stars />
                <Planet key={planet.name} planet_name={planet.name} />
                <OrbitControls enableZoom={false} />
              </Canvas>
              <span className=" text-secondary flex flex-col items-center justify-center lg:w-[800px] lg:p-20 sm:p-10 bg-secondary bg-opacity-5">
                <h1 className="font-black lg:text-[40px] sm:text-[25px]">
                {planet.name}
                </h1>
                <p className=" lg:text-[16px] sm:text-[14px]">
                {planet.description}
                </p>
              </span>
            </div>
          ))
        ) : (
          <div className="h-screen">
          <Canvas camera={{ position: [0, 0, 30], rotation: [0, 0, 0] }}>
            <pointLight color={0xffffff} position={[5, 5, 5]} intensity={2.5} />
            <ambientLight color={0xffffff} intensity={1.6} />
            <Stars />
 
            <Planet planet_name={"Sun"} />
            <OrbitControls />
          </Canvas>
        </div>
        
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, { fetchUser })(App);
