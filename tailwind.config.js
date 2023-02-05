/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        primaryBg: '#000',
      }
    },
  },
  plugins: [],
}