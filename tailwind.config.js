/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js","./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ['Vazir'],
    },
    },
  },
  plugins: [],
}

