import { configureStore, createReducer } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import courseReducer from "./slices/CourseSlice";
const store = configureStore({
    reducer:{
        user : UserReducer,
        courses : courseReducer,
    }
})

export default store;