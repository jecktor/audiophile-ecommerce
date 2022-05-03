module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
    },
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#484848',
      },
    },
  },
  plugins: [],
};
