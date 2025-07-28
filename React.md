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

&nbsp;   npm install react-router-dom





#### &nbsp;





