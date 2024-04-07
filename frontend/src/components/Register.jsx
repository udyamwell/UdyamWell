import React, { useEffect, useState } from "react";
import "./styles/register.css";
import { register } from "../assets";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import PersonalInfo from "./forms/PersonalInfo";
import Enterprise from "./forms/Enterprise";
import Password from "./forms/password";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/UserSlice";
// import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Bg_about from "../assets/Bg_about2.png";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { otp } = useParams();

  const { user, error } = useSelector((state) => state.user);
  useEffect(() => {
    user && navigate("/");
    setTimeout(() => {
      if (error) {
        window.location.reload();
        navigate("/login");
      }
    }, 2000);
  }, [user, error, navigate]);
  // stepper
  const [count, setCount] = useState(0);
  const [step, setStep] = useState([
    { label: "Personal Info", completed: false },
    { label: "Enterprise", completed: false },
    { label: "Password", completed: false },
  ]);
  // values
  const initialValues = {
    name: "",
    // email: "",
    phoneNum: 0,
    location: "",
    eName: "",
    enterpriseType: "",
    socials: "",
    comment: "",
    password: "",
    otp: otp,
  };
  // submit function
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("entered submission");
      dispatch(registerUser(values));
      // !error &&
      //   Swal.fire(
      //     "You are registered.",
      //     "Please check your Email for verification.",
      //     "success"
      //   );
    },
  });

  const forms = [
    <PersonalInfo handleChange={handleChange} values={values} />,
    <Enterprise handleChange={handleChange} values={values} />,
    <Password handleChange={handleChange} values={values} />,
  ];
  //for snackbar
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // next form
  const nextForm = () => {
    let { name, phoneNum, location, eName, enterpriseType, socials } = values;
    if (
      count === 0 &&
      name !== "" &&
      phoneNum !== 0 &&
      // email.match(
      //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      // ) &&
      location !== ""
    ) {
      let newStep = step;
      newStep[count].completed = true;
      setStep([...newStep]);
      count < 2 && setCount(count + 1);
    } else if (
      count === 1 &&
      eName !== "" &&
      enterpriseType !== "" &&
      socials !== ""
    ) {
      let newStep = step;
      newStep[count].completed = true;
      setStep([...newStep]);
      count < 2 && setCount(count + 1);
    } else {
      handleClick();
    }
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
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="registerContainer">
        {/* illustration */}
        <div className="regIllustration">
          <img src={register} alt="" />
        </div>
        {/* form */}
        <div className="registerForm">
          <Typography variant="h4" sx={{ color: "#236836" }}>
            Register with Us!
          </Typography>
          {error && (
            <Alert
              sx={{ fontSize: "15px", p: 0.3, mt: 2, mb: 0 }}
              severity="error"
            >
              {error}
            </Alert>
          )}
          <div className="mainForm">
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              sx={{ mb: 5 }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                All fields are mandatory!
              </Alert>
            </Snackbar>
            <Stepper activeStep={count} color="#2e8446" sx={{ pt: 4 }}>
              {step.map((step, index) => (
                <Step completed={step.completed} key={index}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {forms[count]}
          </div>
          {/*  */}
          {/* button */}
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              // sx={{ position: "absolute"}}
              variant="outlined"
              onClick={backForm}
            >
              Back
            </Button>
            {count === 2 ? (
              <Button
                type={"button"}
                // sx={{ position: "absolute", right: 0 }}
                variant="contained"
                onClick={() => handleSubmit(values)}
              >
                Register
              </Button>
            ) : (
              <Button
                type={"button"}
                // sx={{ position: "absolute", right: 0 }}
                variant="contained"
                onClick={nextForm}
              >
                Next
              </Button>
            )}
          </Box>
          {/*  */}
          <Box>
            <Typography sx={{ mt: 3 }}>
              Already have an Account?{" "}
              <Link to="/login">Click here to Login</Link>
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Register;
