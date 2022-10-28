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
    },
  },
  plugins: [],
}
