import { configureStore, createReducer } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
const store = configureStore({
    reducer:{
        user : UserReducer,
    }
})

export default store;