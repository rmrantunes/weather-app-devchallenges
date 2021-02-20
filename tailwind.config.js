module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#1E213A",
        secondary: "#6E707A",
        tertiary: "#3C47E9",
        darkest: "#100E1D",
        "light-gray": "#E7E7EB",
        "medium-gray": "#A09FB1",
        "progress-yelow": "#FFEC65",
      },
      spacing: {
        112: "28rem",
      },
      gridTemplateRows: {
        highlights: "60fr 40fr",
      },
      rotate: {
        135: "135deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
