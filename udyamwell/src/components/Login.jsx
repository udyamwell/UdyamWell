import React from "react";
import { login } from "../assets";
import "./styles/register.css";
import { Box, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Login = () => {
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
            <Box>
              <TextField
                required
                //   onChange={handleChange}
                name="email"
                //   value={values?.email}
                variant="standard"
                fullWidth
                type={"email"}
                label="Email"
              />
            </Box>
            <Box>
              <TextField
                required
                //   onChange={handleChange}
                name="Enterprise Name"
                //   value={values?.email}
                variant="standard"
                fullWidth
                type={"text"}
                label="Enterprise Name"
              />
            </Box>
          </div>
          <Box>
            <Typography sx={{mt:3}}>Don't have an Account? <Link to='/register'>Click here to Register</Link></Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;
