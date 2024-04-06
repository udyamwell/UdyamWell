import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { banner_img, landingPageBg, learning_about } from "../assets";
import ondc from "../assets/ondc.png";
import sbi from "../assets/sbifoundationlogo.png";
import microsoft from "../assets/microsoft.png";
import iitmandicatalyst from "../assets/iitmandicatalyst.png";
import learning_about2 from "../assets/learning_about2.png";
import featureIcon1 from "../assets/featureIcon1.png";
import featureIcon2 from "../assets/featureIcon2.png";
import { AboutServices } from "./About";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
// import AnimatedCircles from "../components/AnimatedCircles";
import "./homepage.css";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Create a ref for the countBox component
  const countBoxRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const countBox = countBoxRef.current;
  //     const scrollY = window.scrollY;

  //     if (countBox && scrollY >= 450) {
  //       countBox.style.transform = "TranslateY(50px)";
  //     } else {
  //       countBox.style.transform = "TranslateY(-100px)";
  //     }
  //   };

  //   // Add the scroll event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the scroll event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
        {/* <AnimatedCircles /> */}
      </div>
      <div className="HomeContainer">
        <div
          className="banner"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
            width: "90%",
          }}
        >
          <div className="bannerText">
            <h3 style={{ fontSize: "32px" }}>
              {""}
              <Typewriter
                words={[
                  "Partner in your Business Journey |",
                  "आपके व्यावसायिक यात्रा का साथी |",
                ]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
            <p>
              {/* {" "} */}
              {t("body_home")} <br />
              {t("body_home2")}
            </p>
            <div className="homeButtons">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  padding: "10px 60px",
                  // borderRadius: "10px",
                  font: "Poppins,sans-serif",
                  fontWeight: "500",
                  textTransform: "inherit",
                  border: "none",
                  background:
                    "linear-gradient(90deg, rgba(46,132,70,1) 0%, rgba(0,100,0,1) 100%);",
                }}
                onClick={() => navigate("/udyamsheel")}
              >
                {t("udyamsheel_btn")}
              </Button>

              <Button
                sx={{
                  p: "10px 20px",
                  borderRadius: "2px",
                  border: "solid 1.5px",
                  ml: 3,
                  font: "Poppins,sans-serif",
                  fontWeight: "500",
                  color: "#006400",
                  textTransform: "initial",
                  transition:
                    "filter 0.4s ease, color 0.4s ease, background 0.3s ease",
                  "&:hover": {
                    filter: "drop-shadow(-2px 4px 4px   #0064003a  )",
                    color: "white",
                    background: "linear-gradient( #2E8446 , #006400 )",
                  },
                }}
                variant="outlined"
                onClick={() => {
                  navigate("/sellonONDC");
                }}
              >
                {t("sellonondc_btn")}
              </Button>
            </div>
          </div>
          <div className="bannerImg">
            <img src={banner_img} alt="" />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <Box ref={countBoxRef} className="countBox">
        <Box className="count">
          <Typography
            variant="h3"
            style={{
              paddingTop: "15px",
              color: "#236836",
              fontSize: "32px",
              fontWeight: "600",
              fontFamily: "Poppins,sans-serif",
            }}
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
      <div className="homeServices" style={{ width: "80%" }}>
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
          <h3>{t("Aboutus_head")}</h3>
          <div className="aboutKeyPoints">
            <p>{t("Aboutus_body")} </p>
          </div>
          {/*  */}
          <div className="homeAboutButton">
            <button
              style={{ cursor: "pointer", borderRadius: "10px" }}
              onClick={() => navigate("/about")}
            >
              {t("readmore_btn")}
            </button>
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
          <h3>{t("Aboutus_head2")}</h3>
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
                <h3>{t("feature-head1")}</h3>
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
                <h3>{t("feature-head2")}</h3>
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
