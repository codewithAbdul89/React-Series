import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainLayout from './Pages/MainLayout.jsx'
import { store } from './Components/store.js'
import { Provider } from "react-redux"
import ProtectedRoute from './Pages/ProtectedRoute.jsx'
import ForgetPassword from './Pages/ForgetPassword.jsx'
import About from "./Pages/About.jsx"
import Home from "./Pages/Home.jsx"
import Project from "./Pages/Project.jsx"
import Skill from "./Pages/Skill.jsx"
import Contact from "./Pages/Contact.jsx"
import SignUpPage from './Pages/SignUpPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import AuthLayout from './Pages/AuthLayout.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: '/about', element: <About /> },
          { path: "/project", element: <Project /> },
          { path: "/skill", element: <Skill /> },
          { path: "/contact", element: <Contact /> },
        ]
      },
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/signup',
        element: <SignUpPage />
      },
      {
        path: '/signin',
        element: <LoginPage />
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
])


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)


