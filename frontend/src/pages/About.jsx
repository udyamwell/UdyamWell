import React, { useEffect } from "react";
import "./about.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";
import { Box, Stack, Typography } from "@mui/material";
import { landingPageBg_About, landingPageBg_small } from "../assets";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { useTranslation } from "react-i18next";

const AboutCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div className="cardContainer1">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p style={{ textAlign: "justify" }}>{text1}</p>
    </div>
  );
};
export const AboutServices = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="aboutServices" style={{ marginTop: "10rem" }}>
      <Box sx={{ p: "0 55px" }} textAlign={"center"}>
        <Typography variant="h3">
          <span style={{ color: "#2e8446" }}>{t("our")}</span>{" "}
          {t("nav_services")}
        </Typography>
        <Typography variant="h6" className="serviceSubHeading">
          {" "}
          {t("aboutbody_home")}
        </Typography>
      </Box>

      <div className="aboutServices1">
        {/* <div className="aboutServicesDiv">
         
          <h1>UdyamWell Services</h1>
          <p style={{textAlign:"justify"}}>
            UdyamWell is a true partner that guides you on your entrepreneurial
            journey and stays with you in every step of the way to assist you in
            overcoming challenges and also in reaching new heights.
          </p>
          </div> */}
      </div>
      <AboutCard
        heading={t("home_aboutcardheading1")}
        icon={<ContentCopyRoundedIcon />}
        text1={t("home_aboutcardbody1")}
      />
      {/* <AboutCard
          heading="Handholding Support"
          icon={<IosShareRoundedIcon/>}
          text1=" 
          UdyamWell's Handholding Support, provided by both our Udyam Sathis and the UdyamWell team, offers personalized assistance to rural entrepreneurs at every step of their journey. Our passionate mentors and dedicated team members provide expert advice, resources, and strategic direction, ensuring that rural enterprises receive the crucial support needed to thrive and prosper."
        />
        <AboutCard
          icon={<LightbulbOutlinedIcon/>}
          heading="Partner Connect"
          text1="UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest."
        /> */}
      <AboutCard
        icon={<HandshakeTwoToneIcon />}
        heading={t("home_aboutcardheading2")}
        text1={t("home_aboutcardbody2")}
      />
      <AboutCard
        icon={<LightbulbOutlinedIcon />}
        heading={t("home_aboutcardheading3")}
        text1={t("home_aboutcardbody3")}
      />
    </div>
  );
};
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg_small}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <Box sx={{ mt: 25, textAlign: "center" }}>
        <Typography variant="h2" sx={{ color: "#236836", fontWeight: 750 }}>
          {t("aboutus_head")}
        </Typography>
        <Typography
          className="aboutText"
          sx={{
            textAlign: "center",
            margin: "10px auto",
            fontWeight: "bold",
            padding: "0 10px",
            width: "85%",
          }}
          variant="body1"
        >
          {t("aboutus_body")}
        </Typography>
      </Box>
      <Box className="countBox2">
        <Box className="count2">
          <PeopleAltOutlinedIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            {t("aboutus_count1")}
          </Typography>
        </Box>
        <Box className="count2">
          <LaptopMacIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            {t("aboutus_count2")}
          </Typography>
        </Box>
        <Box className="count2">
          <PersonSharpIcon sx={{ fontSize: "50px" }} />{" "}
          <Typography
            variant="h5"
            sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
          >
            {t("aboutus_count3")}
          </Typography>
        </Box>
      </Box>
      <Box
        className="aboutKeyPoints"
        sx={{
          margin: "4rem auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Stack sx={{ textAlign: "center", width: "22%" }}>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            {t("vision_head")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#236836" }}>
            {t("vision_body")}
          </Typography>
        </Stack>
        <hr style={{ color: "#236836", height: "80px", marginLeft: "10px" }} />
        <Stack sx={{ textAlign: "center", width: "25%" }}>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            {t("mission_head")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#236836" }}>
            {t("mission_body")}
          </Typography>
        </Stack>
        <hr style={{ color: "#236836", height: "80px", marginLeft: "10px" }} />
        <Stack sx={{ textAlign: "center", width: "26%" }}>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            {t("sdg_head")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#236836" }}>
            <div className="text_list">
              <span>{t("sdg_body1")}</span>
              <span> {t("sdg_body2")}</span>
              <span>{t("sdg_body3")}</span>
              <span>{t("sdg_body4")} </span>
            </div>
          </Typography>
        </Stack>
      </Box>
      <div className="videoContainer">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DjSj-jC-ktc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <AboutServices/> */}
    </>
  );
};

export default About;
