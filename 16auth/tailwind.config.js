module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-beige": "#c8c0a7",
        "brand-taupe": "#9c9480",
        "brand-cream": "#E8E5DD",
        "brand-gold": "#ba9145",
        "brand-brown": "#7c5906",
        "brand-sand": "#B6B1A3",
        "brand-olive": "#a1915f",
      },
    },
    screens: {
      sm: { max: "768px" },
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};