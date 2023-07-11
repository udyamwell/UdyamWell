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

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <>
//       <div style={{ margin: "12rem auto 0 auto", width: "80%",height:"100%" }}>
//           <div>
//             <h1 className="subHeading">Login here</h1>
//           </div>
//           <form action="">
//             <input
//               type="tel"
//               className="input"
//               placeholder="Enter your Contact Number"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your Email'"
//             />
//             <p style={{margin:"10px 0",fontSize:"16px",fontWeight:"bold"}}>Please check to agree before you proceed.</p>
//             <p>
//               <input
//                 id="terms"
//                 type="checkbox"
//                 name="terms"
//                 value="on"
//               />{"   "}
//               Remember Me
//             </p>
//                 <button className="submitButton"  style={{width:"100px",marginTop:"2rem"}}>Login</button>
//           </form>
//           <h4 style={{marginTop:"1.4rem"}}>If don't have an account? <Link>Click here to register</Link></h4>
//       </div>
//     </>
//   );
// };

export default Login;
