import React, { useEffect, useState } from "react";
import { login } from "../assets";
import "./styles/register.css";
import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/UserSlice.js";
import './styles/register.css';
const Login = () => {
  const { user,error } = useSelector((state) => state.user);
  useEffect(() => {
    user && navigate("/");
  }, [user]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  // password field
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // login request
  const handleLogin = async(e) => {
    e.preventDefault();
    const values = {
      email,
      password
    }
    dispatch(loginUser(values));
  }

  return (
    <>
      <div className="loginContainer">
        {/* illustration */}
        <div className="logIllustration">
          <img src={login} alt="" />
        </div>
        {/* form */}
        <form onSubmit={handleLogin}>
        <div className="loginForm" style={{width:"100%"}}> 
          <Typography variant="h4" sx={{ color: "#236836" }}>
            Login Here!
          </Typography>
          <div className="mainForm">
          {error && <Alert sx={{fontSize:"15px",p:0.3,mt:2,mb:0}} severity="error">{error}</Alert>}
         <Stack
         alignSelf={"center"}
         sx={{ width: "100%", margin: "1rem auto" }}
         spacing={4}
         >
         <Box sx={{mt:1}}>
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
              <Button type='submit' variant="contained">
                Login
              </Button>
            </Box>
          <Box>
            <Typography sx={{mt:3}}>Don't have an Account? <Link to='/register'>Click here to Register</Link></Typography>
            <Typography sx={{mt:1}}>Forgot Password? <Link to='/forgot-password'>Click here to reset your Password</Link></Typography>
          </Box>
        </div>
        </form>
       
      </div>
    </>
  );
};

export default Login;
