module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./folder/**/*.html",
  ],
  safelist: [
    "max-h-[1000px]",
  ],
  darkMode: "class",
  theme: {
    extend: {},
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
