import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import courseReducer from "./slices/CourseSlice";
import lectureReducer from "./slices/videos";
const store = configureStore({
    reducer:{
        user : UserReducer,
        courses : courseReducer,
        lectures:lectureReducer
    }
})

export default store;