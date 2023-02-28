import React, { forwardRef } from "react";
import boombizPic from "../utils/images/BoombizAnnonser.png";
import { useRefContext } from "../context/RefsContext";
import { ImGithub } from "react-icons/im";

const BoombizInfo = () => {
  const { boombizInfoRef } = useRefContext();
  return (
    <div
      id='boombizInfo'
      ref={boombizInfoRef}
      className='infoCard snap-start md:snap-center workCard flex flex-col  w-full min-h-screen md:justify-center items-center overflow-hidden'
    >
      <div className='w-full md:w-1/2 md:flex md:flex-col md:self-end '>
        <h2 className='h2 title capitalize '>Boombiz</h2>
        <h3 className='h3 subtitle font-pd uppercase '> UX / UI / FRONTEND</h3>
        <div className='relative md:absolute left-0 w-full md:w-1/2  flex justify-center items-center md:px-01 infoImage'>
          <img
            src={boombizPic}
            alt='An interface for an ads service'
            className='object-cover rounded-lg '
          ></img>
        </div>
        <div className='pt-04 pb-02 md:py-04 par'>
          <p>
            Boombiz is a concept for a platform where users easily can offer and
            inquire for services. It is especially aimed for retirees who want
            to contribute to their community and fill their lives with
            meaningdul activities. This project included concept development, UI
            design, and front-end development in React with Firebase as BaaS and
            database.
          </p>
        </div>
        <div className='infoBtn'>
          <a
            className='btnBaseStyle  btnPrimary btnBaseText btnPrimaryText w-fit px-02 z-10'
            href='https://github.com/Linus-BL/age-tech'
            target='_blank'
            rel='noreferrer'
          >
            <ImGithub className='fill-mainWhite dark:fill-mainBlack' />
          </a>
        </div>
      </div>
      {/*       <div className='hidden md:visible w-full md:flex md:justify-center md:w-1/2 md:h-1/2 md:py-04'>
        <img
          src={boombizPic}
          alt='An interface for an ads service'
          className='object-cover rounded-lg md:max-h-[70vh]'
        ></img>
      </div> */}
    </div>
  );
};

export default BoombizInfo;
