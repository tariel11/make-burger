/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        black_2: '#222222',
        white: '#fff',
        gray: '#aaaaaa',
        gray_f8: '#f8f8f8',
        red: '#dc0000',
        black_bg: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      backgroundImage: (theme) => ({
        application: "url('./img/home/app_bg.jpeg')",
        service: "url('./img/home/service_bg.png')",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      content: {
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}