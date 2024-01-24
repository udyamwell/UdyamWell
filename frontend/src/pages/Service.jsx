import React, { useEffect } from "react";
import "./service.css";
import { landingPageBg_small, service } from "../assets";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
const ServiceCard = ({ heading, text1, text2, lists, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="cardContainer">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p style={{ textAlign: "justify" }}>{text1}</p>
      <p>{text2}</p>
      <ul>
        {lists.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
const Service = () => {
  // const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const data = [
    {
      heading: "Udyam Saathi",
      icon: <ContentCopyRoundedIcon />,
      text1:
        "UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network.",
      text2: "We can help you with",
      lists: [
        "1. Finding Udyam Saathi nearby you 🌎",
        "2. Request for Udyam Saathi 🤵",
      ],
    },
    {
      heading: "Handholding Support",
      icon: <IosShareRoundedIcon />,
      text1:
        " UdyamWell's Handholding Support, provided by both our Udyam Sathis and the UdyamWell team, offers personalized assistance to rural entrepreneurs at every step of their journey. Our passionate mentors and dedicated team members provide expert advice, resources, and strategic direction, ensuring that rural enterprises receive the crucial support needed to thrive and prosper.",

      text2: "We can help you with",
      lists: [
        "1. Finding Udyam Saathi nearby you 🌎",
        "2. Request for Udyam Saathi 🤵",
      ],
    },
    {
      heading: "Partner Connect",
      icon: <LightbulbOutlinedIcon />,
      text1:
        "UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest.",
      lists: [
        "1. Digital Partner 🌐",
        "2. Logistics Partner 🚚",
        "3. Accounts Partner 👨‍💻",
        "4. Packaging Partner 📦",
        "5. Legal Partner ⚖",
      ],
    },
  ];
  return (
    <div className="servicePage">
      <div className="landingPageCover">
        <img
          src={landingPageBg_small}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="HomeContainer" style={{ margin: "5rem auto" }}>
        <div className="banner">
          <div className="bannerText">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              {t("services_mainhead1")}{" "}
              <span style={{ color: "black" }}>{t("services_mainhead2")}</span>{" "}
              {t("services_mainhead3")}
              <span style={{ color: "black" }}>
                {t("services_mainhead4")}
              </span>{" "}
              {t("services_mainhead5")}
            </h1>
            <p style={{ textAlign: "justify" }}>{t("services_mainbody")} </p>
            <div className="homeButtons">
              <button style={{ cursor: "pointer" }} className="btn1">
                {t("moreinfo_btn")}
              </button>
              <button className="btn2" style={{ cursor: "pointer" }}>
                {t("exploreservices_btn")}
              </button>
            </div>
          </div>
          <div
            className="bannerImg"
            style={{
              sx: { width: "30%" },
              md: { width: "40%" },
              lg: { width: "70%" },
            }}
          >
            <img src={service} alt="" width={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <Box sx={{ p: "0 55px" }} textAlign={"center"}>
        <Typography variant="h3">
          <span style={{ color: "#2e8446" }}>{t("our")}</span> {t("services")}
        </Typography>
        <Typography variant="h6" className="serviceSubHeading">
          {" "}
          {t("services_body")}
        </Typography>
      </Box>
      <div className="ServiceContainer">
        {data?.map((d, index) => {
          return (
            <ServiceCard
              key={index}
              heading={d.heading}
              text1={d.text1}
              text2={d.text2}
              lists={d.lists}
              icon={d.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
