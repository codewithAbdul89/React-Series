import { createSlice } from "@reduxjs/toolkit"
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        isLoggedIn: !!localStorage.getItem("user"),
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        clearUser: (state) => {
            state.isLoggedIn = false
            state.user = null
            localStorage.removeItem("user")
        }
    }
})
export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer