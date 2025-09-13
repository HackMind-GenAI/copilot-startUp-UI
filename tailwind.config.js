export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dpDark: "#0B121C",
        dpPanel: "#111927",
        dpTeal: "#00B5D8",
        dpGreen: "#10B981",
        dpAmber: "#FBBF24",
        dpMuted: "#9CA3AF"
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        dp: '0 8px 30px rgba(0,0,0,0.35)'
      },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui"] }
    }
  },
  plugins: []
}
