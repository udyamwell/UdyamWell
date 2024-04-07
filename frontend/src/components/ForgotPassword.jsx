import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your registered mail");
    }
    axios
      .put("https://www.udyamwell.com/users/forgot-password", { email: email })
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
          <Typography variant="h3">RESET YOUR PASSWORD</Typography>
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
        </Stack>
      </Box>
    </>
  );
};

export default ForgotPassword;
