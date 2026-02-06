import { auth, db } from '../Components/fireBaseAuth'
import { useDispatch } from "react-redux"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setUser } from '../Components/authSlice'
import Input from "./Input"
import { useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import { doc, setDoc } from "firebase/firestore"
import { showPopup, setLoading, clearLoading } from '../Components/PopUpSlice'
import { mapFirebaseError } from './Popup'
import { svg1, svg2 } from '../assets/Icons'
import { Link, useNavigate } from 'react-router-dom'

function SignUpPage() {
    const { handleSubmit, register, watch, setFocus, formState: { isSubmitting, errors }, reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    })

    useEffect(() => {
        setFocus("userName")
    }, [])

    const password = watch("password")
    const navigate = useNavigate()

    const [passwordIcon, setPasswordIcon] = useState(false)
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false)



    const dispatch = useDispatch()
    const signUp = async (data) => {
        dispatch(setLoading())
        try {

            const res = await createUserWithEmailAndPassword(auth, data.email, data.password)

            dispatch(showPopup({
                message: "SignUp Successfully!",
                type: "success"
            }))

            await setDoc(doc(db, "users", res.user.uid), {
                email: data.email,
                userName: data.userName,
                createdAt: new Date()
            })


            await updateProfile(res.user, {
                displayName: data.userName,
            });

            dispatch(setUser({
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName
            }))
            navigate("/", { replace: true })
            reset()



        }
        catch (error) {
            console.log(error);
            const popupData = mapFirebaseError(error.code)
            dispatch(showPopup({
                message: popupData.message,
                type: popupData.type
            }))
        } finally {
            dispatch(clearLoading())

        }
    }


    const getData = (data) => {
        signUp(data)
    }

    return (
        <>


            <div className=" py-10 bg-[linear-gradient(135deg,#f7f7f2_0%,#f3d6d6_40%,#f2e1c7_75%,#fafafa_100%)] w-full flex justify-center items-center min-h-screen sm:relative">

                <div className='bg-white sm:bg-transparent rounded-3xl  p-5 sm:p-[2px] shadows-2xl w-[80%] sm:w-[93%] sm:absolute top-[10%] '>
                    <p className='text-center text-6xl sm:text-5xl font-semibold font-serif italic text-teal-300'>SignUp Here</p>
                    <hr className='border sm:border-white border-teal-500 mt-2' />
                    <div className='grid grid-cols-2 sm:block w-full mt-4 h-full '>
                        {/* for img */}
                        <div className='sm:hidden w-[80%] flex justify-center items-center  '><img src="https://i.ibb.co/k2sx1YNq/image.png" className='w-[70%] rounded-full  border-[10px] border-[linear-gradient(135deg,#f7f7f2_0%,#f3d6d6_40%,#f2e1c7_75%,#fafafa_100%)]' alt="" /></div>
                        {/* for inputs */}

                        <form
                            onSubmit={handleSubmit(getData)}
                            className={`pr-[10%] sm:pr-0 sm:w-full flex flex-col ${Object.keys(errors).length > 0 ? "gap-0" : "gap-4"}`}>
                            {/* userName */}
                            <div className='flex gap-[4px] flex-col'>
                                <p className='text-blue-400  font-sans text-2xl px-[1.5px] font-[650]'>UserName:</p>
                                <Input
                                    {...register("userName", {
                                        required: "UserName is required.",
                                        minLength: { value: 3, message: "At least three letters is neccessary." },
                                        maxLength: { value: 25, message: "UserName should be less then 26 letters." }
                                    })}
                                    placeholder="abc"
                                    className={`w-full placeholder:text-gray-400 border-[1.5px] caret-teal-500   shadow-2xl  shadow-teal-200  rounded-lg px-1 py-[5px] ${errors.userName ? "border-red-500 focus:outline-red-500 " : "border-gray-300 focus:outline-teal-400"}`} />
                                {errors.userName && <p className='pl-1 text-sm text-red-400'>{errors.userName.message}</p>}

                            </div>
                            {/* email */}
                            <div className='flex gap-[3px] flex-col'>
                                <p className='text-blue-400 italic  font-sans text-2xl px-[1.5px] font-[650]'>Email:</p>
                                <Input
                                    {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Email is not validate."
                                        }
                                    })}
                                    placeholder="abchello@gmail.com"
                                    className={` placeholder:text-gray-400 w-full  shadow-2xl border-[1.5px]  shadow-teal-200  rounded-lg p-1 py-[5px] ${errors.email ? "border-red-500  focus:outline-red-500" : "border-gray-300 focus:outline-teal-400"}`} />
                                {errors.email && <p className='pl-1 text-sm text-red-400'>{errors.email.message}</p>}
                            </div>
                            {/* password */}
                            <div className='flex gap-[3px] flex-col '>
                                <p className='text-blue-400 italic  font-sans text-2xl px-[1.5px] font-[650]'>Password:</p>
                                <div className='relative'>
                                    <Input
                                        {...register("password", {
                                            required: "Password is required.",
                                            minLength: { value: 8, message: "At least 8 character is required." },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                                                message: "Password should include uppercase, lowercase, number & special character."
                                            }
                                        })}
                                        placeholder="A@abc123"
                                        type={passwordIcon ? "text" : "password"}
                                        className={`pr-10 placeholder:text-gray-400 w-full border-[1.5px]  py-[5px] shadow-2xl  shadow-teal-300  rounded-lg p-1 ${errors.password ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-teal-400"} relative`} />
                                    <button
                                        onClick={() => {
                                            setPasswordIcon(p => !p)
                                        }}
                                        className='absolute right-2 top-[50%] -translate-y-1/2 text-gray-600 hover:text-gray-900' type="button">
                                        {!passwordIcon ? (svg1) : (svg2)}
                                    </button>
                                </div>


                                {errors.password && <p className='pl-1 text-sm text-red-400'>{errors.password.message}</p>}
                            </div>
                            {/* confirmPassword */}
                            <div className='flex gap-[3px] flex-col'>
                                <p className='text-blue-400  font-sans text-2xl px-[1.5px] font-[650] italic'>Confirm Password:</p>
                                <div className='relative'>
                                    <Input
                                        type={confirmPasswordIcon ? "text" : "password"}
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password.",
                                            validate: (value) => value == password || "Password does not match."

                                        })}
                                        placeholder="A@abc123"
                                        className={`pr-10 placeholder:text-gray-400 w-full  border-[1.5px]  py-[5px] shadow-2xl  shadow-teal-200  rounded-lg p-1 ${errors.confirmPassword ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-teal-400"}`} />
                                    <button
                                        onClick={() => {
                                            setConfirmPasswordIcon(p => !p)
                                        }}
                                        className='absolute right-2 top-[50%] -translate-y-1/2 text-gray-600 hover:text-gray-900' type="button">
                                        {!confirmPasswordIcon ? (svg1) : (svg2)}
                                    </button>

                                </div>
                                {errors.confirmPassword && <p className='pl-1 text-sm text-red-400'>{errors.confirmPassword.message}</p>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-center items-center flex-col '>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className={`text-lg mt-5 sm:mt-2 text-white px-8  font-semibold  sm:py-2 mb-1  py-[10px] rounded-lg hover:opacity-45 ${isSubmitting ? "bg-green-500" : "bg-teal-400"}`}>
                                    {isSubmitting ? "Submitting" : "SignUp!"}
                                </button>
                                <p className='mt-2'>
                                    Already have an account? <Link to="/signin" className='text-teal-400 font-semibold hover:opacity-45 sm:text-lg underline text-decoration-teal-400'>SignIn</Link>
                                </p>
                            </div>

                        </form>
                    </div>

                </div >
            </div >
        </>
    )
}

export default SignUpPage