import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primarybg: '#030516',
        secondary: '#1f3449',
        linearbg: 'rgba(12,38,69,0)',
        linearbg2: 'rgba(7,22,38,0)',
        accent: '#60a6e7',
        darkgray: '#aea9b1',
        lightgray: '#e6e0e9'
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'pulse-bg': {
          '0%': { transform: 'scale(1)', opacity: "1" },
          '50%': { transform: 'scale(1.1)', opacity: "0.8" },
          '100%': { transform: 'scale(1)', opacity: "1" },
        },
        "scroll": {
          "0%": { transform: "translatex(0)" },
          "100%": { transform: "translatex(-100%)" }
        },
        "scroll-reverse": {
          "0%": { transform: "translatex(-100%)" },
          "100%": { transform: "translatex(0)" }
        }
      },
      animation: {
        'pulse-bg': 'pulse-bg 3s infinite ease-in-out',
        "scroll": 'scroll 1000s linear infinite',
        "scroll-reverse": 'scroll-reverse 1000s linear infinite',
      },
    }
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;