/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
        gold: '#fbbf24',
        'gold-light': '#fef3c7'
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' }
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          to: { boxShadow: '0 0 30px rgba(251, 191, 36, 0.6)' }
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(251, 191, 36, 0)' }
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#fbbf24' }
        }
      }
    },
  },
  plugins: [],
}
