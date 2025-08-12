import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../Context/UserContext';
import { NavLink, useNavigate } from 'react-router-dom';



function Verification() {

    useEffect(() => {

        const prevColor = document.body.style.background
        document.body.style.background = "linear-gradient(135deg, rgb(255, 183, 178), rgb(186, 225, 255))";
        return () => {
            document.body.style.background = prevColor
        }

    }, [])

    const navigate = useNavigate()
    const { users, setMessage, setLoading } = useContext(UserContext)
    const [forgetUserName, setForgetUserName] = useState('')
    const [forgetEmail, setForgetEmail] = useState('')
    const forgetUserNamErroreRef = useRef()
    const forgetEmailErrorRef = useRef()
    let valid = true


    function forgetFormSubmit(e) {
        e.preventDefault()

        if (forgetUserName.trim().length < 3) {
            valid = false
            forgetUserNamErroreRef.current.innerHTML = `Password must be at least <span class="font-semibold text-black"> 3</span> letter.`

        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgetEmail)) {
            valid = false
            forgetEmailErrorRef.current.innerHTML = "Email is invalid."
        }


        if (valid) {

            const matchedUser = users.find(u => u.username === forgetUserName && u.Email === forgetEmail)
            if (matchedUser) {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setMessage("Matched Information!")
                    localStorage.setItem("userDetails", JSON.stringify(matchedUser))
                    navigate('/passwordChanger')
                    return
                }, 3000)

            }

            else {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)

                    setMessage("Invalid Information!")

                }, 1000)
            }

        }


    }



    return (
        <div className='h-screen w-full flex items-center justify-center '>


            <div className='w-[33%]  min-h-[35%] sm:w-[95%] rounded-lg shadow bg-white/30 pt-1 p-3'
            >
                <div  >
                    <p className='text-center  text-[40px] font-bold text-teal-400'>
                        Verification
                    </p>
                    <hr className='border-[1.2px] mt-0 border-white' />
                    {/* Inputs */}
                    <div className='mt-2'>
                        <form onSubmit={forgetFormSubmit} className='gap-y-3 flex flex-col'>
                            {/* username */}
                            <div>
                                <div className='flex flex-col gap-y-1 relative '>
                                    <label htmlFor="userName" className='px-1 font-semibold sm:text-[18px] '>Enter your UserName:</label>
                                    <input
                                        className='p-[2px] h-[35px]  px-2 placeholder:italic rounded focus:outline-blue-500 pr-9'
                                        type="text"
                                        required
                                        value={forgetUserName}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            setForgetUserName(value)
                                            if (value.trim().length >= 3) {
                                                forgetUserNamErroreRef.current.style.display = "none"

                                            }
                                            else {
                                                forgetUserNamErroreRef.current.style.display = "block"
                                            }
                                        }}
                                        placeholder='e.g Abc'
                                    />
                                    <div className='absolute right-2 top-[45%]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 116.06"
                                            className="w-5 h-9 text-gray-600  pointer-events-none"
                                            fill="currentColor">
                                            <path
                                                d="M0 116.06c3.81-31.71 2.87-28.85 40.09-38.82 4.77 21.43 41.49 21.59 42.21 0 39.43 10.39 37.7 6.58 40.58 38.64zM28 22c16.1-19.9 34.67-30.73 48.61-13 16.8.88 23.53 25.55 10.14 36.79 0 .22 0 .44-.08.66a7.31 7.31 0 0 1 1.55-.3 4.86 4.86 0 0 1 2.74.52 3.87 3.87 0 0 1 1.91 2.31c.7 2.19-1.65 11.62-3.51 13.09a3.89 3.89 0 0 1-2.85.69l-.06 1.62c-.13 6.62-3.37 8.69-7.61 12.67-.55.52-1.12 1-1.63 1.55C72.42 81 67.73 83 63 83s-9.71-2.07-14.22-6.08c-.68-.61-1.14-1-1.59-1.39C43 72 39.52 69.94 38.86 62.66a5 5 0 0 1-2.81-.66c-3.47-2-4.72-11.25-3.53-14.13.87-2.42 2.2-3.21 4-3.16C32.26 41.92 39.15 25.33 28 22zm11.3 26.66c-6.82-2.38-4.58 12.13.54 10.6.15 0 .31-.05.47-.08a1.59 1.59 0 0 1 1.69 1.55c.17 7.24 3.38 9 7.28 12.38.6.52 1.23 1 1.63 1.42 3.93 3.49 8 5.29 12.1 5.29s7.87-1.72 11.53-5.26c4.94-4.77 8.84-6.41 8.19-14.18a1.62 1.62 0 0 1 .26-1 1.6 1.6 0 0 1 2.22-.45c4.23 2.8 6-9.85 3.32-9.64-1.85.14-2.91 1.7-4.09 1.5a1.6 1.6 0 0 1-1.31-1.84c1.5-8.79.82-14.51-1.06-18.41a15.66 15.66 0 0 0-7.09-7c-10.49 8-20.09 4-28.17 10.74-3.42 2.85-5.2 7.06-3.91 13a1.6 1.6 0 0 1 0 1c-.63 1.73-2.35.83-3.51.42z" />
                                        </svg>
                                    </div>

                                </div>
                                {/* username Error */}
                                <div ref={forgetUserNamErroreRef} className='text-red-500 px-2 mt-1'> </div>
                            </div>


                            {/* Email */}

                            <div>
                                <div className='flex flex-col gap-y-1 relative'>
                                    <label htmlFor="userName" className='px-1 sm:text-[18px] font-semibold '>Enter your Email:</label>
                                    <input
                                        className='p-[2px] h-[35px] px-2 placeholder:italic rounded focus:outline-blue-500 pr-9'
                                        type="text "
                                        required
                                        id="userName"
                                        value={forgetEmail}
                                        onChange={(e) => {
                                            setForgetEmail(e.target.value)
                                            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgetEmail)) {
                                                forgetEmailErrorRef.current.style.display = "none"
                                            }
                                            else {
                                                forgetEmailErrorRef.current.style.display = "block"

                                            }
                                        }}
                                        placeholder='e.g abc@gmail.com'
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
                                {/* Email Error */}
                                <div ref={forgetEmailErrorRef} className='text-red-500 px-2 mt-1 font-[500]'> </div>

                            </div>
                            {/* form button */}
                            <div className='flex items-center mt-4 justify-center pb-4'>
                                <button type='submit' className='bg-teal-400 text-white rounded-lg px-6 font-semibold hover:opacity-50  text-[18px] border-white border-[2px] p-[9px]'>
                                    Verify
                                </button>
                            </div>

                        </form>


                    </div>

                </div>
                <div className='italic sm:text-[22px] text-gray-500 font-semibold mt-1 pb-0  text-xl text-center'>
                    Back To
                    <NavLink to="/" className="text-teal-400 sm:text-[22px] pl-2 underline decoration-teal-400">
                        Login
                    </NavLink>
                </div>

            </div>

        </div >
    )
}

export default Verification