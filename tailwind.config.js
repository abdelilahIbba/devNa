import { theme } from '@tailwindcss/postcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'devna-dark': '#0f172a',
        'devna-primary': '#2563eb',
        'devna-accent': '#38bdf8',
        'devna-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
