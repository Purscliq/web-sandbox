/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        semiwhite: "#F9F9F9",
        secondary: "#5800FF",
        lightBlack: "#232323",
        black: "#000000",
        red: "#cd0303",
        deepred: "#cd0303d2",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
