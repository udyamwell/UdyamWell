import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ChangePassword = () => {
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const obj= useParams();
    const navigate = useNavigate();
    // console.log("obj",obj.id)
    const [error,setError] = useState(null);
    const [confirm_err, setConfirmErr] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  
    const handleMouseDownPassword1 = (event) => {
      event.preventDefault();
    };
    const handleConfirm = (val) =>{
        setConfirmPassword(val);
        if(!(val=== password)){
          setConfirmErr("Password should match");
      }else {
          setConfirmErr(null);
          return true;
      }
      return false;
      }

    const handleSubmit = ()=>{
      if(password===""){
        alert("Please enter your new password")
    }
    axios.put("http://localhost:9000/users/change-password",{id:obj.id,password}).then((res)=>{
            Swal.fire(`${res.data.message}`)
            setTimeout(() => {
              navigate('/login')
            }, 1500);
        }).catch((err)=> setError(err.response.data.message))
    }
    return (
        <>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10rem auto 5rem auto"}} color={'#236836'}>
            <Stack>
                <Typography variant="h3">Change Your PASSWORD</Typography>
                {error && <p>{error}</p>}
                <FormControl sx={{ width:"100%",mt:4 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
          {/*  */}
          {confirm_err && <h5 style={{color:"red",marginTop:"30px"}}>{confirm_err}</h5>}
          <FormControl sx={{width:"100%" ,mt:4 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword1 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            onChange={(e) => handleConfirm(e.target.value)}
              label="Confirm Password"
              value={confirmPassword}
            />
          </FormControl>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:5}}>
                    <Button type="submit" onClick={handleSubmit} variant="contained">Submit</Button>
                </Box>
            </Stack>
        </Box>
        </>
    )
}

export default ChangePassword;