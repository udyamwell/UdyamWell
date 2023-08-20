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

export const fetchAllUsers = createAsyncThunk("user/fetchAllUsers",()=>{
    let token = localStorage.getItem("token");
    return axios.get(`https://udyamwell-testing.azurewebsites.net:80/users`,{headers:{Authorization: `Bearer ${token}`}}).then(res=>res.data).catch(err=>{
        throw new Error(err.response.data.message)
    })
})

export const updateUserAdmin = createAsyncThunk("user/updateUserAdmin",({_id,data})=>{
    let token = localStorage.getItem("token");
    return axios.put(`https://udyamwell-testing.azurewebsites.net:80/users/update-admin/${_id}`,data,{headers:{Authorization: `Bearer ${token}`}}).then(res=>res.data).catch(err=>{
        throw new Error(err.response.data.message)
    })
})

export const registerUser= createAsyncThunk("user/registerUser", (data)=>{
    return axios.post(`https://udyamwell-testing.azurewebsites.net:80/users/sign-up`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const loginUser= createAsyncThunk("user/loginUser", (data)=>{
    return axios.post(`https://udyamwell-testing.azurewebsites.net:80/users/sign-in`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const updateUser= createAsyncThunk("user/updateUser", (data)=>{
    let token = localStorage.getItem("token");
    return axios.put(`https://udyamwell-testing.azurewebsites.net:80/users/update`,data,{headers:{Authorization: `Bearer ${token}`}}).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});

export const deleteUser = createAsyncThunk("user/deleteUser",(_id)=>{
    let token = localStorage.getItem("token");
    return axios.delete(`https://udyamwell-testing.azurewebsites.net:80/users/${_id}`,{headers:{Authorization: `Bearer ${token}`}}).then(res=>res.data).catch(err=>{
        throw new Error(err.response.data.message)
    })
})


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
        [fetchAllUsers.pending]:(state)=>{
            state.users=null;
        },
        [fetchAllUsers.fulfilled]:(state,action)=>{
            state.users=action.payload;
            state.error=false;
        },
        [fetchAllUsers.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [updateUserAdmin.fulfilled]:(state,action)=>{
            let {_id} = action.payload;
            let index = state.users.findIndex(user=>user._id===_id);
            state.users[index]=action.payload;
            state.error= false;
        },
        [updateUserAdmin.rejected]:(state,action)=>{
            state.error=action.error.message;           
        },
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
        [deleteUser.pending]:(state)=>{
            // state.users=null;
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.loading = false;
            state.error=false;
            const { _id } = action.payload;
            let index = state.users.findIndex(
              (user) => user._id === _id
            );
            state.users.splice(index, 1);
        },
        [deleteUser.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
    }
});
export const {logout}= userSlice.actions;
export default userSlice.reducer;
