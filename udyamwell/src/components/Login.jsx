import React, { useState } from "react";
import { login } from "../assets";
import "./styles/register.css";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  // password field
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // login request
  const handleLogin = () => {
    const values = {
      email,
      password
    }
    console.log("login Values",values);
    axios
    .post(`http://localhost:9000/users/sign-in`,values)
    .then((res) => {
      console.log("response", res);
    })
    .catch((err) => {
      console.log("eer", err);
    });
  }

  return (
    <>
      <div className="loginContainer">
        {/* illustration */}
        <div className="logIllustration">
          <img src={login} alt="" />
        </div>
        {/* form */}
        <div className="loginForm">
          <Typography variant="h4" sx={{ color: "#236836" }}>
            Login Here!
          </Typography>
          <div className="mainForm">
         <Stack
         alignSelf={"center"}
         sx={{ width: "80%", margin: "1rem auto" }}
         spacing={4}
         >
         <Box sx={{mt:3}}>
              <TextField
                required
                name="email"
                variant="outlined"
                fullWidth
                type={"email"}
                label="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </Box>
            <Box>
            <FormControl sx={{ width:"100%" }} variant="outlined">
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
            </Box>
         </Stack>
          </div>
            <Box sx={{mt:3}}>
              <Button onClick={()=>handleLogin()} variant="contained">
                Login
              </Button>
            </Box>

          <Box>
            <Typography sx={{mt:3}}>Don't have an Account? <Link to='/register'>Click here to Register</Link></Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;
