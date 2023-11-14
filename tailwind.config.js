/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8BAC3E",
        green2: "#F0FEEB",
        blue2: "#E6F3F5",
        purple2: "#EAEEFA",
        red2: "#F9EEF3",
        lime2: "#F3F7D9",
        light1: "#757575",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        button: "0px 8px 32px 0px",
      },
    },
  },
  plugins: [],
};
