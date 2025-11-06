module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // 👈 scan only inside src
    "./public/index.html", // if you have a public folder
  ],
  // content: [
  //   "./index.html",
  //   "./**/*.html",
  //   "./src/**/*.{js,ts,jsx,tsx}", // covers all your source files
  // ],
  safelist: [
    'max-h-[1000px]', // 👈 always generate this class
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    // Keep Tailwind defaults unless you want custom ones
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
