import React, { useState } from 'react';
import './styles/register.css';
import { register } from '../assets';
import { Alert, Box, Button, Snackbar, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PersonalInfo from './forms/PersonalInfo';
import Enterprise from './forms/Enterprise';
import { Link } from 'react-router-dom';
import axios  from 'axios';

const Register = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState([
      { label: "Personal Info", completed: false },
      { label: "Enterprise", completed: false },
    ]);

    const [enterpriseInfo,setEnterpriseInfo] = useState({
      ename: "",
      enterpriseType:"",
      socials:"",
      comment:"",
      checked:true
    });

    const [personalInfo,setPersonalInfo] = useState({
      name: "",
      email:"",
      phone_no:"",
      location:""
    });

    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:3000/register', {
            enterpriseInfo,
            personalInfo,
          });

        console.log(response.data);
  
        setEnterpriseInfo({
          ename: '',
          enterpriseType: '',
          socials: '',
          comment: '',
          checked: true,
        });
  
        setPersonalInfo({
          name: '',
          email: '',
          phone_no: '',
          location: '',
        });
  
        setCount(count + 1);

      } catch (error) {
        console.log(error);
      }

    };
  
    const forms = [
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />,
        <Enterprise personalInfo={enterpriseInfo} setPersonalInfo={setEnterpriseInfo} />
      ];
    //for snackbar
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

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
              // onClick={()=>setCount(count+1)}
              onClick={handleSubmit}
            >
              {count === 1 ? "Register" : "Next"}
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

// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <>
//       <div style={{ margin: "12rem auto 0 auto", width: "80%",height:"100%" }}>
//           <div>
//             <h1 className="subHeading">Register here</h1>
//           </div>
//           <form action="">
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter your Name"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your name'"
//             />
//             <input
//               type="email"
//               className="input"
//               placeholder="Enter your Email"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your Email'"
//             />
//             <input
//               type="tel"
//               className="input"
//               placeholder="Enter your Contact Number"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your Email'"
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter your Location"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your name'"
//             />
//             <input
//               type="text"
//               className="fullInput"
//               placeholder="Enterprise Name"
//               onfocus="this.placeholder = ''"
//               onblur="this.placeholder = 'Enter your name'"
//             />
//             <select className="input select">
//               <option value="type">Entrepreneur Type</option>
//               <option value="individual">Individual</option>
//               <option value="shg">SHG</option>
//               <option value="pvt">Private Limited</option>
//               <option value="opc">OPC</option>
//               <option value="llp">LLP</option>
//             </select>
//             <select className="input select">
//               <option value="select">How do you know about Us?</option>
//               <option value="whatsapp">Whatsapp</option>
//               <option value="socialMeda">Social Media</option>
//               <option value="udyamwell">through UdhyamWell</option>
//             </select>
//             <textarea
//               name="comments"
//               id=""
//               className="fullInput"
//               placeholder="Any additional Comments or questions?"
//             ></textarea>
//             <p style={{margin:"10px 0",fontSize:"16px",fontWeight:"bold"}}>Please check to agree before you proceed.</p>
//             <p>
//               <input
//                 id="terms"
//                 type="checkbox"
//                 name="terms"
//                 value="on"
//               />{"   "}
//               I agree
//             </p>
//                 <button className="submitButton" style={{float:"right"}}>Register</button>
//           </form>
//           <h4 style={{marginTop:"1.4rem"}}>If already have an account? <Link>Click here to login</Link></h4>
//       </div>
//     </>
//   );
// };

// export default Register;