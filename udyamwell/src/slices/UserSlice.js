import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getUser= localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// const URL = import.meta.env.VITE_APP_URL;
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const initialState = {
    user: getUser,
    token: token,
    error : false
}

export const loginUser= createAsyncThunk("user/loginUser", (data)=>{
    console.log("loginSlice",data)
    return axios.post(`http://localhost:9000/users/sign-in`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err); 
});
});


const userSlice= createSlice({
    name:"user",
    initialState, reducers:{
        logout:(state)=>{ 
            state.user = null;
            state.error = false;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.user=null;
        },
        [loginUser.fulfilled]:(state,action)=>{
            console.log("user",action.payload);
            state.user=action.payload?.user;
            state.token = action.payload?.token;
            state.error= false;
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
        },
        [loginUser.rejected]:(state,action)=>{
            console.log("userdfazsd",action.error);
            console.log("userdwsadddddddd",action.payload);
            // state.error=action.error;
            
        },
    }
});
export const {logout}= userSlice.actions;
export default userSlice.reducer;
