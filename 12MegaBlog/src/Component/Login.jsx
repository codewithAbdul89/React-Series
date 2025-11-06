import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../Store/authSlice'
import { Button, Logo, Input } from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appWrite/Auth'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        // email: "",
        // password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const errors = {};


        if (!formData.email) {
            errors.email = 'Please enter your email';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };


    const LoginPage = async (e) => {
        console.log(formData);
        
        e.preventDefault();
        if (validate()) {
            try {
                const session = await authService.login(formData)
                if (session) {
                    const userData = await authService.getCurrentUser()
                    if (userData) {
                        dispatch(authLogin(userData))
                        navigate("/")
                    }
                }
            } catch (error) {
                setError(error)

            }

        }

    }
    return (
        <div className='flex items-center justify-center w-full'>

            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>

                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>



                <form onSubmit={LoginPage}
                    className='mt-8'
                >
                    <div className='space-y-5'>
                        <div className="flex flex-col gap-1">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                            />
                            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                            />
                            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
                        </div>
                        <Button
                            className="w-full text-white hover:bg-blue-400 duration-100"
                            children="Sign in"
                            type="submit" />

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login