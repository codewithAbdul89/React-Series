module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./folder/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'max-h-[1000px]' // 👈 Tells Tailwind to always generate this class
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      sm: { max: '768px' },
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}


