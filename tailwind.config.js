/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Gotham: ["Gotham", "sans-serif"],
      Anton: ["Anton", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },

    screens: {
      desktop: "1730px",
      tablet: "1024px",
      mobile: "200px"
    },
    extend: {},
  },
  plugins: [],
}
