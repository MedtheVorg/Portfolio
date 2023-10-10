/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      fontFamily: {
        Montserrat: 'Montserrat',
        jost: 'Jost',
      },
      animation: {
        'bounce-less': 'bounce 5s linear infinite',
        'move-it': 'move 60s linear infinite',
      },
      colors: {
        semiBlue: '#72AEC8',
        darkOrange: '#9c4040',
      },
    },
  },
  plugins: [],
};
