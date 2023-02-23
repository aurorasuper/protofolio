import React from "react";
import activityJournal from "../utils/images/activityJournalV1.png";
import register from "../utils/images/Register.png";
import { ImGithub } from "react-icons/im";
import Paragraph from "../components/Paragraph";
import { useRefContext } from "../context/RefsContext";
import { useNavigate } from "react-router";

const ActivityJournal = ({ showAj, setShowAj }) => {
  const { AJPageRef } = useRefContext();
  const navigate = useNavigate();

  return (
    <div ref={AJPageRef} className='flex flex-col justify-center mt-[15vh]'>
      <div className='flex flex-col'>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <p>Back</p>
        </div>
        <h1 className='h2'>Activity Journal</h1>
        <h2 className='h3 font-pd uppercase'>Fullstack development</h2>
        <div className='w-[80vw] self-center'>
          <img
            src={activityJournal}
            alt='An interface for an ads service'
            className='object-cover rounded-lg '
          />
        </div>
      </div>

      <Paragraph title='Context'>
        <p>
          Developed as Lab 1 out of 3 in the course Application Development for
          Internet. The brief was to implement a web app with frontend and
          backend using restful API.
        </p>
      </Paragraph>
      <Paragraph title='Solution'>
        <p>
          Activity journal is a system that allows users to track their
          activities and habits. Habit and activity tracking is a tool commonly
          used in healthcare but often the patient is given a physical paper to
          fill in which can be cumbersome. The user can fill in activities,
          their start and end times, how difficult they found the activity to do
          and how they felt after the activity was done.
        </p>
      </Paragraph>

      <Paragraph title='Role'>
        <p>Fully designed and implemented by me.</p>
      </Paragraph>

      <Paragraph title='Technologies'>
        <div>
          <table className='table-auto border-separate border-spacing-2 w-full font-pd'>
            <tbody>
              <tr className='pb-04'>
                <td className='font-bold'>Database</td>
                <td>MSSQL</td>
              </tr>
              <tr className='align-top pb-04'>
                <td className='font-bold'>Backend tools</td>
                <td>
                  ASP.NET Core 6 MVC <br></br>
                  JWT Authentcation tokens <br></br>
                  Salt encryption of user passwords <p></p>
                  Entity framework <br />
                  REST API <br />
                  Swagger <br />
                </td>
              </tr>
              <tr className='align-top pb-04'>
                <td className='font-bold'>Frontend tools</td>
                <td>
                  React.js <br />
                  Tailwind CSS <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paragraph>
      <div className='w-[80vw] self-center'>
        <img
          src={register}
          alt='An interface for an ads service'
          className='object-cover rounded-lg '
        />
      </div>

      <div className='grid grid-cols-3 gap-02 col-span-3 py-04 px-04'>
        <div className='btnBaseStyle btnPrimary btnBaseText btnPrimaryText col-span-2'>
          Contact me
        </div>
        <div className='btnBaseStyle btnTertiary'>
          <ImGithub className='fill-primaryLight dark:fill-primaryDark' />
        </div>
      </div>
    </div>
  );
};

export default ActivityJournal;
