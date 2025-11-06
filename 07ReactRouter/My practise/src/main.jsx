import { StrictMode ,lazy,Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import  { getGitHubInfo } from './GitHub.jsx'
const GitHub = lazy(() => import('./GitHub.jsx'));
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, BrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/GitHub" loader={getGitHubInfo}  element={<GitHub/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
   <StrictMode>
  <RouterProvider router={router}  HydrateFallback={<div>Loading....</div>} />

   </StrictMode>
) 
