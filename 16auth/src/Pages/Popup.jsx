import { useDispatch, useSelector } from "react-redux";
import { hidePopup, updateProgress } from '../Components/PopUpSlice'
import { useEffect } from "react";

const typeStyles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-yellow-500 text-black",
};

const Popup = () => {
    const dispatch = useDispatch();
    const { visible, message, type, duration, progress } =
        useSelector((state) => state.popup);

    useEffect(() => {
        if (!visible) return;

        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const percent = Math.max(100 - (elapsed / duration) * 100, 0);
            dispatch(updateProgress(percent));
        }, 30);

        const timer = setTimeout(() => {
            dispatch(hidePopup());
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [visible, duration, dispatch]);


    if (!visible) return null;

    return (
        <div
            className={`fixed top-5 right-5 w-72 rounded shadow-xl text-white overflow-hidden z-20 pr-1
            animate-slide-in ${typeStyles[type]}`}
        >
            {/* Close Button */}
            <button
                onClick={() => dispatch(hidePopup())}
                className="absolute top-0 right-3 text-[40px] font-bold hover:opacity-70 z-50"
            >
                ×
            </button>

            {/* Message */}
            <div className="px-4 py-3 text-lg font-medium">
                {message}
            </div>

            {/* Progress Bar */}
            <div className="h-[6px] bg-white/30">
                <div
                    className={`h-full bg-white transition-all `}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default Popup;



export const mapFirebaseError = (error) => {
    switch (error) {
        case "auth/configuration-not-found":
            return {
                message: "User does not exist",
                type: "error"

            }
        case "auth/invalid-credential":
            return {
                message: "Incorrect Information!",
                type: "error",
            }
        case("auth/user-disabled"):
            return{
                message:"Your account has been disabled. Please contact the administrator.",
                type:"info"
            }

        case "auth/email-already-in-use":
            return {
                message: " This email is already registered. Please login!",
                type: "error",
            };

        case "auth/invalid-email":
            return {
                message: "Invalid email format",
                type: "warning",
            };

        case "auth/network-request-failed":
            return {
                message: "Network error. Check your connection",
                type: "info",
            };
        default:
            return {
                message: "Something went wrong. Try again",
                type: "error",
            };
    }
}




export  const LoadingFunction = () => {
    return (
        <div className='w-full h-screen z-[1000] animation-spin flex justify-center items-center fixed  bg-opacity-80 bg-black '>
            <div className='animate-spin w-16 h-16 border-[3px] border-white border-t-blue-500 rounded-full'>
            </div>
        </div>
    )
}
