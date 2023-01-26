/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(63, 72, 204)',
        secondary: 'rgb(190, 220, 250)'
      }
    },
  },
  plugins: [],
}
