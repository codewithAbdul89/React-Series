import { useForm } from "react-hook-form"
import Input from "./Input"
import { auth } from "../Components/fireBaseAuth"
import { setLoading, clearLoading, showPopup } from "../Components/PopUpSlice"
import { sendPasswordResetEmail } from "firebase/auth"
import { useDispatch } from "react-redux"
import { mapFirebaseError } from "./Popup"

function ForgetPassword() {
    const dispatch = useDispatch()

    const { formState: { isSubmitting, errors, isValid }, register, handleSubmit, reset } = useForm({
        mode: "onChange",
    })

    const resetpassword = async (data) => {
        dispatch(setLoading())
        try {
            await sendPasswordResetEmail(auth, data.email, {
                url: "https://personal-web1.netlify.app/signin",
                handleCodeInApp: false,
            })
            dispatch(showPopup({
                message: "Password reset email sent! Check your inbox.",
                type: "success",
            }));
            reset()
        } catch (error) {
            const err = mapFirebaseError(error.code)
            dispatch(showPopup({
                message: err.message,
                type: err.type,
            }));
            console.log(error)
        } finally {
            dispatch(clearLoading())
        }

    }

    function getFormData(data) {
        if (isSubmitting) return;
        resetpassword(data)
    }



    return (
        <div className=" py-10 bg-[linear-gradient(135deg,#f7f7f2_0%,#f3d6d6_40%,#f2e1c7_75%,#fafafa_100%)] w-full flex justify-center items-center h-screen sm:relative">
            <div className='bg-white/60 sm:bg-transparent rounded-xl sm:shadow-none p-5 sm:p-[2px] shadows-2xl w-[80%] sm:w-[100%]  sm:absolute sm:top-[20%] '>
                <p className="text-center font-bold text-5xl sm:text-4xl pb-2 text-violet-500 sm:font-bold italic">Reset Password</p>
                <hr className="border-[1.2px]  border-black/30 sm:border-white w-full" />
                <form
                    onSubmit={handleSubmit(getFormData)}
                    className={`my-5 flex justify-center  flex-col sm:px-4 px-8  ${Object.keys(errors).length > 0 ? "gap-2" : "gap-3"}`}>
                    <p className="px-2 md:font-semibold text-xl text-gray-500 italic">Enter your registered Email here:</p>
                    <div className={`flex flex-col w-full    ${Object.keys(errors).length > 0 ? "space-y-3" : "space-y-5"} `}>
                        <Input
                            className={`sm:w-[100%] w-full p-2 rounded-lg border-[1.5px] ${errors.email ? "focus:outline-red-500 border-red-500" : "focus:outline-violet-500 border-violet-500"}`}
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email is not validate."
                                }

                            })}
                        />
                        {errors.email && <p className="text-red-500 px-3 mb-3">{errors.email.message}</p>}
                        <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className={`w-[80%] rounded-lg m-auto px-6 py-2 text-white font-semibold ${isSubmitting ? "bg-green-500" : "bg-violet-500"} ${isValid ? "opacity-100" : "opacity-40"}`}
                        >{isSubmitting ? "Sending reset email..." : "Reset"}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ForgetPassword