/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#5ca5a5",
      white: "#ffffff",
      "gray-dark": "#b7c4c4",
      gray: "#2b3939",
      "gray-light": "#7c8f8f",
      "dark-white": "#ebf0f0",
      black: "#000000",
    },
    extend: {
      // boxShadow: {
      //   custom: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      // },
    },
  },
  plugins: [],
};
