/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5156A6',
        accent: '#747AE7',
        pastel: '#CCCFF9'
      },
    },
  },
  plugins: [],
}
