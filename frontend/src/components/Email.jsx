import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { landingPageBg_small } from "../assets";
import { useTranslation } from "react-i18next";
import Bg_about from "../assets/Bg_about2.png";
import "./styles/register.css";
const Email = () => {
  const CustomTextArea = (props) => {
    return (
      <input
        {...props}
        style={{
          width: "100%",
          padding: "20px ",
          backgroundColor: "#E0F1E5",
          borderRadius: "25px",
          outline: "none",
          resize: "none",
          textAlign: "center",
          color: "black",
          border: "none",
          margin: "none",
        }}
      />
    );
  };
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    user && navigate("/");
  }, []);
  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your registered mail");
    }
    axios
      .post("https://www.udyamwell.com/users/sendOtp", { email: email })
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
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="Signup">
        <form>
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
              <h1 className="subHeading" style={{ marginLeft: "100px" }}>
                <span style={{ color: "black" }}>{t("sign ")}</span>
                Up
              </h1>
              {error && <p>{error}</p>}
              <Box>
                {/* <TextField
                sx={{ mt: 2 }}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Enter your registered Email"
                variant="outlined"
                fullWidth
              /> */}
                <CustomTextArea
                  id="customTextArea"
                  name="customTextArea"
                  rows="1"
                  type={"email"}
                  value={email}
                  placeholder="Enter your registered Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    color: "white",
                    padding: "10px 60px",
                    borderRadius: "20px",
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
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  Already have an Account?{" "}
                  <Link to="/login">
                    <span
                      style={{ color: "green", textDecoration: "underline" }}
                    >
                      Click here to Login
                    </span>
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </form>
        <div className="information">
          <div className="contact-info">
            <span className="contact-info__icon">
              <HomeOutlinedIcon />
            </span>
            <div className="media-body">
              <h3>{t("address_body1")}</h3>
              <p>{t("address_body2")}</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon">
              <PhoneIphoneOutlinedIcon />
            </span>
            <div className="media-body">
              <h3>+91 867 9625 300</h3>
              <p>{t("phone_time")}</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon">
              <MailOutlinedIcon />
            </span>
            <div className="media-body">
              <a href="mailto:admin@udyamwell.com" target="_blank">
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

export default Email;
