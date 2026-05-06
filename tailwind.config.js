/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        court: {
          950: '#120b08',
          900: '#1d120d',
          800: '#2b1a12',
        },
        hoop: {
          500: '#f97316',
          400: '#fb923c',
          300: '#fdba74',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(249, 115, 22, 0.22)',
      },
    },
  },
  plugins: [],
}
