/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens : {
      'sm': '640px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1928px',
    }, 
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Space Mono'],
      },
      colors: {
        grayClassic50: '#FAFAFA',
        grayClassic100: '#F5F5F5',
        grayClassic200: '#EEEEEE',
        grayClassic300: '#E0E0E0',
        grayClassic400: '#BDBDBD',
        grayClassic500: '#9E9E9E',
        grayClassic600: '#757575',
        grayClassic700: '#616161',
        grayClassic800: '#424242',
        grayClassic900: '#212121',
        backgroundDark: '#24252D',
        textDark: '#2D2E36',
        lightBlue: '#4A77CE',
      },
    },
  },
  plugins: [],
}
