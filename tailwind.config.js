/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a050e', // deep velvet wine plum
        surface: '#240715', // rich wine plum card surface
        surfaceLight: '#380c21', // lighter wine card surface
        primary: '#e8b4c0', // rose-gold / champagne accent
        secondary: '#c26c83', // warm wine rose
        tertiary: '#f43f5e', // vibrant rose crimson
        wine: {
          950: '#14030a',
          900: '#1a050e',
          850: '#230713',
          800: '#2e0a1b',
          700: '#431027',
          600: '#5c1737',
          500: '#7d204a',
        },
        maroon: {
          900: '#230713',
          800: '#380f21',
          700: '#4d162f',
          600: '#6b2041',
          500: '#8c2d56',
        },
        roseDust: {
          50: '#fdf7f8',
          100: '#faedf0',
          200: '#f5d9df',
          300: '#e8b4c0',
          400: '#d78ea0',
          500: '#c26c83',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wine-glow': 'radial-gradient(circle at 50% 50%, rgba(194, 108, 131, 0.15) 0%, rgba(77, 22, 47, 0.08) 50%, transparent 100%)',
        'aurora-wine': 'linear-gradient(135deg, rgba(232, 180, 192, 0.12) 0%, rgba(194, 108, 131, 0.1) 50%, rgba(140, 45, 86, 0.15) 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(194, 108, 131, 0.18) 0%, rgba(77, 22, 47, 0.08) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
