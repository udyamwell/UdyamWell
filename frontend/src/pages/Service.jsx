import React, { useEffect } from "react";
import "./service.css";
import { service } from "../assets";
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
import Bg_about from "../assets/Bg_about.png";
import ondc from "../assets/ondc.png";
import sbi from "../assets/sbifoundationlogo.png";
import microsoft from "../assets/microsoft.png";
import iitmandicatalyst from "../assets/iitmandicatalyst.png";
import SearchBox from "../components/SearchBox";
const ServiceCard = ({ heading, text1, text2, lists, icon }) => {
  // const { t } = useTranslation();
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
const handleSearch = (query) => {
  // Perform search logic using the query
  console.log("Search query:", query);
  // Add your search logic here, such as making an API request or filtering data
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
        "UdyamWell provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network.",
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
          src={Bg_about}
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
                fontSize: "52px",
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
      <Box className="countBox" style={{ width: "80%" }}>
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
      <div className="service-box">
        {" "}
        <div className="services-title">
          <h1 style={{ fontSize: "55px" }}>
            <span style={{ color: "#2e8446" }}>{t("our")}</span> {t("services")}
          </h1>

          <p variant="h6" className="serviceSubHeading">
            {" "}
            {t("services_body")}
          </p>
        </div>
        <SearchBox onSearch={handleSearch} />
      </div>
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
