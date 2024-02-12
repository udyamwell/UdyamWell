import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  banner_img,
  landingPageBg,
  learning_img,
  learning_about,
  main,
} from "../assets";
import ondc from "../assets/ondc.png";
import sbi from "../assets/sbifoundationlogo.png";
import microsoft from "../assets/microsoft.png";
import iitmandicatalyst from "../assets/iitmandicatalyst.png";
import learning_about2 from "../assets/learning_about2.png";
import featureIcon1 from "../assets/featureIcon1.png";
import featureIcon2 from "../assets/featureIcon2.png";
import { AboutServices } from "./About";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import "./homepage.css";
const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="HomeContainer">
        <div
          className="banner"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
          }}
        >
          <div className="bannerText">
            <h1>
              {""}
              <Typewriter
                words={[
                  "Partner in your Business Journey !",
                  "आपके व्यावसायिक यात्रा का साथी |",
                ]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <Typography variant="body1" sx={{ color: "black" }}>
              {/* {" "} */}
              {t("body_home")}
            </Typography>
            <div className="homeButtons">
              <button
                style={{ cursor: "pointer" }}
                className="btn1"
                onClick={() => navigate("/udyamsheel")}
              >
                {t("udyamsheel_btn")}
              </button>
              <button
                className="btn2"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sellonONDC")}
              >
                {t("sellonondc_btn")}
              </button>
            </div>
          </div>
          <div className="bannerImg">
            <img src={banner_img} alt="" />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <Box className="countBox">
        <Box className="count">
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fonteight: 600 }}
            style={{ paddingTop: "15px", fontWeight: "bold" }}
          >
            {t("supported_by")}
          </Typography>
        </Box>
        <Box className="count">
          <img src={ondc} alt="ONDC" />

          <img src={sbi} alt="SBI Foundation" />

          <img src={microsoft} alt="Microsoft for Startups" />
          <img src={iitmandicatalyst} alt="IIT Mandi Catalyst" />
        </Box>
      </Box>
      {/* section 3 */}
      <div
        className="homeServices"
        style={{ margin: "2rem auto", width: "70%" }}
      >
        <AboutServices />
      </div>

      {/*  section3*/}
      <div className="homeAbout">
        <div className="aboutImg">
          <img src={learning_about} alt="" />
        </div>
        <div className="aboutInfo">
          <div className="aboutSub">
            <div className="about_"></div>
            <div className="aboutSubText" style={{ marginLeft: "10px" }}>
              <p>{t("Aboutus")}</p>
            </div>
          </div>
          {/*  */}
          <h1>{t("Aboutus_head")}</h1>
          <div className="aboutKeyPoints">
            <p>{t("Aboutus_body")} </p>
          </div>
          {/*  */}
          <div className="homeAboutButton">
            <button>{t("readmore_btn")}</button>
          </div>
        </div>
      </div>
      <div className="homeAbout2">
        <div className="aboutImg">
          <img src={learning_about2} alt="" />
        </div>
        <div className="aboutInfo">
          <div className="aboutSub">
            <div className="about_"></div>
            <div className="aboutSubText" style={{ marginLeft: "10px" }}>
              <p>{t("AdvanceFeature")}</p>
            </div>
          </div>
          {/*  */}
          <h1>{t("Aboutus_head2")}</h1>
          <div className="aboutKeyPoints">
            <p>{t("Aboutus_body2")} </p>
          </div>
          {/*  */}
          <div className="homeAboutfeatures">
            <div className="feature">
              <div className="feature-icon">
                <img src={featureIcon1} alt=" " />
              </div>
              <div className="feature-head">
                <h4>{t("feature-head1")}</h4>
              </div>
              <div className="feature-body">
                <p>{t("feature-body1")}</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src={featureIcon2} alt=" " />
              </div>
              <div className="feature-head">
                <h4>{t("feature-head2")}</h4>
              </div>
              <div className="feature-body">
                <p>{t("feature-body2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
