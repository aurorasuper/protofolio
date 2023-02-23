import Navbar from "../components/Navbar";
import "../css/App.css";
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
import { useSmoothScroll } from "../components/SmoothScroll";
import ActivityJournal from "../Works/ActivityJournal";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Main from "./Main";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [load, setLoad] = useState(true);
  const didAnimate = useRef(false);
  const ease = Power3.easeOut();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const height = windowSize.current[1];
  const width = windowSize.current[0];
  const [showAJ, setShowAj] = useState(false);
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

  useSmoothScroll();

  useEffect(() => {
    setLoad(false);
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Main />} />
        <Route path='activityJournal' element={<ActivityJournal />} />
      </Route>
    )
  );

  /**
   * Sets scroll animations to hero page
   * @param {*} mm - mediaquery gsap objects
   * @param {*} breakPoint - media breakpoint
   */
  const heroScrollAnimation = (mm, breakPoint) => {
    let ref = heroRef.current;
    let prallaxRef = ref.querySelector("#heroParallaxSection");
    let titleRef = ref.querySelector("#heroTitle");
    let subtitleRef = ref.querySelector("#heroSubtitle");
    let stickerRef = ref.querySelector("#heroSmileySticker");

    let refs = [prallaxRef];
    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile, reduceMotion } = context.conditions;
        ScrollTrigger.create({
          trigger: prallaxRef,
          start: isMobile ? "top-=100 top" : "top top+=200", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "center+=80 top",
          toggleActions: "play none none reset",
          markers: true,
          pin: true,
        });
      }
    );
  };

  /**
   * Set animation timeline for info cards
   * @param {*} section - infocard to set
   */
  const setTl = (section, tl) => {
    //get specific element references
    let titleRef = section.querySelector(".title");
    let subTitleRef = section.querySelector(".subtitle");
    let imgRef = section.querySelector(".infoImage");
    let parRef = section.querySelector(".par");
    let btnRef = section.querySelector(".infoBtn");

    // set timelines for each element
    tl.from([titleRef, subTitleRef], 1, {
      opacity: 0,
      y: "100",
      stagger: {
        amount: 0.4,
      },
      ease: ease,
    });

    tl.from(parRef, 1, {
      x: width,
      ease: ease,
    });

    tl.from(
      imgRef,
      1.3,
      {
        y: height,
        ease: ease,
        opacity: 0,
      },
      "-=1"
    ).from(
      imgRef,
      1.3,
      {
        scale: 1.6,
        ease: ease,
      },
      "-=1"
    );

    tl.from(
      btnRef,
      1.4,
      {
        y: 0,
        scale: 0,
        ease: ease,
      },
      "-=1.3"
    );
  };

  /**
   * Sets work info cards scroll settings
   * @param {*} mm - mediaquery gsap objects
   * @param {*} breakPoint - media breakpoint
   * @param {*} navHeight - navbar height
   */
  const workInfoScrollSettings = (mm, breakPoint, navHeight) => {
    // info cards scroll trigger settings start

    const workCards = [
      AJinfoRef.current,
      boombizInfoRef.current,
      promepicInfoRef.current,
    ];
    // add a media query. When it matches, the associated function will run

    workCards.forEach((card, index) => {
      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          // this setup code only runs when viewport is at least 800px wide
          let tl = new gsap.timeline();
          setTl(card, tl);
          // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
          let { isDesktop, isMobile, reduceMotion } = context.conditions;
          ScrollTrigger.create({
            trigger: card,
            start: isMobile ? "top top+=" + navHeight : "center center", // position of trigger meets the scroller position
            toggleActions: "restart reverse restart reverse",
            animation: tl,
            pin: card,
            snap: 0.1,
            scrub: 1,
          });
        }
      );
    }); // info cards scroll trigger settings end
  };

  const aboutAnimationSettings = (mm, breakPoint, navHeight) => {
    let ref = aboutRef.current;
    let cards = ref.querySelectorAll(".skillsCard");
    //https://codepen.io/GreenSock/pen/dyGyopR/823312ec3785be7b25315ec2efd517d8
    // usage:
    ScrollTrigger.batch(cards, {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
      batchMax: 3, // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.5, overwrite: true }),
      onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.5, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      // you can also define things like start, end, etc.
    });

    let text = ref.querySelectorAll(".par");

    ScrollTrigger.batch(text, {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
      batchMax: 3, // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 1, overwrite: true }),
      onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 1, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      // you can also define things like start, end, etc.
    });
  };

  // when loading stopped, add scroll animations
  useEffect(() => {
    if (load) {
      return;
    }
    const navHeight = navRef.current.getBoundingClientRect().height;
    let mm = gsap.matchMedia();
    let breakPoint = 768;
    //hero scrolltrigger start
    heroScrollAnimation(mm, breakPoint);

    workInfoScrollSettings(mm, breakPoint, navHeight);
    aboutAnimationSettings(mm, breakPoint, navHeight);

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, [load]);

  return (
    <div>
      {load ? (
        <div className='bg-mainWhite dark:bg-mainBlack w-screen h-screen flex justify-center items-center'>
          <p>Loading</p>
        </div>
      ) : (
        <div className='relative  bg-mainWhite dark:bg-mainBlack'>
          <Navbar />
          <Main />
        </div>
      )}
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
