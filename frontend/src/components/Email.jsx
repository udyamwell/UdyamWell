import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { landingPageBg_small } from "../assets";
const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.user);
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    user && navigate('/');
  },[])
  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your registered mail");
    }
    axios
      .post("https://www.udyamwell.com/users/sendOtp", { email: email })
      .then((res) => {
        Swal.fire(
          `${res.data.message}`,
          "Please check your Email for link.",
          "success"
        );
      })
      .catch((err) => setError(err.response.data.message));
  };
  return (
    <>
    <div className="landingPageCover">
          <img
            src={landingPageBg_small}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10rem auto 5rem auto",
        }}
        color={"#236836"}
      >
        <Stack>
          <Typography variant="h3">Enter Your Email</Typography>
          {error && <p>{error}</p>}
          <Box>
            <TextField
              sx={{ mt: 6 }}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Enter your registered Email"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Button type="submit" onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Box>
          <Box>
            <Typography sx={{ mt: 3, textAlign: "center" }}>
              Already have an Account?{" "}
              <Link to="/login">Click here to Login</Link>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Email;
