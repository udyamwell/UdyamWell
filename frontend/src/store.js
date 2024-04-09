import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";
import courseReducer from "./slices/CourseSlice";
import lectureReducer from "./slices/videos";
import SettingsReducer from "./slices/SettingsSlice"; // Import the SettingsReducer

const store = configureStore({
  reducer: {
    user: UserReducer,
    courses: courseReducer,
    lectures: lectureReducer,
    settings: SettingsReducer, // Include the settings slice with the correct reducer name
  },
});

export default store;
