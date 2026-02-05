import { createSlice } from "@reduxjs/toolkit";


const popupSlice = createSlice({
    name: "popup",
    initialState: {
        visible: false,
        message: "",
        type: "info",
        duration: 3000,
        progress: 100,
        loading: false
    },
    reducers: {
        showPopup: (state, action) => {
            state.visible = true;
            state.message = action.payload.message;
            state.type = action.payload.type || "info";
            state.duration = action.payload.duration || 3000;
            state.progress = 100;
        },
        hidePopup: (state) => {
            state.visible = false;
            state.message = "";
            state.progress = 100;
        },
        updateProgress: (state, action) => {
            state.progress = action.payload;
        },
        setLoading: (state) => {
            state.loading = true
        },
        clearLoading:(state)=>{
            state.loading=false
        }
    },
});

export const { showPopup, hidePopup, updateProgress,setLoading,clearLoading } = popupSlice.actions;
export default popupSlice.reducer;
