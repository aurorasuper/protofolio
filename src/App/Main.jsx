import Hero from "../Home/Hero";
import AJInfo from "../Works/AJInfo";
import PPInfo from "../Works/PPInfo";
import BoombizInfo from "../Works/BoombizInfo";
import { useState, useEffect, useRef } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { useRefContext } from "../context/RefsContext";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Main = () => {
  const ease = Power3.easeOut();
  const {
    worksRef,
    AJinfoRef,
    promepicInfoRef,
    boombizInfoRef,
    heroRef,
    navRef,
    aboutRef,
    AJPageRef,
  } = useRefContext();

  return (
    <div
      id='smooth-wrapper'
      className='  flex flex-col gap-06 smooth-wrapper  '
    >
      <div className='smooth-content px-02 flex flex-col gap-06 snap-y'>
        <Hero />
        <div className='h-fit'>
          <AJInfo ref={AJinfoRef} />
          <BoombizInfo />
          <PPInfo />
        </div>
        <About />
      </div>
      <Contact />
    </div>
  );
};

export default Main;
