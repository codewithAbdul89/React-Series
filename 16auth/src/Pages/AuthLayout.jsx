import { Outlet } from "react-router-dom";
import { LoadingFunction } from "./Popup";
import { useSelector } from "react-redux";
import Popup from "./Popup";

function AuthLayout() {
    const isLoading = useSelector((state) => state.popup.loading)
    return (
        <div className="w-full ">
            <Popup />
            {isLoading && <LoadingFunction />}
            <Outlet />
        </div>
    )
}

export default AuthLayout