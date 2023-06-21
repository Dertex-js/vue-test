/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        main: "#E5E5E5",
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/typography'),
  ],
}
