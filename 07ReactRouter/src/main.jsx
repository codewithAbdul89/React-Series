import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home.jsx/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import GitHub, { gitHubInfoLoader } from './Components/GitHub/GitHub';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='User/:USERID' element={<User />} />
      <Route loader={
        gitHubInfoLoader
      }
        path='/GitHub'
        element={<GitHub />}
      />



 

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>

);







