import { Box, Stack, TextField } from "@mui/material";
import React from "react";

const PersonalInfo = ({personalInfo,setPersonalInfo}) => {

  const handleChange = e =>{
    const {name, value} = e.target;
    console.log(e.target);
    setPersonalInfo({
      ...personalInfo,
      [name]:value
    });
  }


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
          value={personalInfo.name}
          fullWidth
          required
          label="Full Name"
        />
      </Box>
      <Box>
        <TextField
          required
          onChange={handleChange}
          name="email"
          value={personalInfo.email}
          variant="standard"
          fullWidth
          type={"email"}
          label="Email"
        />
      </Box>
      <Box>
        <TextField
          required
          onChange={handleChange}
          name="phone_no"
          value={personalInfo.phone_no}
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
          value={personalInfo.location}
          fullWidth
          required
          type={"text"}
          label="Location"
        />
      </Box>
    </Stack>
        </>
    )
}

export default PersonalInfo;