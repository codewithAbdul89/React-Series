import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import AuthLayout from './Component/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import SignUP from './pages/SignUP.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: (
                    <AuthLayout authentication={false} >
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <SignUP />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ]
    }])






createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Provider store={store}>

            <RouterProvider router={router} />

        </Provider>

    </React.StrictMode>,
)
