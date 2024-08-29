import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
// import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";
import React from "react";
import Cyl from "./Cyl";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-36 left-0 right-0 z-10 w-full h-fit bg-black bg-opacity-0 ">
        <h1 className="text-4xl bg-opacity-0 bg-black font-bold tracking-tight text-gray-100 sm:text-6xl text-center">
          WELCOME TO FundDonate.
        </h1>
      </div>
      {/* <div className="bg-black w-full min-h-screen"> */}
      <Canvas
        flat
        camera={{ fov: 75 }}
        className="bg-black w-full"
        style={{ height: "800px" }}
      >
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={60.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      {/* </div> */}
      <div className="absolute -bottom-10 w-full h-fit bg-black bg-opacity-0 flex-col items-center justify-center">
        <p className="text-white text-center text-lg">
          Explore our website to learn more about our projects, make a donation,
          or get involved. Your contribution plays a vital role in bringing
          positive change to the lives of those in need.
        </p>
        <button
          onClick={() => {
            navigate("/About");
          }}
          className="text-sm font-semibold leading-6 text-gray-100 w-full"
        >
          Learn more <span aria-hidden="true">→</span>
        </button>
      </div>
    </>
  );
}

export default Main;
