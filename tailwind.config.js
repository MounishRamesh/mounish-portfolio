/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          soft: '#101A2E',
          surface: '#121B2E',
          border: '#26324A',
        },
        paper: {
          DEFAULT: '#F7F8FA',
          surface: '#FFFFFF',
          border: '#E2E5EC',
        },
        amber: {
          signal: '#F2A93B',
        },
        teal: {
          signal: '#35D0BA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
