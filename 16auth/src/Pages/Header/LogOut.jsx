import { useDispatch } from 'react-redux'
import { createPortal } from 'react-dom'
import { signOut } from "firebase/auth"
import { auth } from '../../Components/fireBaseAuth'
import { clearUser } from '../../Components/authSlice'
import { showPopup, setLoading, clearLoading } from '../../Components/PopUpSlice'
import { useNavigate } from 'react-router-dom'
import { CloseSvg } from '../../assets/Icons'
import { useState } from 'react'

function LogOut() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const logOut = async () => {
        dispatch(setLoading())

        try {
            await signOut(auth)
            dispatch(clearUser())

            dispatch(showPopup({
                message: "You LogOut successfully!",
                type: "success"
            }))

            navigate('/')

        } catch (error) {
            console.log(error)

            dispatch(showPopup({
                message: "Logout failed",
                type: "error"
            }))

        } finally {
            dispatch(clearLoading())
            setOpen(false)
        }
    }

    return (
        <div>
            {/* Popup */}
            {open && (
                <LogOutPopUp
                    onConfirm={logOut}
                    onClose={() => setOpen(false)}
                    message="Are you sure you want to log out ?"
                />
            )}

            {/* Logout Button */}
            <button
                className="sm:px-6 sm:w-full"
                onClick={() => setOpen(true)}
            >
                LogOut
            </button>
        </div>
    )
}

export default LogOut


export const LogOutPopUp = ({ onConfirm, onClose,message }) => {
    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/90 z-[100]">

            <div className="bg-brand-olive/90 w-[30%] sm:w-[90%] rounded-lg p-5">

                <div className="flex justify-between items-start gap-4">
                    <p className="text-slate-200 text-lg font-semibold">
                       {message}
                    </p>

                    <button onClick={onClose} className="hover:opacity-50">
                        <CloseSvg className="text-red-400 w-5 h-5" />
                    </button>
                </div>

                <div className="flex justify-center gap-6 mt-6">
                    <button
                        onClick={onConfirm}
                        className="bg-brand-gold text-white px-4 py-2 rounded-lg hover:opacity-80"
                    >
                        Yes
                    </button>

                    <button
                        onClick={onClose}
                        className="bg-brand-gold text-white px-4 py-2 rounded-lg hover:opacity-80"
                    >
                        No
                    </button>
                </div>

            </div>
        </div>,
        document.body
    )
}
