import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
  } from "@mui/material";
  import React, { useState } from "react";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  
  const Password = ({handleChange, values}) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const [confirm, setConfirm] = useState("");
    const [confirm_err, setConfirmErr] = useState(null);
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
      let pass = values?.password;
      setConfirm(val);
      if(!(val=== pass)){
        setConfirmErr("Password should match");
    }else {
        setConfirmErr(null);
        return true;
    }
    return false;
    }
    return (
      <>
        <Stack
          alignSelf={"center"}
          sx={{ width: "80%", margin: "1rem auto" }}
          spacing={4}
        >
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
              onChange={handleChange}
              value={values?.password}
            />
          </FormControl>
          {/*  */}
          {confirm_err && <h6 style={{color:"red",m:0}}>{confirm_err}</h6>}
          <FormControl sx={{width:"100%"  }} variant="outlined">
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
              value={confirm}
            />
          </FormControl>
        </Stack>
      </>
    );
  };
  
  export default Password;
  