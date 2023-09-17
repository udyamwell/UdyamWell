import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../slices/UserSlice";
import Swal from 'sweetalert2'
import { landingPageBg_small } from "../assets";

const Profile = () => {
  const { user,error } = useSelector((state) => state.user);
  const [checked, setChecked] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState(user?.name);
  const [eName, setEName] = useState(user?.eName);
  const [location, setLocation] = useState(user?.location);
  const [enterpriseType, setEnterpriseType] = useState(user?.enterpriseType);
  const [phoneNum, setPhoneNum] = useState(user?.phoneNum);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("password",password);
    if(password===""){
      alert("Please fill Password field!");
      return;
    }
    const data = {
      name,
      eName,
      location,
      enterpriseType,
      phoneNum,
      password,
      _id: user?._id,
    };
    console.log("sunfff", data);
    dispatch(updateUser(data));
    Swal.fire('Profile Updated');
    window.location.reload();
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
      <div style={{ margin: "8rem auto", width: "80%" }}>
      <Typography variant="h3" color={"#236836"} sx={{mb:3}} fontWeight={'bold'} textAlign={'center'}>
                  Profile
                </Typography>
                {error && <Alert sx={{fontSize:"15px",p:0.3,mt:2,mb:0}} severity="error">{error}</Alert>}
        <Grid container>
          <Grid item md={6} xs={12} alignContent={"center"}>
            <Box sx={{ display: "flex" }}>
              <Stack width={"90%"} spacing={3} sx={{mb:5}}>
                <Typography variant="h4" color={"#236836"}>
                  Personal Information
                </Typography>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => !checked && setName(e.target.value)}
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
                  value={phoneNum}
                  onChange={(e) => !checked && setPhoneNum(e.target.value)}
                  readOnly={checked}
                  variant="standard"
                />
                <TextField
                  label="Password"
                  required
                  value={password}
                  readOnly={checked}
                  onChange={(e) =>  !checked && setPassword(e.target.value)}
                  variant="standard"
                />
              </Stack>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: "flex" }}>
              <Stack width={"90%"} spacing={5}>
                <Typography variant="h4" color={"#236836"}>
                  Enterprise Information
                </Typography>
                <TextField
                  label="Enterprise Name"
                  value={eName}
                  onChange={(e) => !checked && setEName(e.target.value)}
                  variant="standard"
                  readOnly={checked}
                />
                {/*  */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Enterprise Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="enterpriseType"
                    value={enterpriseType}
                    label="Enterprise Type"
                    onChange={(e) =>
                      !checked && setEnterpriseType(e.target.value)
                    }
                  >
                    <MenuItem value={"individual"}>Individual</MenuItem>
                    <MenuItem value={"SHG"}>SHG</MenuItem>
                    <MenuItem value={"FPO"}>FPO</MenuItem>
                    <MenuItem value={"Pvt"}>Private Limited</MenuItem>
                    <MenuItem value={"OPC"}>OPC</MenuItem>
                    <MenuItem value={"LLP"}>LLP</MenuItem>
                  </Select>
                </FormControl>
                {/*  */}
                <TextField
                  label="Location"
                  value={location}
                  onChange={(e) => !checked && setLocation(e.target.value)}
                  variant="standard"
                  readOnly={checked}
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mb: 4 }}>
          <Checkbox
            onChange={() => {
              setChecked(!checked);
              console.log("cecc", checked);
            }}
          />
          Check here to Update!
        </Box>
        <Button
          variant="contained"
          disabled={checked}
          onClick={handleSubmit}
          sx={{
            padding: "0.5rem p",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          UPDATE
        </Button>
      </div>
    </>
  );
};

export default Profile;
