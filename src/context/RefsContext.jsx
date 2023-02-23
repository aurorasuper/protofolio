import React from "react";
import { useContext, useRef, useEffect } from "react";

const RefsContext = React.createContext();

export const useRefContext = () => {
  return useContext(RefsContext);
};

export const RefsProvider = ({ children }) => {
  const heroRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const navRef = useRef(null);
  const promepicInfoRef = useRef(null);
  const boombizInfoRef = useRef(null);
  const AJinfoRef = useRef(null);
  const AJPageRef = useRef(null);
  const value = {
    heroRef,
    worksRef,
    aboutRef,
    contactRef,
    navRef,
    promepicInfoRef,
    boombizInfoRef,
    AJinfoRef,
    AJPageRef,
  };

  return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>;
};
