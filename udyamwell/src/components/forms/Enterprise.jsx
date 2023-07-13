import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React from "react";

const Enterprise = ({enterpriseInfo,setEnterpriseInfo}) => {

  const handleChange = e =>{
    const {name, value, checked} = e.target;
    console.log(e.target);
    setEnterpriseInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name === "checked" ? checked : value
    }));
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
          variant="standard"
          onChange={handleChange}
          name="ename"
          value={enterpriseInfo.ename}
          fullWidth
          required
          label="Enterprise Name"
        />
      </Box>
      <Box>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Enterprise Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value="age"
    name="enterpriseType"
    value={enterpriseInfo.enterpriseType}
    label="Enterprise Type"
    onChange={handleChange}
  >
    <MenuItem value={'individual'}>Individual</MenuItem>
    <MenuItem value={'SHG'}>SHG</MenuItem>
    <MenuItem value={'FPO'}>FPO</MenuItem>
    <MenuItem value={'pvt'}>Private Limited</MenuItem>
    <MenuItem value={'OPC'}>OPC</MenuItem>
    <MenuItem value={'LLP'}>LLP</MenuItem>
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
    label="how do you know about us?"
    name="socials"
    value={enterpriseInfo.socials}
    onChange={handleChange}
  >
    <MenuItem value={'Whatsapp'}>Whatsapp</MenuItem>
    <MenuItem value={'socailMedia'}>Social Media</MenuItem>
    <MenuItem value={'wordOfMouth'}>Word of Mouth</MenuItem>
    <MenuItem value={'udyamwell'}>through UdyamWell</MenuItem>
  </Select>
</FormControl>
      </Box>
      <Box>
      <TextField
          type="text"
          variant="standard"
          onChange={handleChange}
          name="comment"
          value={enterpriseInfo.comment}
          fullWidth
          required
          label="Any additional comments?"
        />
      </Box>
      <FormControlLabel required control={<Checkbox name="checked" checked={enterpriseInfo.checked} onChange={handleChange} />} label="I agree to all terms and conditions!" />
    </Stack>
        </>
    )
}

export default Enterprise;