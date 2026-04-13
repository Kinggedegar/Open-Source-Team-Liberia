/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        osGreen: { 400: '#10f745', 500: '#00e500', 600: '#00b300' },
        osBrown: '#4A2C11',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(0, 229, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
