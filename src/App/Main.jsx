import Hero from "../Home/Hero";
import AJInfo from "../Works/AJInfo";
import PPInfo from "../Works/PPInfo";
import BoombizInfo from "../Works/BoombizInfo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { useRefContext } from "../context/RefsContext";

const Main = () => {
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
      className='  flex flex-col gap-06 smooth-wrapper   transition-colors duration-500'
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
