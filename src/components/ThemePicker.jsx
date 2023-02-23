import React from "react";
import { useTheme } from "../context/ThemeContext";
import { WiHorizonAlt, WiNightAltSnow } from "react-icons/wi";

function ThemePicker() {
  const { theme, toggleTheme } = useTheme();

  const toggle = () => {
    toggleTheme();
  };

  return (
    <div className=' bg-none flex justify-center items-center w-fit'>
      {theme === "light" ? (
        <WiHorizonAlt
          id='sun'
          onClick={toggle}
          className='bg-none text-primaryLight text-4xl xl:text-6xl hover:text-darkestRed hover:cursor-pointer transition-colors'
        />
      ) : (
        <WiNightAltSnow
          id='moon'
          onClick={toggle}
          className='bg-none text-primaryDark text-4xl xl:text-6xl hover:text-lightCyan hover:cursor-pointer transition-colors'
        ></WiNightAltSnow>
      )}
    </div>
  );
}

export default ThemePicker;
