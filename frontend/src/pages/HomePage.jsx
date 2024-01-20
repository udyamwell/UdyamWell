import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { banner_img, landingPageBg, learning_img , learning_about, main} from "../assets";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { AboutServices } from "./About";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import "./homepage.css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
      <div className="HomeContainer">
        <div className="banner" style={{justifyContent:'center',alignItems:"center",marginTop:"6rem"}}>
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
            <Typography
              variant="body1"
              sx={{ color: "black" }}
            >
              UdyamWell: ONDC protocol powered one stop solution for Rural &
              Small Scale enterprises.{" "}
            </Typography>
            <div className="homeButtons">
              <button
                style={{ cursor: "pointer" }}
                className="btn1"
                onClick={() => navigate("/udyamsheel")}
              >
                UdyamSheel Bharat Program
              </button>
              <button
                className="btn2"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/udyamsheel")}
              >
                Sell on ONDC
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
          <PeopleAltOutlinedIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            10+ Mentors
          </Typography>
        </Box>
        <Box className="count">
          <LaptopMacIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            50+ Enterprises
          </Typography>
        </Box>
        <Box className="count">
          <PersonSharpIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            3 Partners
          </Typography>
        </Box>
      </Box>
      {/* section 3 */}
      <div className="homeServices" style={{ marginTop: "3rem" }}>
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
              <p>About Us</p>
            </div>
          </div>
          {/*  */}
          <h1>Bridging The Gap Between Urban and Rural</h1>
          <div className="aboutKeyPoints">
            <p>
              UdyamWell is a dynamic platform dedicated to nurturing and
              empowering rural entrepreneurs across India. Our comprehensive
              ecosystem includes innovative programs, mentorship, access to
              markets, and learning resources. With a strong emphasis on
              fostering self-reliance and prosperity, UdyamWell strives to
              bridge the gap between rural enterprises and urban markets,
              enabling economic growth and sustainable livelihoods in rural
              communities.{" "}
            </p>
          </div>
          {/*  */}
          <div className="homeAboutButton">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
