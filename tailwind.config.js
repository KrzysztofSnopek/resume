/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(63, 72, 204)",
        secondary: "rgb(190, 220, 250)",
        outro: "rgb(44, 44, 165)",
        navTop: "rgb(0 0 0 / 1)",
        navMid: "rgb(0 0 0 / 0.9)",
        navBot: "rgb(63 72 204 / 0.9)",
      },
      backgroundImage: {
        "contact-pattern": 'url("./Images/wave2.svg")',
        "home-pattern": 'url("./Images/reactQuery.svg")',
        "about-pattern": 'url("./Images/wave.svg")',
      },
      screens: {
        xsm: "200px",
      },
      spacing: {
        100: "100px",
      },
      fontFamily: {
        fredoka: [
          "'Fredoka One', cursive",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
        ],
      },
      dropShadow: {
        whiteShadow: "0 3px 2px rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
