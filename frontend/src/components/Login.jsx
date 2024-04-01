import React, { useEffect, useState } from "react";
// import { landingPageBg_About, landingPageBg_small, login } from "../assets";
import "./styles/register.css";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/UserSlice.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Bg_about from "../assets/Bg_about2.png";
const Login = () => {
  // const CustomTextArea = (props) => {
  //   return (
  //     <input
  //       {...props}
  //       style={{
  //         width: "100%",
  //         padding: "20px ",
  //         backgroundColor: "#E0F1E5",
  //         borderRadius: "25px",
  //         outline: "none",
  //         resize: "none",
  //         textAlign: "center",
  //         color: "black",
  //         border: "none",
  //         margin: "none",
  //       }}
  //     />
  //   );
  // };
  const { t } = useTranslation();
  const { user, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    user && navigate("/");
  }, [user, navigate]);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // password field
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // login request
  const handleLogin = async (e) => {
    e.preventDefault();
    const values = {
      email,
      password,
    };
    dispatch(loginUser(values));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="loginContainer">
        <form onSubmit={handleLogin}>
          <div className="loginForm" style={{ width: "100%" }}>
            <h1 className="subHeading">
              <span style={{ color: "black" }}>{t("sign")}</span>
              {t("in")}
            </h1>
            <div className="mainForm">
              {error && (
                <Alert
                  sx={{ fontSize: "15px", p: 0.3, mt: 2, mb: 0 }}
                  severity="error"
                >
                  {error}
                </Alert>
              )}
              <Stack
                alignSelf={"center"}
                sx={{ width: "100%", margin: "1rem auto" }}
                spacing={4}
              >
                {/* <CustomTextArea
                  id="customTextArea"
                  name="customTextArea"
                  rows="1"
                  type="text"
                  placeholder={t("formph_mail")}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                /> */}
                <TextField
                  fullWidth
                  name={"email"}
                  // variant="filled"
                  type="text"
                  label={t("formph_mail")}
                  // InputProps={{
                  //   inputComponent: CustomInputComponent,
                  // }}
                  sx={{
                    backgroundColor: "#E0F1E5",
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "black", // Placeholder color
                      fontWeight: "400",
                      alignSelf: "center",
                    },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {/* <CustomTextArea
                  id="customTextArea"
                  name="customTextArea"
                  rows="1"
                  type="text"
                  placeholder={t("formph_password")}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  margin="none"
                /> */}
                <Box>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      {t("formph_password")}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        backgroundColor: "#E0F1E5",
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "black", // Placeholder color
                          fontWeight: "400",
                          alignSelf: "center",
                        },
                      }}
                      label="Password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormControl>
                </Box>
              </Stack>
            </div>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  color: "white",
                  padding: "10px 60px",
                  borderRadius: "10px",
                  fontWeight: "400",
                  textTransform: "inherit",
                  border: "none",
                  background:
                    "linear-gradient(90deg, rgba(46,132,70,1) 0%, rgba(0,100,0,1) 100%);",
                }}
              >
                {t("submit_btn")}
              </Button>
            </Box>
            <Box>
              <Typography sx={{ mt: 3 }}>
                Don't have an Account?{" "}
                <Link to="/register">
                  <span style={{ color: "green", textDecoration: "underline" }}>
                    Click here to Register
                  </span>
                </Link>
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Forgot Password?{" "}
                <Link to="/forgot-password">
                  <span style={{ color: "green", textDecoration: "underline" }}>
                    Click here to reset your Password
                  </span>
                </Link>
              </Typography>
            </Box>
          </div>
        </form>
        <div className="information">
          <div className="contact-info">
            <span className="contact-info__icon">
              <HomeOutlinedIcon />
            </span>
            <div className="media-body">
              <a
                href="https://maps.app.goo.gl/DCBAgSxqtdhBWvYPA"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{t("address_body1")}</h3>
                <p>{t("address_body2")}</p>
              </a>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon">
              <PhoneIphoneOutlinedIcon />
            </span>
            <div className="media-body">
              <a href="tel:+91 7978949923" target="_blank" rel="noreferrer">
                <h3>+91 7978949923</h3>
                <p>{t("phone_time")}</p>
              </a>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon">
              <MailOutlinedIcon />
            </span>
            <div className="media-body">
              <a
                href="mailto:admin@udyamwell.com"
                target="_blank"
                rel="noreferrer"
              >
                <h3>admin@udyamwell.com</h3>
              </a>
              <p>{t("mail_body")}</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon">
              <WhatsAppIcon />
            </span>
            <div className="media-body">
              <a
                href="https://chat.whatsapp.com/GvR6jeujogr8YeOvspVF1F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{t("contact_whatsapp")}</h3>
              </a>
              <p>{t("contact_whatsappbody")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
