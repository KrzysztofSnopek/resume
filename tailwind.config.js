/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(63, 72, 204)",
        secondary: "rgb(190, 220, 250)",
        outro: "rgb(44, 44, 165)",
      },
      backgroundImage: {
        "contact-pattern": 'url("./Images/wave2.svg")',
        "home-pattern": 'url("./Images/Home_Slide.png")',
      },
      screens: {
        xsm: "430px",
      },
    },
  },
  plugins: [],
};
