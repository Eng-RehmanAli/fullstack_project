import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // ✅ important if you're using /src
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        serif: ['Georgia', 'serif'],
      },

      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        'spin-slow': 'spin 4s linear infinite',
      },

      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config