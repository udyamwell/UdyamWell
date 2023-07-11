import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const PersonalInfo = () => {
    return (
        <>
        <Stack
      alignSelf={"center"}
      sx={{ width: "80%", margin: "1rem auto" }}
      spacing={2}
    >
      <Box>
        <TextField
          variant="standard"
        //   onChange={handleChange}
          name="fname"
        //   value={values?.fname}
          fullWidth
          required
          label="Full Name"
        />
      </Box>
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
          name="phone_no"
        //   value={values?.phone_no}
          variant="standard"
          fullWidth
          type={"number"}
          label="Phone Number"
        />
      </Box>
      <Box>
        <TextField
          variant="standard"
        //   onChange={handleChange}
          name="fname"
        //   value={values?.fname}
          fullWidth
          required
          label="Location"
        />
      </Box>
    </Stack>
        </>
    )
}

export default PersonalInfo;