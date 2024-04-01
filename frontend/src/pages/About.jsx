import React, { useEffect } from "react";
import "./about.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";
import { Box, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Bg_about from "../../src/assets/Bg_about.png";
import { useNavigate } from "react-router";
const AboutCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div className="cardContainer1">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p
        style={{
          textAlign: "justify",
          color: "black",
          fontWeight: "200",
          fontSize: "16px",
        }}
      >
        {text1}
      </p>
    </div>
  );
};
export const AboutServices = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/services");
  };
  return (
    <div className="aboutServices" style={{ marginTop: "5rem" }}>
      <div className="aboutus-box">
        <h3
          style={{
            fontFamily: "Poppins,sans-serif",
            color: "#046A3A",
            fontSize: "50px",
            fontWeight: "600",
          }}
        >
          <span style={{ color: "#000000" }}>{t("our")}</span>{" "}
          {t("nav_services")}
        </h3>
        <Typography
          variant="h6"
          fontWeight={"500"}
          fontSize={"18px"}
          className="serviceSubHeading"
          textAlign={"justify"}
          marginTop={"1rem"}
          color={"black"}
          width={"100%"}
          fontFamily={"Poppins, sans-serif"}
        >
          {" "}
          {t("aboutbody_home")}
        </Typography>
        <div className="homeAboutButton">
          <button
            style={{ cursor: "pointer", borderRadius: "10px" }}
            onClick={handelClick}
          >
            {t("readmore_btn")}
          </button>
        </div>
      </div>

      <AboutCard
        heading={t("home_aboutcardheading1")}
        icon={<ContentCopyRoundedIcon />}
        text1={t("home_aboutcardbody1")}
      />
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
  let cards = [
    {
      key: uuidv4(),
      content: <Card />,
    },
    {
      key: uuidv4(),
      content: <Card />,
    },
    {
      key: uuidv4(),
      content: <Card />,
    },
    {
      key: uuidv4(),
      content: <Card />,
    },
    {
      key: uuidv4(),
      content: <Card />,
    },
  ];
  const { t } = useTranslation();
  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick}>Previous</button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick}>Next</button>
  );
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
      <Box sx={{ mt: 20, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            color: "#046A3A",
            fontFamily: "Poppins,sans-serif",
            fontWeight: 600,
            fontSize: "50px",
          }}
        >
          {t("aboutus_head")}
        </Typography>
        <Typography
          className="aboutText"
          sx={{
            textAlign: "justify",
            margin: "10px auto",
            width: "70%",
            fontWeight: "500",
            fontFamily: "Poppins,sans-serif",
            padding: "0 10px",
            // width: "85%",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {t("aboutus_body")}
        </Typography>
      </Box>

      <div className="CardCarousel" style={{ marginBottom: "200px" }}>
        <Carousel
          cards={cards}
          height="500px"
          width="30%"
          margin="0 auto"
          offset={2}
          showArrows={true}
          leftArrow={<CustomLeftArrow />}
          rightArrow={<CustomRightArrow />}
        />
      </div>
      <Box className="countBox2" style={{ width: "70%" }}>
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
      <div className="homeServices" style={{ width: "80%" }}>
        <AboutServices />
      </div>
    </>
  );
};

export default About;
