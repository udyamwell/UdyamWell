import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getUser= localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// const URL = import.meta.env.VITE_APP_URL;
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const initialState = {
    user: getUser,
    token: token,
    error : false,
}

export const registerUser= createAsyncThunk("user/registerUser", (data)=>{
    return axios.post(`http://localhost:9000/users/sign-up`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const loginUser= createAsyncThunk("user/loginUser", (data)=>{
    return axios.post(`http://localhost:9000/users/sign-in`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const updateUser= createAsyncThunk("user/updateUser", (data)=>{
    console.log("updateSlice",data)
    return axios.put(`http://localhost:9000/users/update`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
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
        [registerUser.pending]:(state)=>{
            state.user=null;
        },
        [registerUser.fulfilled]:(state,action)=>{
            state.user=action.payload?.user;
            state.token = action.payload?.token;
            state.error= false;
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
        },
        [registerUser.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [loginUser.pending]:(state)=>{
            state.user=null;
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.user=action.payload?.user;
            state.token = action.payload?.token;
            state.error= false;
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
        },
        [loginUser.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        // [updateUser.pending]:(state)=>{
        //     state.user=null;
        // },
        [updateUser.fulfilled]:(state,action)=>{
            console.log("user",action.payload);
            state.user=action.payload?.user;
            state.token = action.payload?.token;
            state.error= false;
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
        },
        [updateUser.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
    }
});
export const {logout}= userSlice.actions;
export default userSlice.reducer;
