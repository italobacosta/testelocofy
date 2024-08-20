/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moccasin: "#ffe7bb",
        black: "#000",
        white: "#fff",
        lightsteelblue: "#cacde0",
        gray: "#232323",
        red: "#ff0707",
        gainsboro: "#d9d9d9",
        springgreen: "#41ff6b",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "71xl": "90px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "23xl": "2.625rem",
      "6xl": "1.563rem",
      "15xl": "2.125rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      "71xl": "5.625rem",
      "31xl": "3.125rem",
      "21xl": "2.5rem",
      "36xl": "3.438rem",
      "14xl": "2.063rem",
      "25xl": "2.75rem",
      "4xl": "1.438rem",
      "16xl": "2.188rem",
      "2xl": "1.313rem",
      "9xl": "1.75rem",
      xl: "1.25rem",
      "8xl": "1.688rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      base: "1rem",
      "181xl": "12.5rem",
      "61xl": "5rem",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
