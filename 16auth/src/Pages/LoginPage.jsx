import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Input from "./Input"
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../Components/authSlice'
import { auth, db } from '../Components/fireBaseAuth'
import { showPopup, setLoading, clearLoading } from '../Components/PopUpSlice'
import { mapFirebaseError } from './Popup'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { svg1, svg2 } from '../assets/Icons'
function LoginPage() {

    const { register, handleSubmit, formState: { isSubmitting, errors },setFocus } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    })
    const [passwordIcon, setPasswordIcon] = useState(false)
    useEffect(() => {
      setFocus("email")
    }, [])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Login = async (data) => {
        dispatch(setLoading())
        try {
            const res = await signInWithEmailAndPassword(auth, data.email, data.password)
            const snap = await getDoc(doc(db, "users", res.user.uid))
            dispatch(setUser({
                uid: res.user.uid,
                email: res.user.email,
                displayName: snap.exists()
                    ? snap.data().userName
                    : res.user.displayName
            }))
            dispatch(showPopup({
                message: "You Login Successfully!",
                type: "success"
            }))
            navigate('/', { replace: true })


        } catch (error) {
            console.log(error.code);
            const popupData = mapFirebaseError(error.code)
            dispatch(showPopup({
                message: popupData.message,
                type: popupData.type
            }))
        } finally {
            dispatch(clearLoading())

        }
    }

    function handleLogin(data) {
        Login(data)
    }

    return (

        <div className=" py-8 bg-[linear-gradient(135deg,#f7f7f2_0%,#f3d6d6_40%,#f2e1c7_75%,#fafafa_100%)] w-full flex justify-center items-center min-h-screen sm:relative">
            <div className='bg-white rounded-3xl  py-3 sm:bg-transparent shadow-2xl w-[80%] sm:w-[93%] sm:absolute sm:top-[10%] '>
                <p className='text-center text-6xl sm:text-5xl font-semibold font-serif italic bg-gradient-to-t from-cyan-500 via-sky-500 to-teal-500 text-transparent bg-clip-text p-1'>Login Page</p>
                <hr className='border sm:border-white border-cyan-500 mt-2' />

                <div className=' flex  sm:block w-full mt-4   '>

                    {/* Inputs */}
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className=' w-full flex flex-col mr-10 px-7 sm:p-3 py-3 gap-5 '>
                        <div className='flex flex-col w-full gap-3 sm:gap-2'>
                            <label htmlFor="Email" className='text-blue-400  font-sans text-[28px] px-[1.5px] font-[650] italic'>Email:</label>
                            <Input
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Email is not validate."
                                    }
                                })}
                                placeholder="abchello@gmail.com"
                                // ref={(e) => {
                                //     register("email").ref(e)
                                //     InputRef.current = e
                                // }}
                                className={`  shadow-2xl shadow-cyan-500  p-1 py-[5px] border-[1.5px] rounded-lg ${errors.email ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-cyan-400"}`}
                            />
                            {errors.email && <p className='text-red-500 sm:text-sm pl-1'>{errors.email.message}</p>}

                        </div>
                        <div className='flex flex-col w-full gap-3 sm:gap-2'>
                            <label htmlFor="Email" className='text-blue-400  font-sans text-[28px] px-[1.5px] font-[650] italic'>Password:</label>
                            <div className='relative w-full'>
                                <Input

                                    type={passwordIcon ? "text" : "password"}
                                    className={` shadow-2xl shadow-cyan-500 border-[1.5x] p-1 py-[5px] rounded-lg w-full  ${errors.password ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-cyan-400"}  `}
                                    {...register("password", {
                                        required: "Password is required.",
                                        minLength: { value: 8, message: "At leat 8 character is required." },
                                        // pattern: {
                                        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                                        //     message: "Password should include uppercase, lowercase, number & special character."
                                        // }
                                    })}
                                    placeholder="A@abc123"
                                />
                                <button
                                    className='absolute -translate-y-1/2 right-2 top-[50%] '
                                    type="button"
                                    onClick={() => {
                                        setPasswordIcon(p => !p)
                                    }}
                                >
                                    {!passwordIcon ? (svg1) : (svg2)}
                                </button>
                            </div>
                            {errors.password && <p className='pl-1 text-red-500 sm:text-sm'>{errors.password.message}</p>}
                        </div>
                        <div className='px-3 text-lg underline decoration-blue-400'>
                            <Link
                                to="/forgetpassword"
                                className='text-lg text-sky-500 font-semibold'>Reset Password?</Link>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button
                                disabled={isSubmitting}
                                className={`${isSubmitting ? "bg-green-500" : "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"} px-12 py-[10px] mt-2 rounded-lg font-semibold text-xl text-white hover:opacity-50 `}
                            >{isSubmitting ? "Loading" : "Login"}</button>
                        </div>
                    </form>
                    {/* Img */}
                    <div className='w-[100%] sm:hidden '>
                        <img
                            className='w-[100%] '
                            src="https://i.ibb.co/W4KQHT33/image.png"
                            alt="main_img" />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default LoginPage