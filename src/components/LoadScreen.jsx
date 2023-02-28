import React, { useEffect, useRef } from "react";
import { ReactComponent as SK } from "../utils/images/SK1.svg";
import useWindowDimensions from "./WindowDimensions";
import Sketch from "react-p5";
import { ReactComponent as Path } from "../utils/images/8path.svg";
import { gsap, Power3 } from "gsap";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);

export const LoadScreen = () => {
  const pathRef = useRef(null);
  const imgRef = useRef(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    console.log(pathRef.current.querySelector("path"));
    let path = pathRef.current.querySelector("path");
    gsap.to(imgRef.current, {
      duration: 2.5,
      repeat: 12,
      repeatDelay: 0,
      yoyo: false,
      motionPath: {
        path: path,
        align: path,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);
  return (
    <div className='w-screen h-screen'>
      {/* <canvas
      ref={canvasRef}
      className='canvasContainer w-screen h-screen'
    ></canvas> */}
      <Path width='100%' height='100%' ref={pathRef} />
      <SK width='50%' ref={imgRef} />
    </div>
  );
};
