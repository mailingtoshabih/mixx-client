/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Poppins"],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
