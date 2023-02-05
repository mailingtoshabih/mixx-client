/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Open Sans"],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
