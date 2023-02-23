import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Bottle } from "../utils/images/Bottle.svg";
import { useRefContext } from "../context/RefsContext";
import { ImGithub, ImLinkedin } from "react-icons/im";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { contactRef } = useRefContext();
  const form = useRef(null);
  const publicApi = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [emailSuccess, setEmailSuccess] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  /*   const [errorMessage, setErrorMessage] = useState({
        name: "What's your name?",
        email: "Hmmm, this doesn't look like an email address..",
        message: "Please don't send an empty message :( ",
      }); */

  const labelClassname =
    "font-pd h4 font-normal font text-colorSettings  text-mainWhite dark:text-mainBlack pt-03";
  const formGroup = "flex flex-col py-01 gap-01 ";
  const inputBox =
    "p-01 peer rounded placeholder:text-primaryLight placeholder:opacity-50 dark:placeholder:text-mainBlack font-pd focus:outline-none focus:shadow-lg focus:shadow-darkestRed dark:focus:shadow-darkCyan ";

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setEmailSuccess(true);
          console.log(result);
        },
        (error) => {
          setEmailError(true);
          console.log(error);
        }
      );
  }

  function handleChange(event) {
    let attribute = event.target.name;
    let value = event.target.value;
    setFormdata({ ...formData, [attribute]: value });
  }
  return (
    <div
      id='contactPage'
      ref={contactRef}
      className='px-02 snap-center min-h-screen h-fit bg-primaryLight dark:bg-cyanBg '
    >
      {emailSuccess ? (
        <div className='w-full flex flex-col justify-center items-center'>
          {" "}
          <h2 className='h2 invertColors'>Thank you for your message!</h2>
          <p className='invertColors '>
            I will get back to you as soon as possible.
          </p>
          <p className='invertColors pb-04 text-center'>
            In the mean time, checkout my github or connect with me on Linkedin
            if you haven't already!
          </p>
          <Bottle
            className='fill-mainWhite dark:fill-mainBlack
                '
          />
        </div>
      ) : (
        <div className=' pt-06 flex flex-col justify-center lg:flex lg:flex-row lg:justify-evenly lg:items-center transition-colors duration-300 relative'>
          <div className='hidden lg:visible lg:flex flex-col lg:justify-center lg:items-center lg:w-1/3 lg:landscape:visible  py-01'>
            <Bottle
              className='fill-mainWhite dark:fill-mainBlack
                '
            />
            <div className='flex flex-row gap-03 justify-evenly py-06 w-full'>
              <a href='https://github.com/sukr0009' target='_blank'>
                <ImGithub className=' fill-mainWhite dark:fill-mainBlack w-03 h-03 hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-full' />
              </a>
              <a
                href='https://www.linkedin.com/in/susan-kronberg-b39a35229/'
                target='_blank'
              >
                <ImLinkedin
                  className=' fill-mainWhite dark:fill-mainBlack w-03 h-03
        hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg
        hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-sm'
                />
              </a>
            </div>
          </div>
          <div className='lg:w-1/3 '>
            <h1 className='text-mainWhite dark:text-mainBlack h2'>
              Get in touch!
            </h1>
            <form ref={form} onSubmit={handleSubmit} className='flex flex-col'>
              <label className={labelClassname}>Name</label>
              <input
                required
                className={inputBox}
                type='text'
                name='user_name'
                placeholder='Jane Doe'
              ></input>
              {/*                 <p className="p-0 m-0 peer-invalid:visible invisible text-sm text-mainBlack dark:text-darkestCyan">
                      {errorMessage.name}
                    </p> */}

              <label className={labelClassname}>Email</label>
              <input
                required
                className={inputBox}
                type='email'
                name='user_email'
                placeholder='jane@doe.com'
              ></input>
              {/*                 <p className="p-0 m-0 peer-invalid:visible invisible text-sm text-mainBlack dark:text-darkestCyan">
                      {errorMessage.email}
                    </p> */}

              <label className={labelClassname}>Your message</label>
              <textarea
                required
                rows='4'
                className={inputBox}
                placeholder='Hi! I think you seem really cool and I want to hire you!'
                name='message'
              ></textarea>
              {/*                <p className="p-0 m-0 peer-invalid:visible invisible text-sm text-mainBlack dark:text-darkestCyan">
                      {errorMessage.message}
                    </p> */}

              <input
                className='btnBaseStyle btnBaseText btnSecondary btnSecondaryText mt-04'
                type='submit'
                value='send'
              />
            </form>
          </div>
        </div>
      )}

      <div className='visible lg:hidden flex flex-row gap-03  justify-center pt-03 pb-04'>
        <a href='https://github.com/sukr0009' target='_blank'>
          <ImGithub className=' fill-mainWhite dark:fill-mainBlack w-03 h-03 hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-full' />
        </a>
        <a
          href='https://www.linkedin.com/in/susan-kronberg-b39a35229/'
          target='_blank'
        >
          <ImLinkedin
            className=' fill-mainWhite dark:fill-mainBlack w-03 h-03
        hover:cursor-pointer duration-300 hover:scale-110 hover:shadow-lg
        hover:shadow-darkestRed dark:hover:shadow-darkestCyan rounded-sm'
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

export default Contact;
