module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foodie: {
          first: '#ed5a6c',
          second: '#2e050a',
          third: '#fdf1f3',
        },
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animations: {
        wiggle: 'wiggle 10s infinite linear',
      },
    },
  },
  plugins: [],
};
