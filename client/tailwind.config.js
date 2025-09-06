/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0165fc",
        primaryRed: "#ef1919",
        mainbg: "#e9f1fc",
        white: "#ffffff",
        minblack: "1d1d1d",
        cardbgwhite: "#ffffff",
        cardbggray: "#ececec",
      },
      fontFamily: {
        main: "Montserrat",
        archivo: "Archivo Black",
        storyscript: "Story Script",
        bruno: "Bruno Ace",
        zen: "Zen Dots",
        audiowide: "Audio Wide",
        michroma: "Michroma",
      },
    },
  },
  plugins: [],
};
