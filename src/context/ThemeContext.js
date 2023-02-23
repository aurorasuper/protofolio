import React from "react";
import { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const light = "light";
  const dark = "dark";

  // check user preference for darktheme
  let preferedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let initialTheme = "";
  // check local storage for theme
  if (!("theme" in localStorage)) {
    //no theme preference stored -> set system preference
    if (preferedDark) {
      initialTheme = dark;
      localStorage.setItem("theme", dark);
    } else {
      localStorage.setItem("theme", light);
      initialTheme = light;
    }
  } else {
    //theme found in storage -> set as initail theme
    initialTheme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(initialTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let preferedTheme = localStorage.getItem("theme");
    let isDark = document.documentElement.classList.contains(dark);

    // toggle darkmode on
    if (preferedTheme === dark && !isDark) {
      document.documentElement.classList.add(dark);
    }
    // toggle darkmode off
    if (preferedTheme === light && isDark) {
      document.documentElement.classList.remove(dark);
    }
    setLoading(false);
  }, [theme]);

  /*
  Function to toggle stored theme */
  function toggleTheme() {
    if (theme === light) {
      localStorage.setItem("theme", dark);
      setTheme(dark);
    }
    if (theme === dark) {
      localStorage.setItem("theme", light);
      setTheme(light);
    }
  }
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
