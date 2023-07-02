import React, { useState } from 'react';
import './styles/register.css';
import { register } from '../assets';
import { Alert, Box, Button, Snackbar, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PersonalInfo from './forms/PersonalInfo';
import Enterprise from './forms/Enterprise';
import { Link } from 'react-router-dom';
const Register = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState([
      { label: "Personal Info", completed: false },
      { label: "Enterprise", completed: false },
    ]);
    const forms = [
        <PersonalInfo />,
        <Enterprise/>
      ];
    //for snackbar
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
   //back form
   const backForm = () => {
    count > 0 && setCount(count - 1);
    let newStep = step;
    newStep[count].completed = false;
    setStep([...newStep]);
  };

    return (
        <>
        <div className="registerContainer">
            {/* illustration */}
            <div className="regIllustration">
                <img src={register} alt="" />
            </div>
            {/* form */}
            <div className="registerForm">
                <Typography variant='h4' sx={{color:'#236836'}} >Register with Us!</Typography>
             <div className="mainForm">
             <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{ mt: 14 }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              All fields are mandatory!
            </Alert>
          </Snackbar>
             <Stepper activeStep={count} color='#2e8446' sx={{pt:4}}>
            {step.map((step) => (
              <Step completed={step.completed}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {forms[count]}
             </div>
             {/*  */}
               {/* bitton */}
            <Box sx={{width:"60%",display:"flex",justifyContent:"space-between",mt:3}}>
            <Button
                // sx={{ position: "absolute"}}
                variant="outlined"
                onClick={backForm}
              >
                Back
              </Button>
              <Button
            //   type={count === 2 ? "submit" : "button"}
              variant="contained"
              sx={{color:"white"}}
              onClick={()=>setCount(count+1)}
            >
              {count === 1 ? "Place Order" : "Next"}
            </Button>
            </Box>
            {/*  */}
          <Box>
            <Typography sx={{mt:3}}>Already have an Account? <Link to='/login'>Click here to Login</Link></Typography>
          </Box>
            </div>
        </div>
        </>
    )
}

export default Register;