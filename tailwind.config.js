/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme") 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1500px',
      '2xl': '1800px',
      '3xl': '2000px',
    },
    extend: {
      fontFamily: {
        gothic: ['var(--font-gothic)', ...fontFamily.sans],
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
        ralewaybold: ['var(--font-raleway-bold)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}