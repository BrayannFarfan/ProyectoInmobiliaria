/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", ".src/components/Home/Home.{jsx}"],
  theme: {
    screens: {
      sm: "480px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#191e47",
      purple: "#5661b7",
      white: "#ffffff",
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
