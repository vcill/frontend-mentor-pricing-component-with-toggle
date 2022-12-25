/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        veryLightGrayishBlue: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)",
        primaryStart: "hsl(236, 72%, 79%)",
        primaryEnd: "hsl(237, 63%, 64%)",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        backgroundTop: "url('./images/bg-top.svg')",
        backgroundBottom: "url('./images/bg-bottom.svg')",
      },
    },
  },
  plugins: [],
};
