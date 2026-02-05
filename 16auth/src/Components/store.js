import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import popupReducer from './PopUpSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer
    }
})