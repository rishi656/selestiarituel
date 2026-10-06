/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selestia: {
          black: "#080808",
          white: "#FFFFFF",
          gold: "#F9BD2A",
          "gold-light": "#FFF4D2",
          "gold-dark": "#D49E1B",
          "gray-light": "#FAFAFA",
          "gray-border": "#EAEAEA",
          "gray-muted": "#737373",
          "gray-dark": "#171717",
          "card-dark": "#121212"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        editorial: ['"Playfair Display"', 'serif'],
        luxury: ['"Playfair Display"', 'serif'],
        mono: ['"Space Grotesk"', 'monospace']
      },
      keyframes: {
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shine': {
          '100%': { left: '125%' }
        }
      },
      animation: {
        'orbit-slow': 'orbit 25s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
