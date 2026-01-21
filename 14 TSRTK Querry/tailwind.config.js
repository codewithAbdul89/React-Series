module.exports = {
  content: [
    "./index.html",
    "./folder//*.html",           // your custom HTML folder
    "./src//*.{js,ts,jsx,tsx}",   // all React/JS/TS files
    "./*.js"                        // top-level JS files (optional)
  ],
  safelist: [
    'max-h-[1000px]' // ensures this class is always generated
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
};