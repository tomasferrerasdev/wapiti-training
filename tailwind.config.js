/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        gray: '#747474',
        accent: '#BAFF66',
      },
      fontFamily: {
        uberMedium: ['UberMoveMedium', 'sans-serif'],
        uberBold: ['UberMoveBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
