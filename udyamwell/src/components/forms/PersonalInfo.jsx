import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const PersonalInfo = ({ handleChange, values }) => {
  return (
    <>
      <Stack
        alignSelf={"center"}
        sx={{ width: "80%", margin: "1rem auto" }}
        spacing={2}
      >
        <Box>
          <TextField
            type={"text"}
            variant="standard"
            onChange={handleChange}
            name="name"
            value={values?.name}
            fullWidth
            required
            label="Full Name"
          />
        </Box>
        {/* <Box>
        <TextField
          required
          onChange={handleChange}
          name="email"
          value={values?.email}
          variant="standard"
          fullWidth
          type={"email"}
          label="Email"
        />
      </Box> */}
        <Box>
          <TextField
            required
            onChange={handleChange}
            name="phoneNum"
            value={values?.phoneNum}
            variant="standard"
            fullWidth
            type={"number"}
            label="Phone Number"
          />
        </Box>
        <Box>
          <TextField
            variant="standard"
            onChange={handleChange}
            name="location"
            value={values.location}
            fullWidth
            required
            type={"text"}
            label="Location"
          />
        </Box>
      </Stack>
    </>
  );
};

export default PersonalInfo;
