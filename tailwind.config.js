// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',    // deep dark navy
        gold: '#D4AF37',    // classic gold
      },
    },
  },
  plugins: [],
};
