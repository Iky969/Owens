/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '400px', // breakpoint ekstra untuk layar kecil (320–375px)
      },
      animation: {
        'blob-1': 'blob1 25s infinite ease-in-out',
        'blob-2': 'blob2 30s infinite ease-in-out',
        'blob-3': 'blob3 28s infinite ease-in-out',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(60px, -80px) scale(1.15) rotate(45deg)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.9) rotate(-30deg)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-70px, 60px) scale(1.2) rotate(-50deg)' },
          '66%': { transform: 'translate(50px, -50px) scale(0.85) rotate(40deg)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(80px, 50px) scale(0.95) rotate(30deg)' },
          '66%': { transform: 'translate(-60px, -70px) scale(1.1) rotate(-60deg)' },
        },
      },
    },
  },
  plugins: [],
}
