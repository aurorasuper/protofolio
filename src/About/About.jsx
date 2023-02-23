import React, { useState, useEffect } from "react";
import selfie from "../utils/images/BalaclavaSelfie.jpeg";
import { useRefContext } from "../context/RefsContext";

const About = () => {
  const { aboutRef } = useRefContext();

  const getDays = () => {
    const birthdate = new Date("December 18 1996");
    const today = Date.now();
    let livedDays = today - birthdate;
    livedDays = Math.floor(livedDays / (1000 * 60 * 60 * 24)) + 1; // including today
    return livedDays;
  };

  return (
    <div className='min-h-[100vh]' id='aboutPage' ref={aboutRef}>
      <h2 className=' h2 px-01 py-02'>Who am I?</h2>
      <div
        id='aboutIntro'
        className='flex flex-col px-01 gap-01 md:flex-row md:justify-between'
      >
        {/*  <img
              src={selfie}
              alt="Selfie wearing a homemade balaclava"
              className="w-2/3 md:w-1/2 md:h-1/2 lg:w-1/3"
            /> */}
        {/* <iframe src="https://editor.p5js.org/susskronberg/full/YceOddlri" className="w-2/3 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-full" ></iframe> */}
        <div className='md:w-1/2'>
          <p className='pt-04 pb-02 md:py-04 par'>
            My name is Susan Kronberg, but I'm usually called Suss. I'm a 4th
            year MSc student in Interaction Technology and Design based in Umeå,
            Sweden, and I'm a design thinking fullstack engineer. I'm
            well-versed in different creative processes; from concept
            development and ideation to problem solving implementation. My
            passion is the intersection between code and art.
          </p>
          <p className='par'>
            My communication skills, creativity, and human centered approach to
            tech awarded me the title of Female Digital engineer 2023 by a jury
            constituting of CoGig and their partner companies.
          </p>
        </div>
      </div>
      <h3 className='px-01 pt-06  h3 pb-02'>My tool box includes:</h3>
      <div
        id='skillsSection'
        className='relative flex flex-col md:flex-row  hover:pause hover:cursor-auto gap-04'
      >
        <div className=' bg-primaryLight dark:bg-primaryDark invertColors font-pd h5 rounded-sm px-02 py-03 flex-1 skillsCard'>
          <h4 className='invertColors h4'>Frontend</h4>
          <span> HTML5 ✻</span>
          <span> CSS ✻</span>
          <span> Tailwind CSS ✻ </span>
          <span> JavaScript ✻</span>
          <span> React.js ✻ </span>
          <span> P5.js ✻</span>
          <span> React Native Expo ✻</span>
        </div>
        <div className=' bg-primaryLight dark:bg-primaryDark invertColors font-pd h5 rounded-sm px-02 py-03 flex-1 skillsCard'>
          <h4 className='invertColors h4'>Backend</h4>
          <span> ASP.NET MVC ✻ </span>
          <span> REST API ✻</span>
          <span> MSSQL ✻</span>
          <span> Firebase ✻</span>
          <span> Node.js ✻</span>
          <span> Java ✻ </span>
          <span> C ✻</span>
          <span> Python ✻</span>
        </div>
        <div className=' bg-primaryLight dark:bg-primaryDark invertColors font-pd h5 rounded-sm px-02 py-03 flex-1 skillsCard'>
          <h4 className='invertColors h4'>Other</h4>
          <span> Figma ✻</span>
          <span> Pen and paper ✻</span>
          <span> Blender ✻</span>
          <span> 3DS MAX ✻ </span>
          <span> Protégé ✻</span>
        </div>
      </div>

      <div id='statsContainer' className='px-01 py-06 flex flex-col gap-01 '>
        <h3 className='h3'>Some stats</h3>
        <table className='text-lg font-pd'>
          <tbody>
            <tr>
              <td className=' font-semibold py-01'>Days on earth</td>
              <td className='text-right'>{getDays()}</td>
            </tr>
            <tr>
              <td className=' font-semibold py-01'>Countries lived in</td>

              <td className='text-right  underline decoration-dotted cursor-help  group relative'>
                2
                <p className='text-center absolute bottom-2 right-full scale-0 group-hover:scale-100 rounded text-xs dark:bg-lightDark p-02 transition-all w-[70vw] md:text-base md:w-96  shadow-xl  dark:shadow-midDark'>
                  Born in Nicaragua, lived in Sweden since I was 6 y.o.
                </p>{" "}
              </td>
            </tr>
            <tr>
              <td className=' font-semibold'>Natural languages spoken</td>

              <td className='text-right underline decoration-dotted cursor-help group relative'>
                3{" "}
                <p className='text-center absolute -bottom-2 right-full scale-0 group-hover:scale-100 rounded text-xs dark:bg-lightDark p-02 transition-all w-[70vw] md:text-base md:w-96  shadow-xl  dark:shadow-midDark'>
                  Swedish, English, and Spanish. In order of profficiency.
                </p>{" "}
              </td>
            </tr>
            <tr>
              <td className=' font-semibold'>Height in chihuahuas</td>

              <td className='text-right  underline decoration-dotted group relative cursor-help w-fit py-01'>
                8{" "}
                <p className='text-center absolute bottom-2 right-full scale-0 group-hover:scale-100 rounded text-xs dark:bg-lightDark p-02 transition-all w-[70vw] md:text-base md:w-96  shadow-xl  dark:shadow-midDark'>
                  A chihuahua is on average 20cm tall.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
