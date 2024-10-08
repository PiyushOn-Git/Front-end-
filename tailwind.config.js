/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}
