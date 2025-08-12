import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../Context/UserContext';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function PasswordChanger() {


    useEffect(() => {

        const prevColor = document.body.style.background
        document.body.style.backgroundColor = "rgb(173, 216, 230)"
        return () => {
            document.body.style.backgroundColor = prevColor
        }

    }, [])




    const { users, setUsers, setMessage } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [forgetPasssword, setForgetPasssword] = useState('')
    const [confirmForgetPasssword, setConfirmForgetPasssword] = useState('')
    const navigate = useNavigate()
    const [forgetPasswordSvg, setForgetPasswordSvg] = useState(false)
    const [confirmForgetPasswordSvg, setConfirmForgetPasswordSvg] = useState(false)
    const [forgetPasswordLockSvg, setPasswordForgetLockSvg] = useState(true)
    const [confirmForgetPasswordLockSvg, setConfirmForgetPasswordLockSvg] = useState(true)

    useEffect(() => {
        if (forgetPasssword === undefined) {
            setPasswordForgetLockSvg(true)
        }
        else {
            setPasswordForgetLockSvg(false)
        }
    }, [forgetPasssword])


    useEffect(() => {
        if (confirmForgetPasssword === undefined) {
            setConfirmForgetPasswordLockSvg(true)
        }
        else {
            setConfirmForgetPasswordLockSvg(false)
        }

    }, [confirmForgetPasssword])






    function forgetPasswordSvgChanger() {
        setForgetPasswordSvg((prev) => !prev)
    }
    function confirmForgetPasswordSvgChanger() {
        setConfirmForgetPasswordSvg((prev) => !prev)
    }


    const forgetPassswordRef = useRef()
    const confirmForgetPassswordRef = useRef()
    const startPasswordRef = useRef(null)
    useEffect(() => {
        startPasswordRef.current.focus()
    }, [])

    let validation = true
    const changer = JSON.parse(localStorage.getItem("userDetails") || null)


    function passwordChanger(e) {
        e.preventDefault();

        if (forgetPasssword.trim().length < 8) {
            validation = false;
            forgetPassswordRef.current.innerHTML = `Password must be at least <span class="text-black font-bold">8</span> digits.`;
        }

        if (confirmForgetPasssword !== forgetPasssword) {
            validation = false;
            confirmForgetPassswordRef.current.innerHTML = "Password does not match.";
        }

        if (validation) {
            setLoading(true);

            const latestUser = {
                username: changer.username,
                Email: changer.Email,
                password: forgetPasssword,
            };

            const updatedUsers = users.filter(
                (user) => !(
                    user.username === changer.username &&
                    user.Email === changer.Email &&
                    user.password === changer.password
                )
            );

            updatedUsers.push(latestUser);

            setUsers(updatedUsers);
            setMessage("Password changed successfully!");


            setTimeout(() => {
                navigate('/')
                setMessage('')
                localStorage.removeItem("userDetails")
                setLoading(false);
                setConfirmForgetPasssword('');
                setForgetPasssword('');
            }, 3000);

        }
    }


    useEffect(() => {

        console.log(changer);

    }, [])










    return (
        <div className='h-screen w-full flex items-center justify-center '>
            {loading && (
                <div className='opacity-50 fixed top-0 left-0  bg-black   h-screen w-full flex items-center justify-center z-[10000] '>
                    <div className='w-14 h-14 rounded-full border-4 border-t-blue-500 animate-spin'></div>
                </div>

            )}

            <div className='w-[33%]  min-h-[35%] sm:w-[95%] rounded-lg shadow bg-white/50 pt-1 p-3'
            >





                <div>

                    <p className='text-center text-[40px] font-bold italic text-green-500'>
                        Change Password
                    </p>
                    <hr className='border-[1.2px] border-white' />
                    {/* Inputs */}
                    <div >
                        <form onSubmit={passwordChanger} className='gap-y-3 flex flex-col'>
                            {/* Password */}
                            <div>
                                <div className='flex flex-col gap-y-2 mt-1 relative '>
                                    <label htmlFor="forgetPassword" className='px-1 font-semibold sm:text-[18px] '>Enter New Password:</label>
                                    <input
                                        className='p-[2px] pr-9 h-[35px]  px-2 placeholder:italic rounded focus:outline-blue-500'
                                        type={forgetPasswordSvg ? "text" : "password"}
                                        required
                                        ref={startPasswordRef}
                                        value={forgetPasssword}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            setForgetPasssword(value)
                                            if (value.trim().length >= 8) {
                                                forgetPassswordRef.current.style.display = "none"

                                            }
                                            else {
                                                forgetPassswordRef.current.style.display = "block"
                                            }
                                        }}
                                        placeholder='e.g Abc$123*'
                                    />
                                    <div className='absolute right-2 top-[60%]'>
                                        <button type='button' onClick={forgetPasswordSvgChanger}>
                                            {forgetPasswordLockSvg ?
                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-black cursor-default ">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.5 10.5V6a4.5 4.5 0 00-9 0v4.5M5.25 10.5h13.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75z" />
                                                </svg>) :
                                                (!forgetPasswordSvg ? (<svg
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

                                </div>
                                {/* confirm Password */}
                                <div ref={forgetPassswordRef} className='text-red-500 px-2 mt-1'> </div>
                            </div>




                            <div>
                                <div className='flex flex-col gap-y-2 relative'>
                                    <label htmlFor="userName" className='px-1 font-semibold sm:text-[18px]'>Confirm New Password:</label>
                                    <input
                                        className='p-[2px] h-[35px] px-2 placeholder:italic rounded focus:outline-blue-500 pr-9'
                                        type={confirmForgetPasswordSvg ? "text " : "password"}
                                        required
                                        value={confirmForgetPasssword}
                                        onChange={(e) => {
                                            //  e.preventDefault()
                                            const value = e.target.value
                                            setConfirmForgetPasssword(value)
                                            if (value === forgetPasssword) {
                                                confirmForgetPassswordRef.current.style.display = "none"
                                            }
                                            else {
                                                confirmForgetPassswordRef.current.style.display = "block"

                                            }
                                        }}
                                        placeholder='e.g Abc$123*'
                                    />
                                    <div className='top-[80%] -translate-y-1/2 absolute right-2'>
                                        <button type='button' onClick={confirmForgetPasswordSvgChanger}>
                                            {confirmForgetPasswordLockSvg ?
                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-black cursor-default ">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.5 10.5V6a4.5 4.5 0 00-9 0v4.5M5.25 10.5h13.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75z" />
                                                </svg>) :
                                                (!confirmForgetPasswordSvg ? (<svg
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

                                </div>
                                {/* Email Error */}
                                <div ref={confirmForgetPassswordRef} className='text-red-500 px-2 mt-1 font-[500]'> </div>

                            </div>
                            {/* form button */}
                            <div className='flex items-center justify-center mt-2'>
                                <button type='submit' className='bg-green-400 text-white rounded-lg px-4 font-semibold hover:opacity-50 border-white border-[2px] p-2 text-[18px]'>
                                    Change
                                </button>
                            </div>

                        </form>

                    </div>

                    <div className='italic text-gray-500 font-semibold p-3 pb-0 mt-2 text-xl text-center'>
                        Back To
                        <NavLink to="/" className="text-blue-500 pl-2 underline decoration-blue-500">
                            Login
                        </NavLink>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default PasswordChanger