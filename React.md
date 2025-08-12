# 1-For Netlify :

* &nbsp;npm run build
* netlify login
* netlify deploy --prod --dir=dist
* This folder isn't linked to a project yet
* ? What would you like to do?
* > Create \& configure a new site
* Site name (optional):

&nbsp;  

* ## For Next time update project into the Netlify: netlify link:
* netlify link
* npm run build
* netlify deploy --prod --dir=dist



 ## For upload next folder firt unlink it
* netlify unlink














# 2-When you want to see your react page on mobile:

#### &nbsp; Change the vite config completetly  with this:



// vite.config.js

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'



export default defineConfig({

&nbsp; plugins: \[react()],

&nbsp; server: {

&nbsp;   host: true, // 👈 this exposes the server to your local network

&nbsp;   port: 5173, // optional: change if you want

&nbsp; },

})






# 3-Install vite in react:

* npm create vite@latest
* &nbsp;npm i
  







# 4-To Install React Router:

&nbsp;   npm install react-router-dom#### &nbsp;





5-	Method of installation of npm tailwind:
⦁	npm install -D tailwindcss postcss autoprefixer
⦁	npm i -D tailwindcss@3  postcss autoprefixer
⦁	npx tailwindcss init -p
⦁	Then create the folder name it "folder or any" then create the input.css(file) in it:
Add the below three lines in it
@tailwind base;
@tailwind components;
@tailwind utilities;
⦁	npx tailwindcss -i ./folder/input.css -o ./folder/output.css --watch
⦁	Replace the package .json with this:
{
  "name": "new-folder",
  "version": "1.0.0", 
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx tailwindcss -i ./folder/input.css -o ./folder/output.css --watch",
    "build": "npx tailwindcss -i ./folder/input.css -o ./folder/output.css --minify"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17"
  }
}

⦁	Replace the tailwind.config.js with this:
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

More
⦁	For use next time first of all restart the vscode for class Suggestion.
⦁	Run this command for use:
npm run build



06-for Redirects:
⦁ file name (_redirects)
⦁ file content (/* /index.html 200)
⦁ keep Redirects file out of src
⦁ replace the build script in pakage.json with this:" "build": "vite build && xcopy _redirects dist\\_redirects* /Y""
