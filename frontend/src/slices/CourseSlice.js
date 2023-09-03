import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    all_courses:null,
    course:null,
    error:false
}


export const fetchAllCources= createAsyncThunk("lectures/fetchAllCourses",()=>{
    return axios.get(`https://udyamwell.azurewebsites.net/api/v1/courses/fetch-lecture-data`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const createCourse= createAsyncThunk("lectures/createCourse",(data)=>{
    return axios.post(`https://udyamwell.azurewebsites.net/api/v1/courses/lecture-data`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const updateCourse= createAsyncThunk("lectures/updateCourse",({_id,data})=>{
    console.log("slice",_id,data)
    return axios.put(`https://udyamwell.azurewebsites.net/api/v1/courses/update-lecture-data/${_id}`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const deleteCourse= createAsyncThunk("lectures/deleteCourse",(_id)=>{
    console.log("slice",_id)
    return axios.delete(`https://udyamwell.azurewebsites.net/api/v1/courses/delete-lecture-data/${_id}`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});
const courseSlice= createSlice({
    name:"courses",
    initialState,
    extraReducers:{
        [fetchAllCources.pending]:(state)=>{
            state.all_courses=null;
        },
        [fetchAllCources.fulfilled]:(state,action)=>{
            state.all_courses=action.payload.courses;
            state.error= false;
        },
        [fetchAllCources.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [createCourse.fulfilled]:(state,action)=>{
            state.all_courses.push(action.payload.data);
            state.error= false;
        },
        [createCourse.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [updateCourse.pending]: (state) => {
            console.log("worked");
          },
          [updateCourse.fulfilled]: (state, action) => {
            let { _id } = action.payload;
            let index = state.all_courses.findIndex(
              (course) => course._id === _id
            );
            console.log("index", index);
            state.loading = false;
            state.all_courses[index] = action.payload;
          },
          [updateCourse.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          },
          [deleteCourse.fulfilled]: (state, action) => {
            state.loading = false;
            const { _id } = action.payload;
            let index = state.all_courses.findIndex(
              (course) => course._id === _id
            );
            state.all_courses.splice(index, 1);
          },
          [deleteCourse.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          },
    }
});
export default courseSlice.reducer;


