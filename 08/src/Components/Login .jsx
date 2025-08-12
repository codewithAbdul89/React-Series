import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../Context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

    useEffect(() => {
        const prevColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = "rgba(216, 180, 254)";

        inputRef.current.focus();

        return () => {
            document.body.style.backgroundColor = prevColor;
        };
    }, []);

    const navigate = useNavigate()
    const flexMangerRef = useRef(null)
    const inputRef = useRef(null)
    const userNameErrorRef = useRef(null)
    const passwordErrorRef = useRef(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submittedState, setSubmittedState] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [lockSvg, setLockSvg] = useState(false)

    const { users, loginState, setLoginState, loading, setUser, setMessage, setLoading } = useContext(UserContext);

    const togglePasswordtype = () => {
        setShowPassword((prev) => !prev)
    }



    useEffect(() => {
        if (loginState) {
            navigate('/profile');
        }
        else {
            navigate('/');
        }
    }, [loginState, navigate]);



    useEffect(() => {

        if (password === "") {
            setLockSvg(true)
        }
        else {
            setLockSvg(false)
        }
    }, [password])




    let valid = true



    function handler(e) {


        e.preventDefault()
        setSubmittedState(true)

        if (username.trim().length < 3) {
            valid = false
            userNameErrorRef.current.style.display = "block"
            userNameErrorRef.current.innerHTML = "Invalid Email or Username."
            flexMangerRef.current.classList.remove("gap-6")
            flexMangerRef.current.classList.add("gap-2")

        }
        else {
            userNameErrorRef.current.style.display = "none"
        }
        if (password.trim().length < 8) {
            passwordErrorRef.current.style.display = "block"
            passwordErrorRef.current.innerHTML = ` Password must be at least  <span class="text-black font-bold ">8</span> digits.`;
            valid = false
            flexMangerRef.current.classList.remove("gap-6")
            flexMangerRef.current.classList.add("gap-2")
        }
        else {
            passwordErrorRef.current.style.display = "none"
        }





        if (valid) {


            const informationMatched = users.find(user =>
                (user.Email === username || user.username === username) && user.password === password
            )
            if (informationMatched) {
                setLoading(true);
                setUser(informationMatched);
                setMessage("Login Successfully!");

                setTimeout(() => {
                    setLoading(false);
                }, 1500);





            }
            else {
                setMessage("Invalid Information!")
                setUser(null)
            }







        }



    }













    return (
        <div className="w-full h-screen flex justify-center items-center sm:bg-purple-300      ">
            <div className="w-[33%] sm:absolute sm:top-[20%] sm:pt-1  sm:w-[95%] min-h-[50%]   rounded-lg bg-white/40 md:px-3 px-[8px] py-3">


                <div>
                    <p
                        className=" text-4xl sm:text-[40px] sm:pt-3 text-center font-sans text-blue-500 font-bold sm:font-extrabold ">
                        Login Page
                    </p>
                    <hr className=" md:mt-3 mt-1 border-white border-1" />
                </div>



                <form
                    onSubmit={handler}

                >
                    <div ref={flexMangerRef} className="mt-4 flex flex-col gap-6">
                        {/* Gmail */}
                        <div>
                            <div className="flex flex-col gap-y-[8px] relative">
                                <label className=" text-lg font-[500] px-1" htmlFor="userName">UserName or Email :-</label>
                                <input ref={inputRef}
                                    className="outline-none sm:h-9 placeholder:italic rounded p-1 px-2 pr-9"
                                    type="text"
                                    id="userName"
                                    required
                                    placeholder='e.g abc@gmail.com'
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value)

                                        if (submittedState) {
                                            if (username.trim().length >= 2) {
                                                userNameErrorRef.current.style.display = "none";
                                                flexMangerRef.current.classList.add("gap-6");
                                                flexMangerRef.current.classList.remove("gap-2");

                                            }
                                            else {
                                                userNameErrorRef.current.style.display = "block"
                                                userNameErrorRef.current.innerHTML = "Invalid Email or Username."

                                            }
                                        }
                                    }
                                    } />
                                <div className='top-[60%] -translate-y-1/2 absolute right-1'>
                                    <svg className="w-5  text-gray-600  absolute right-1 top-[12px] transform -translate-y-1/2    pointer-events-none"
                                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div ref={userNameErrorRef} className='p-1 pt-0 hidden font-medium text-red-500'></div>

                        </div>


                        <div className="flex flex-col gap-y-[6px]">
                            <label className=" text-lg font-[500] px-1" htmlFor="password">Password :-</label>

                            <div className='w-full relative'>
                                <input className="outline-none pr-8  placeholder:italic sm:h-9 relative w-full rounded p-1 px-2"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    required
                                    placeholder='e.g Abc@123%'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        if (submittedState) {
                                            if (password.trim().length >= 7) {
                                                passwordErrorRef.current.style.display = "none"
                                                flexMangerRef.current.classList.add("gap-6");
                                                flexMangerRef.current.classList.remove("gap-2");

                                            }
                                            else {
                                                passwordErrorRef.current.style.display = "block"
                                                passwordErrorRef.current.innerHTML = `  Password must be at least   <span class="text-black font-bold ">8</span> digits.`
                                            }
                                        }
                                    }} />



                                <button className='absolute -translate-y-1/2 top-1/2 right-1' type='button' onClick={togglePasswordtype}>

                                    {lockSvg ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-black cursor-default">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 10.5V6a4.5 4.5 0 00-9 0v4.5M5.25 10.5h13.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75z" />
                                        </svg>) :
                                        (!showPassword ? (<svg
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
                            <div ref={passwordErrorRef} className='p-1 font-medium  pt-0 hidden text-red-500'></div>

                        </div>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-4 items-center py-4">

                        <button
                            type="submit"
                            disabled={loading}
                            className={`py-[10px] text-[16px] sm:text-[18px] border-white border-[1px] px-8 text-white ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:opacity-50"
                                } rounded-lg font-semibold`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>


                    </div>
                </form>

                <div className='flex pr-4 justify-between items-center '>
                    <div className='flex px-2 gap-2 justify-between items-center'>
                        <input className='w-5 h-5 cursor-pointer' type="checkbox" />
                        <div className='sm:text-[18px]'>Remember me</div>
                    </div>
                    <div className='text-blue-500 cursor-pointer'>
                        <NavLink className={"duration-100 sm:text-[18px] underline decoration-blue-500" } to="/verification">
                            Forget Password?
                        </NavLink>

                    </div>
                </div>

                <div className='justify-center mt-5 sm:mt-4 flex gap-2'>
                    <div className='sm:text-[18px]'>
                        Do not have an account?
                    </div>
                    <div>
                        <NavLink className={"text-blue-500 underline sm:text-[18px] decoration-blue-500"} to="/SignUp">
                            SignUp

                        </NavLink>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Login 