/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pirveli: ["pirveli", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        // The system serif. This is what the site has always rendered here
        // (an old "PlayfairDisplay" name never matched a loaded font).
        serif: ["serif"],
      },
      colors: {
        white: "#ffff",
        dark: "#1C1B19",
        beige: "#F5F5ED",
        yellow: "#FFEA9E",
        orange: "#FF8863",
        silver: "#E8E8E8",
        purple: "#749396",
        gold: "#EDDED6",
      },
    },
  },
  plugins: [],
};
