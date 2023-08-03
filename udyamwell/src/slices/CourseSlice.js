import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    // all_courses:null,
    all_courses:[],
    course:null,
    error:false
}

// export const fetchAllCources= createAsyncThunk("lectures/fetchAllCourses",()=>{
//     return axios.get(`http://localhost:9000/courses/fetch-lecture-data`).then((res) =>res.data).catch((err)=>{
//         throw new Error(err.response.data.message); 
// });
// });

export const fetchAllCources= createAsyncThunk("lectures/fetchAllCourses",()=>{
    return axios.get(`http://localhost:9000/api/v1/courses/fetch-lecture-data`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

// export const createCourse= createAsyncThunk("lectures/createCourse",(data)=>{
//     return axios.post(`http://localhost:9000/courses/lecture-data`,data).then((res) =>res.data).catch((err)=>{
//         throw new Error(err.response.data.message); 
// });
// });

export const createCourse= createAsyncThunk("lectures/createCourse",(data)=>{
    return axios.post(`http://localhost:9000/api/v1/courses/lecture-data`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

// const coursesArray = all_courses?.courses || [];

const userSlice= createSlice({
    name:"courses",
    initialState,
    extraReducers:{
        [fetchAllCources.pending]:(state)=>{
            state.all_courses=null;
        },
        [fetchAllCources.fulfilled]:(state,action)=>{
            state.all_courses=action.payload;
            state.error= false;
        },
        [fetchAllCources.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [createCourse.pending]:(state)=>{
            state.all_courses=null;
        },
        
        [createCourse.fulfilled]:(state,action)=>{
            // state.all_courses.push(action.payload);
            state.error= false;
        },
        [createCourse.rejected]:(state,action)=>{
            state.error=action.error.message;
        }
    }
});
export default userSlice.reducer;


