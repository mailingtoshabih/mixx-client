/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Figtree', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
