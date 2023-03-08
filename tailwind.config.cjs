/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      roboto: 'Roboto Condensed,sans-serif',
      cabin: 'Cabin ,sans-serif',
    },
  },
  plugins: [],
};
