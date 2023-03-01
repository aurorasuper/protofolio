import React, { useState } from "react";
import { forwardRef, useEffect } from "react";
import { useRefContext } from "../context/RefsContext";

const Hero = () => {
  const { heroRef, navRef } = useRefContext();
  const [navHeight, setNavHeight] = useState(0);

  return (
    <div
      ref={heroRef}
      id='heroPage'
      className='min-h-[calc(100vh-2rem)] w-full relative  flex flex-col justify-between top-0 '
    >
      <div id='heroParallaxSection' className='flex flex-col gap-02 '>
        <h1 id='heroTitle' className='h1'>
          Hola, I'm Susan Kronberg!
        </h1>
        <a
          href='https://news.cision.com/se/cogig-ab/r/cogig-announces-this-year-s-female-digital-engineer,c3716169'
          target='_blank'
          className='p-01 max-w-fit before:min-h-fit before:bg-primaryLight dark:before:bg-primaryDark hover:before:shadow-xl hover:before:shadow-darkestRed hover:dark:before:shadow-darkestCyan items-center realistic-marker-highlight'
        >
          <span id='heroSubtitle' className='h2 font-pd invertColors '>
            Female digital engineer of 2023
          </span>
        </a>
        <p className='text-2xl font-pd py-02'>
          I'm in my 4th year in the MSc in Interaction Technology and Design
          program at Umeå University, specilizing in software engineering and
          HCI/Human-AI interaction.{" "}
        </p>
        <svg
          xmlns='//www.w3.org/2000/svg'
          version='1.1'
          className='svg-filters hidden'
        >
          <defs>
            <filter id='marker-shape'>
              <feTurbulence
                type='fractalNoise'
                baseFrequency='0 0.15'
                numOctaves='1'
                result='warp'
              />
              <feDisplacementMap
                xChannelSelector='R'
                yChannelSelector='G'
                scale='30'
                in='SourceGraphic'
                in2='warp'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div
        id='heroSmileySticker'
        className='w-full flex justify-center md:p-0 m-0 h-[30vh] absolute -bottom-[15vh] md:-bottom-12'
      >
        <svg
          id='myWork'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='sticker fill-primaryLight dark:fill-primaryDark transition-colors duration-300 py-02 
		  '
        >
          <g transform='translate(50,50)'>
            <defs>
              <path
                id='text-path'
                d='M -40,0
                     A 40,40 0,0,1 40,0
                     A -40,-40, 0,0,1 -40,0
                     z'
              />
            </defs>

            <g transform='translate(50,50)'>
              <animateTransform
                attributeName='transform'
                attributeType='XML'
                type='rotate'
                from='0 0 0'
                to='359 0 0'
                dur='20s'
                repeatCount='indefinite'
              />
              <circle cx='0' cy='0' r='50' />
              <ellipse
                cx='-10'
                cy='-15'
                rx='2'
                ry='5'
                z-index='2'
                className='fill-mainWhite dark:fill-mainBlack transition-colors duration-300'
              />
              <ellipse
                cx='10'
                cy='-15'
                rx='2'
                ry='5'
                className='fill-mainWhite dark:fill-mainBlack transition-colors duration-300'
                z-index='2'
              />
              <path
                fill='none'
                className='stroke-mainWhite dark:stroke-mainBlack transition-colors duration-300'
                d='M -25,3 A 10,10 1,0,0 25,3'
              />
              <text fontSize='0.5em'>
                <textPath
                  href='#text-path'
                  side='right'
                  method='stretch'
                  textLength='250%'
                  className='font-pirata fill-mainWhite dark:fill-mainBlack transition-colors duration-300'
                >
                  My work * My Work * My work * My work *{" "}
                </textPath>
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
