import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Store/Slice.js";

export const store = configureStore({
  reducer: {
    todo: todoreducer,
  },
  devTools: true, // <- you can add this explicitly
});
console.log("Redux store state:", store.getState());
