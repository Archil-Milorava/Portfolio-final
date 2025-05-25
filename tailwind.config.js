/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bla: ["bla", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        PlayfairDisplay: ["PlayfairDisplay", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        white: "#ffff",
        dark: "#1C1B19",
        beige: "#F5F5ED",
        yellow: "#FFEA9E",
        orange: "#FF8863",
        silver: "#9BBBDC",
        purple: "#959EFF",
        gold: "#EDDED6",
      },
    },
  },
  plugins: [],
};
