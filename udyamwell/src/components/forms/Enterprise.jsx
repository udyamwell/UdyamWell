import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React from "react";

const Enterprise = () => {
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
          label="Enterprise Name"
        />
      </Box>
      <Box>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value="age"
    label="age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
      </Box>
      <Box>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">How did you hear about us?</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value="age"
    label="age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
      </Box>
      <Box>
        <TextField
          variant="standard"
        //   onChange={handleChange}
          name="fname"
        //   value={values?.fname}
          fullWidth
          required
          label="Any additional comments?"
        />
      </Box>
      <FormControlLabel required control={<Checkbox />} label="I agree to all terms and conditions!" />
    </Stack>
        </>
    )
}

export default Enterprise;