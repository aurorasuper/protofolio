import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { ReactComponent as P5 } from "../utils/images/P5.js_icon.svg";

const Footer = () => {
  return (
    <div>
      <div className=' flex flex-row gap-03  justify-evenly items-baseline pt-04 '>
        <a href='https://github.com/sukr0009' target='_blank' rel='noreferrer'>
          <ImGithub className=' fill-primaryLight dark:fill-primaryDark w-03 h-03 hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-full' />
        </a>
        <a
          href='https://www.linkedin.com/in/susan-kronberg-b39a35229/'
          target='_blank'
          rel='noreferrer'
        >
          <ImLinkedin
            className=' fill-primaryLight dark:fill-primaryDark w-03 h-03
        hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg
        hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-sm'
          />
        </a>
        <a
          href='https://editor.p5js.org/susskronberg/sketches'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <P5
            className=' text-primaryLight dark:text-primaryDark w-03 h-03
        hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg
        hover:shadow-pink-700 rounded-full'
          />
        </a>
      </div>
      <p
        className='text-center py-04 font-pirata
      '
      >
        Created by Susan Kronberg
      </p>
    </div>
  );
};

export default Footer;
