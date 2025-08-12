import React, { useContext, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import UserContext from '../Context/UserContext';

function SignUp() {
    // for body styling



    useEffect(() => {
        const prevColor = document.body.style.background
        document.body.style.background = "linear-gradient(135deg, rgb(255, 223, 186) 0%, rgb(186, 255, 201) 100%)";
        userNameInputRef.current.focus()
        return () => {
            document.body.style.background = prevColor
        }
    }, []);


    // Declartion of state
    const navigate = useNavigate()

    const [showLockIconInPassword, setShowLockIconInPassword] = useState(false)
    const [showLockIconInConfirmPassword, setShowLockIconInConfirmPassword] = useState(false)
    const [userName, setUserName] = useState('')
    const [passwordSvg, setPasswordSvg] = useState(false)
    const [confirmPasswordSvg, setconfirmPasswordSvg] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const { setUsers, users, setUser, user, setMessage, loading, setLoading } = useContext(UserContext);


    // Declartion of Ref
    const confirmButtonRef = useRef(null)
    const userNameInputRef = useRef(null)
    const userNameErrorRef = useRef(null)
    const passwordErrorRef = useRef(null)
    const emailErrorRef = useRef(null)
    const confirmPasswordErrorRef = useRef(null)
    const formRef = useRef(null)


    // passwordSvgChanger
    function passwordSvgStateChanger() {
        setPasswordSvg((prev) => !prev)

    }

    useEffect(() => {

        if (password === "") {
            setShowLockIconInPassword(true)
        }
        else {
            setShowLockIconInPassword(false)

        }
    }, [password])

    // confirmPasswordSvgChanger
    function confirmPasswordSvgStateChanger() {
        setconfirmPasswordSvg((prev) => !prev)

    }


    useEffect(() => {

        if (confirmPassword === "") {
            setShowLockIconInConfirmPassword(true)
        }
        else {
            setShowLockIconInConfirmPassword(false)

        }
    }, [confirmPassword])


    // Submit function

    let valid = true

    function submitSignUpPage(e) {
        e.preventDefault()

        if (password.length < 8) {
            valid = false
            passwordErrorRef.current.innerHTML = `
 
    Password must be at least 
    <span class="text-black font-semibold ">8</span> digits.
  
`;

        }

        if (password) {
            if (password !== confirmPassword) {
                valid = false
                confirmPasswordErrorRef.current.innerHTML = "Password does not match."
            }
        }
        if (userName.trim().length < 3) {
            valid = false
            userNameErrorRef.current.innerHTML = `Username must be at least <span class=" text-black font-semibold" >3</span> letter. `
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            valid = false
            emailErrorRef.current.innerHTML = "Email is Invalid!"
        }

        if (!valid) {
            formRef.current.classList.remove("gap-3");
        }




        if (valid) {
            const alreadyExists = users.some(u => u.Email === email);
            if (alreadyExists) {
                setMessage("Email already registered.");
                return
            }

            setLoading(true)

            const newUser = {
                username: userName,
                Email: email,
                password: password
            };

            setUsers([...users, newUser]);
            setMessage("Sign Up successfully!")


            // Reset form
            setTimeout(() => {
                setLoading(false)
                navigate('/')
                setMessage('')

            }, 2000)


            // setUserName('');
            // setEmail('');
            // setPassword('');
            // setConfirmPassword('');
            // setPasswordSvg(false);
            // setconfirmPasswordSvg(false);
            // setShowLockIconInPassword(false);
            // setShowLockIconInConfirmPassword(false);




        }


    }









    return (



        <div className=' w-full h-screen flex justify-center items-center '>
            <div className='w-[33%] md:min-h-[60%] rounded-lg shadow-xl bg-white/30 sm:w-[95%] absolute top-[6%] sm:top-[10%] pt-2 md:pt-1 pb-4  px-2 md:px-3'>

                <div
                    style={
                        {
                            textShadow: "0px 1px 2px black"
                        }
                    }
                    className='text-center text-[38px] text-orange-400 font-bold text-shadow'>
                    Sign Up
                    <hr className='border-[1px] border-white' />
                </div>

                {/* Inputs */}


                <div className='mt-1' >
                    <form ref={formRef} onSubmit={submitSignUpPage} className='flex flex-col gap-3'>
                        {/* username */}
                        <div>
                            <div className='w-full grid pt-1 gap-y-[3px] relative '>
                                <label htmlFor="username" className='px-[1.5px] font-[480] text-lg'>UserName:</label>
                                <input
                                    className='rounded-[5px] p-[3px] pr-9 px-2 placeholder:italic  focus:outline-blue-500 sm:py-1'
                                    type="text"
                                    id="username"
                                    ref={userNameInputRef}
                                    value={userName}
                                    placeholder='e.g Abc'
                                    onChange={(e) => {
                                        let value = e.target.value
                                        setUserName(value)
                                        if (value.trim().length >= 3) {

                                            userNameErrorRef.current.style.display = "none"

                                        }
                                        else {
                                            userNameErrorRef.current.style.display = "block"
                                        }
                                    }}
                                />
                                <div className='absolute -translate-y-1/2 top-[75%] right-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 116.06"
                                        className="w-5 h-9 text-gray-600  pointer-events-none"
                                        fill="currentColor">
                                        <path
                                            d="M0 116.06c3.81-31.71 2.87-28.85 40.09-38.82 4.77 21.43 41.49 21.59 42.21 0 39.43 10.39 37.7 6.58 40.58 38.64zM28 22c16.1-19.9 34.67-30.73 48.61-13 16.8.88 23.53 25.55 10.14 36.79 0 .22 0 .44-.08.66a7.31 7.31 0 0 1 1.55-.3 4.86 4.86 0 0 1 2.74.52 3.87 3.87 0 0 1 1.91 2.31c.7 2.19-1.65 11.62-3.51 13.09a3.89 3.89 0 0 1-2.85.69l-.06 1.62c-.13 6.62-3.37 8.69-7.61 12.67-.55.52-1.12 1-1.63 1.55C72.42 81 67.73 83 63 83s-9.71-2.07-14.22-6.08c-.68-.61-1.14-1-1.59-1.39C43 72 39.52 69.94 38.86 62.66a5 5 0 0 1-2.81-.66c-3.47-2-4.72-11.25-3.53-14.13.87-2.42 2.2-3.21 4-3.16C32.26 41.92 39.15 25.33 28 22zm11.3 26.66c-6.82-2.38-4.58 12.13.54 10.6.15 0 .31-.05.47-.08a1.59 1.59 0 0 1 1.69 1.55c.17 7.24 3.38 9 7.28 12.38.6.52 1.23 1 1.63 1.42 3.93 3.49 8 5.29 12.1 5.29s7.87-1.72 11.53-5.26c4.94-4.77 8.84-6.41 8.19-14.18a1.62 1.62 0 0 1 .26-1 1.6 1.6 0 0 1 2.22-.45c4.23 2.8 6-9.85 3.32-9.64-1.85.14-2.91 1.7-4.09 1.5a1.6 1.6 0 0 1-1.31-1.84c1.5-8.79.82-14.51-1.06-18.41a15.66 15.66 0 0 0-7.09-7c-10.49 8-20.09 4-28.17 10.74-3.42 2.85-5.2 7.06-3.91 13a1.6 1.6 0 0 1 0 1c-.63 1.73-2.35.83-3.51.42z" />
                                    </svg>
                                </div>
                            </div>
                            <div ref={userNameErrorRef} className='text-red-600 px-2 text-[16px]'></div>
                        </div>


                        {/* Email */}

                        <div>
                            <div className='w-full grid pt-1 gap-y-[3px] relative'>
                                <label htmlFor="Email" className='px-[1.5px] font-[480] text-lg'>Email:</label>
                                <input
                                    className='rounded-[5px] p-[3px] px-2 pr-8 placeholder:italic focus:outline-blue-500 sm:py-1'
                                    id="Email"
                                    type='text'
                                    value={email}
                                    placeholder='e.g abc@gmail.com'
                                    onChange={(e) => {
                                        let value = e.target.value
                                        setEmail(value)
                                        if (value.includes("@gmail.c")) {

                                            emailErrorRef.current.style.display = "none"

                                        }
                                        else {
                                            emailErrorRef.current.style.display = "block"
                                        }
                                    }

                                    }
                                />
                                <div className='top-[80%] -translate-y-1/2 absolute right-1'>
                                    <svg
                                        className="w-6 h-10 text-gray-600 absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>

                                </div>

                            </div>
                            <div ref={emailErrorRef} className='text-red-600 px-2 text-[16px]'></div>
                        </div>


                        {/* Password */}
                        <div>

                            <div className='w-full  grid pt-1 gap-y-[3px] relative '>
                                <label htmlFor="Password" className='px-[1.5px] font-[480] text-lg'>Password:</label>
                                <input
                                    className='rounded-[5px] relative p-[3px] px-2  placeholder:italic  focus:outline-blue-500 sm:py-1 pr-10'
                                    type={passwordSvg ? "text" : "password"}
                                    id="Password"
                                    value={password}
                                    // max={12}
                                    placeholder='e.g Abc@123&'
                                    onChange={(e) => {
                                        let value = e.target.value

                                        setPassword(value)
                                        if (value.trim().length >= 8) {

                                            passwordErrorRef.current.style.display = "none"

                                        }
                                        else {
                                            passwordErrorRef.current.style.display = "block"
                                        }
                                    }

                                    }
                                />
                                <button
                                    className='absolute right-2 -translate-y-1/2 top-[75%] '
                                    type='button'

                                    onClick={passwordSvgStateChanger}

                                >
                                    {showLockIconInPassword ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-black cursor-default ">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 10.5V6a4.5 4.5 0 00-9 0v4.5M5.25 10.5h13.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75z" />
                                        </svg>) :
                                        (!passwordSvg ? (<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.5 12c1.636 4.048 5.736 7.5 10.5 7.5 2.042 0 3.97-.602 5.568-1.64M21   12c-.44-1.08-1.093-2.102-1.933-3.001m-2.99-2.386A10.46      10.46 0 0012 4.5c-1.663 0-3.24.404-4.613      1.116m13.153 13.154L3 3"
                                            />
                                        </svg>) : (<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5.25   12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542   6.75-4.477 0-8.268-2.693-9.542-6.75z"
                                            />
                                        </svg>))}


                                </button>
                            </div>
                            <div ref={passwordErrorRef} className='text-red-600 px-2 text-[16px]'></div>
                        </div>

                        {/* confirm Password */}
                        <div>
                            <div className='w-full grid pt-1 gap-y-[3px] relative '>
                                <label htmlFor="ConfirmPassword" className='px-[1.5px] font-[480] text-lg'>Confirm Password:</label>
                                <input
                                    className='rounded-[5px] p-[3px] px-2 pr-10  placeholder:italic  focus:outline-blue-500 sm:py-1'
                                    type={confirmPasswordSvg ? "text" : "password"}
                                    id="ConfirmPassword"
                                    value={confirmPassword}
                                    placeholder='e.g Abc@123&'
                                    onChange={(e) => {
                                        let value = e.target.value
                                        setConfirmPassword(value)
                                        if (value === password) {

                                            confirmPasswordErrorRef.current.style.display = "none"

                                        }
                                        else {
                                            confirmPasswordErrorRef.current.style.display = "block"
                                        }
                                    }

                                    }
                                />
                                <button
                                    className='absolute right-2 -translate-y-1/2 top-[75%] '
                                    ref={confirmButtonRef}
                                    type='button'

                                    onClick={confirmPasswordSvgStateChanger}

                                >

                                    {showLockIconInConfirmPassword ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-black cursor-default ">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 10.5V6a4.5 4.5 0 00-9 0v4.5M5.25 10.5h13.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75z" />
                                        </svg>) :
                                        (!confirmPasswordSvg ? (<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.5 12c1.636 4.048 5.736 7.5 10.5 7.5 2.042 0 3.97-.602 5.568-1.64M21   12c-.44-1.08-1.093-2.102-1.933-3.001m-2.99-2.386A10.46      10.46 0 0012 4.5c-1.663 0-3.24.404-4.613      1.116m13.153 13.154L3 3"
                                            />
                                        </svg>) : (<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5.25   12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542   6.75-4.477 0-8.268-2.693-9.542-6.75z"
                                            />
                                        </svg>))}

                                </button>

                            </div>
                            <div ref={confirmPasswordErrorRef} className='text-red-600 px-2 text-[16px]'></div>
                        </div>


                        {/* signu Up button */}



                        <div className='flex justify-center mt-3 items-center'>
                            <button
                                className='py-[8px] border-2 outline-white sm:border-[3px] border-white font-semibold hover:opacity-45 text-[18px] px-6 bg-orange-400 text-white rounded-lg'
                            >
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>

                <div className='text-center sm:text-[18px]  text-gray-500  mt-2 text-lg'>
                    Already have an account?
                    <NavLink to="/" className={" sm:text-[18px] text-orange-500 underline hover:opacity-50 decoration-orange-500 pl-2"}>
                        Login Here!
                    </NavLink>
                </div>


            </div>

        </div>

    )
}

export default SignUp