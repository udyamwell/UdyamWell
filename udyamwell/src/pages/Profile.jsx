import {
  Alert,
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [checked, setChecked] = useState(true);
  const [password,setPassword] = useState()
    const {user} = useSelector(state=>state.user);
    console.log('usss',user);
  return (
    <>
      <div style={{ margin: "10rem auto", width: "80%" }}>
        <Grid container>
          <Grid item md={6} xs={12} alignContent={"center"}>
            <Box sx={{ display: "flex" }}>
              <Stack width={"80%"} spacing={5}>
                <Typography variant="h4" color={"#236836"}>
                  Personal Information
                </Typography>
                <TextField
                  label="Name"
                  value={user?.name}
                  // onChange={(e) => !checked && setUsername(e.target.value)}
                  variant="standard"
                  readOnly={checked}
                />
                <TextField
                  label="Email"
                  value={user?.email}
                  readOnly={checked && !checked}
                  variant="standard"
                />
                <TextField
                  label="Contact Number"
                  value={user?.phoneNum}
                  readOnly={checked && !checked}
                  variant="standard"
                />
                {/* <TextField label="Password"  variant="standard"  /> */}
              </Stack>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: "flex" }}>
              <Stack width={"80%"} spacing={5}>
                <Typography variant="h4" color={"#236836"}>
                  Enterprise Information
                </Typography>
                <TextField
                  label="Enterprise Name"
                  value={user.eName}
                  // onChange={(e) => !checked && setUsername(e.target.value)}
                  variant="standard"
                  // readOnly={checked}
                />
                <TextField
                  label="Enterprise Type"
                  value={user.enterpriseType}
                  // readOnly={checked}
                  variant="standard"
                />
                 <TextField
                  label="Location"
                  value={user?.location}
                  readOnly={checked && !checked}
                  variant="standard"
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
        {/* <Box sx={{mt:2,mb:4}} >
            <Checkbox onChange={() => setChecked(!checked)} />
                Check here to Update!
        </Box> */}
          {/* <Button
            variant="contained"
            // disabled={checked}
            // onClick={handleSubmit}
            sx={{ padding: "0.5rem p",display:"flex",justifyContent:"center", alignItems:"center" }}
          >
            UPDATE
          </Button> */}
      </div>
    </>
  );
};

export default Profile;
