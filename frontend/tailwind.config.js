/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#8185b2',
          light: '#a9a9f0',
        },
        // Background colors
        bg: {
          dark: '#282142',
          overlay: 'rgba(129, 133, 178, 0.1)',
        },
        // Border colors
        border: {
          main: '#a855f7',
          secondary: '#4b5563',
        },
      },
      backgroundImage: {
        'main': "url('./src/assets/bgImage.svg')",
      },
    },
  },
  plugins: [],
}