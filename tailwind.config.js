/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pirata: "'Pirata One', cursive",
        pd: "'Playfair Display', serif",
      },
      colors: {
        primaryLight: "#ff3333",
        darkRed: "#DA0202",
        darkestRed: "#AB0000",
        primaryDark: "#99FFFF",
        cyanBg: "#7acccc",
        lightCyan: "#d5fffb",
        mainBlack: "#151414",
        mainWhite: "#FFFFFF",
        darkCyan: "#1eb3a6",
        darkestCyan: "#0D4D47",
        darkValid: "#7FC561",
        darkInvalid: "#CC2349",
        midDark: "#1b1a1a",
        lightDark: "#1e1d1d",
        darkWhite: "#cccccc",
      },
      spacing: {
        "00": "1px",
        "01": "0.5rem",
        "02": "1rem",
        "03": "2rem",
        "04": "3rem",
        "05": "4rem",
        "06": "6rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        quarterTurn: "slanted 10s linear",
        wiggle: "wiggle 200ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
