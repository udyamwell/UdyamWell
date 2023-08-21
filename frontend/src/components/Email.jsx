import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your registered mail");
    }
    axios
      .get("https://udyamwell-testing.azurewebsites.net/users/sendOtp", { email: email })
      .then((res) => {
        Swal.fire(
          `${res.data.message}`,
          "Please check your Email for link.",
          "succuss"
        );
      })
      .catch((err) => setError(err.response.data.message));
  };
  return (
    <>
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
