/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "undulate": "url('/src/assets/undulate.svg')",
      },
      animation: {
        'rotate-slow': 'rotate 6s linear infinite',
        'dash': 'dash 2s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        dash: {
          '0%': { strokeDashoffset: 100 },
          '100%': { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [],
};
