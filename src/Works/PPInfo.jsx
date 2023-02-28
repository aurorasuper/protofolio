import React from "react";
import { useRefContext } from "../context/RefsContext";
import promepic from "../utils/images/PromepicMap.png";
import { useRef } from "react";
import { ImGithub } from "react-icons/im";

const PPInfo = () => {
  const { promepicInfoRef } = useRefContext();
  let title = useRef(null);
  let subTitle = useRef(null);
  let parag = useRef(null);
  let btn = useRef(null);
  let image1 = useRef(null);

  return (
    <div
      id='promepicInfo'
      ref={promepicInfoRef}
      className='infoCard snap-start md:snap-center workCard w-full flex flex-col  min-h-screen md:justify-center items-center mb-[50vh] overflow-hidden'
    >
      <div className='w-full md:w-1/2 md:flex md:flex-col md:self-start '>
        <h2 className='h2 title capitalize ' ref={(el) => (title = el)}>
          Promepic
        </h2>
        <h3
          ref={(el) => (subTitle = el)}
          className='h3 subtitle font-pd uppercase '
        >
          UX / ui / app development
        </h3>
        <div className='relative md:absolute right-0 w-full md:w-1/2 md:max-h-1/3 flex justify-center items-center md:px-01 infoImage '>
          <img
            src={promepic}
            alt='Map interface in an app'
            className='object-cover rounded-lg lg:w-1/2'
          ></img>
        </div>
        <div className='pt-04 pb-02 md:py-04 par'>
          <p>
            Promepic is a concept for a mobile game with the aim of getting
            people aged 50+ to move more in their everyday life. It's a scavange
            hunt game where users are prompted to take pictures of things in
            their immediate environment. Through a process of prototype - test -
            evaluate, the emerging result was a proof of concept built in React
            Native expo.
          </p>
        </div>
        <div className='infoBtn  px-01 w-1/3'>
          <a
            className='btnBaseStyle  btnPrimary btnBaseText btnPrimaryText w-full px-02 z-10'
            href='https://github.com/aurorasuper/walkingGame'
            target='_blank'
            rel='noreferrer'
          >
            <ImGithub className='fill-mainWhite dark:fill-mainBlack' />
          </a>
        </div>
      </div>
      {/*       <div className='hidden md:visible w-full md:flex md:justify-center md:w-1/2 md:h-1/2 md:py-04'>
        <img
          src={promepic}
          alt='Map intterface in an app'
          className='object-cover rounded-lg md:max-h-[70vh]'
        ></img>
      </div> */}
    </div>
  );
};

export default PPInfo;
