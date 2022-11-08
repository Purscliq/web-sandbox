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
        blackPearl: "#111315",
        electricIndigo: "#5800FF",
        gray600: "#17191A",
        gray500: "#3C3D44",
        gray400: "#9ca3af",
        tableBg: "#26272E",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
