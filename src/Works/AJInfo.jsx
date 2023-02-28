import React, { forwardRef } from "react";
import AJimage from "../utils/images/activityJournalV1.png";
import { useEffect } from "react";
import { useRefContext } from "../context/RefsContext";
import { ImGithub } from "react-icons/im";

const AJInfo = (props, ref) => {
  return (
    <div
      ref={ref}
      id='ActivityJournalInfo'
      className='infoCard bg-mainWhite dark:bg-mainBlack snap-start md:snap-center workCard flex flex-col md:w-full min-h-screen md:justify-center items-center overflow-hidden '
    >
      <div className='w-full md:w-1/2 md:flex md:flex-col md:self-start'>
        <h2 className='h2 title capitalize '>Activity journal</h2>
        <h3 className='h3 subtitle font-pd uppercase '>
          fullstack development
        </h3>
        <div className='relative md:absolute right-0 w-full md:w-1/2  flex justify-center items-center md:px-01 infoImage'>
          <img
            src={AJimage}
            alt='Calender type interface'
            className='object-cover rounded-lg'
          ></img>
        </div>
        <div className='pt-04 pb-02 md:py-04 par'>
          <p>
            Activity journal is a habit tracking tool built as a CRUD webapp
            that I created using:{" "}
          </p>
          <ul className='list-disc list-inside'>
            <li className='font-pd'> Relational database with MSSQL </li>
            <li className='font-pd'>
              {" "}
              Backend and custom api in .NET Core with Entity Framework
            </li>
            <li className='font-pd'> React.js in the frontend.</li>
          </ul>
          <p>
            {" "}
            It uses JWT token verification for authentication and authorization.
            Users can create an acocunt, log in and logg activities that they
            preform. The loggs are editable and deletable according to CRUD.
          </p>
        </div>
        <div className='infoBtn px-01 w-1/3'>
          <a
            className='btnBaseStyle btnPrimary btnBaseText btnPrimaryText w-full px-02 z-10'
            href='https://github.com/aurorasuper/ActivityAppBackend'
            target='_blank'
            rel='noreferrer'
          >
            <ImGithub className='fill-mainWhite dark:fill-mainBlack' />
          </a>
        </div>
      </div>
      {/*       <div className='hidden md:visible w-full md:flex md:justify-center md:w-1/2 md:h-1/2 md:py-04'>
        <img
          src={AJimage}
          alt='Calender type interface'
          className='object-cover rounded-lg '
        ></img>
      </div> */}
    </div>
  );
};

export default forwardRef(AJInfo);
