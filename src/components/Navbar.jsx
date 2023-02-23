import React, { useState } from "react";
import FlourishMenu from "./FlourishMenu";
import FlourishClose from "./FlourishClose";
import FlourishDecor from "./FlourishDecor";
import { useRefContext } from "../context/RefsContext";
import { gsap, Power3 } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ThemePicker from "./ThemePicker";

gsap.registerPlugin(ScrollToPlugin);
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { heroRef, aboutRef, contactRef, worksRef, navRef, AJinfoRef } =
    useRefContext();
  const closeMenu = () => {
    setShowMenu(false);
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  const handleClick = (ref) => {
    console.log(ref);
    // get top position of element
    let refPos = ref.current.getBoundingClientRect().top;
    // height of navbar
    let navPos = navRef.current.getBoundingClientRect().height;
    // offset scroll tp just below navbar
    var offsetPos = refPos + window.scrollY - navPos;
    console.log(offsetPos);
    gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: ref.current, offsetY: navPos },
    });
    /*     window.scrollTo({
      top: offsetPos,
      left: 0,
      behavior: "smooth",
    }); */
    closeMenu();
  };

  return (
    <div
      ref={navRef}
      className='px-01 md:px-02 z-50 py-00 md:py-01 sticky top-0 w-full flex justify-between items-center h-04 md:h-06 backdrop-blur-sm transition ease-in '
    >
      <h1
        className=' text-3xl md:text-5xl w-full '
        onClick={() => {
          handleClick(heroRef);
        }}
      >
        Susan Kronberg
      </h1>
      <ul id='largeMenu' className='hidden md:flex gap-02'>
        <li
          className='font-pirata text-xl p-01 group flex flex-col items-center'
          onClick={() => {
            handleClick(AJinfoRef);
          }}
        >
          Work
          <FlourishDecor />
        </li>
        <li
          className='font-pirata text-xl p-01 group flex flex-col items-center'
          onClick={() => {
            handleClick(aboutRef);
          }}
        >
          About <FlourishDecor />
        </li>
        <li
          className='font-pirata text-xl p-01 group flex flex-col items-center'
          onClick={() => {
            handleClick(contactRef);
          }}
        >
          Contact <FlourishDecor />
        </li>
        <li>
          <ThemePicker />
        </li>
      </ul>
      <div>
        <FlourishMenu onClickFunc={openMenu} />
      </div>

      <div
        id='sideMenu'
        className={
          showMenu
            ? "  bg-mainWhite dark:bg-mainBlack fixed left-0 top-0 w-screen h-screen ease-in-out duration-500 flex items-center justify-center"
            : "flex items-center justify-center bg-mainWhite dark:bg-mainBlack fixed w-screen h-screen  top-0  ease-in-out duration-500 left-[-100%] "
        }
      >
        <ul className=' uppercase flex flex-col justify-center items-center gap-02 '>
          <h1
            className=' text-3xl md:text-5xl capitalize border-b border-primaryLight dark:border-primaryDark w-[50vw] text-center'
            onClick={() => {
              handleClick(heroRef);
            }}
          >
            Susan Kronberg
          </h1>
          <li
            className='font-pirata text-xl p-01 border-b border-primaryLight dark:border-primaryDark w-[50vw] text-center'
            onClick={() => {
              handleClick(AJinfoRef);
            }}
          >
            Work
          </li>
          <li
            className='font-pirata text-xl p-01 border-b border-primaryLight dark:border-primaryDark w-[50vw] text-center'
            onClick={() => {
              handleClick(aboutRef);
            }}
          >
            About
          </li>
          <li
            className='font-pirata text-xl p-01 border-b border-primaryLight dark:border-primaryDark w-[50vw] text-center'
            onClick={() => {
              handleClick(contactRef);
            }}
          >
            Contact
          </li>
          <li>
            <ThemePicker />
          </li>
          <li className='pt-04'>
            <FlourishClose onClickFunc={closeMenu} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
