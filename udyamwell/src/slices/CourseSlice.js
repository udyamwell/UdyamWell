import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCources= createAsyncThunk("user/registerUser",()=>{
    return axios.get(`http://localhost:9000/courses/fetch-lecture-data`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});
const initialState = {
    all_courses:null,
    course:null,
    error:false
}
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
        }
    }
});
export default userSlice.reducer;
