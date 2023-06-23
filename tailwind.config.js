/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 0 15px rgba(0, 0, 0, 0.2)',
      },
      borderWidth: {
        'thin': '0.5px'
      }
    },
  },
  plugins: [],
}
