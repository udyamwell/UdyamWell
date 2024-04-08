import React, { useEffect, useRef } from "react";
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
// import SearchBox from "../components/SearchBox";
const AboutCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div
      className="cardContainer1"
      style={{
        width: "320px",
        height: "fit-content",
        minHeight: "700px",
      }}
    >
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p style={{ textAlign: "justify", color: "black", fontSize: "16px" }}>
        {text1}
      </p>
      <p style={{ color: "grey", marginTop: "px" }}>{text2}</p>
      <ul>
        {lists.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

// const handleSearch = (query) => {
//   // Perform search logic using the query
//   console.log("Search query:", query);
//   // Add your search logic here, such as making an API request or filtering data
// };
const Service = () => {
  // const navigate = useNavigate();
  const countBoxRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const countBox = countBoxRef.current;
  //     const scrollY = window.scrollY;

  //     if (countBox && scrollY >= 500) {
  //       countBox.style.transform = "translateY(-0px)";
  //     } else {
  //       countBox.style.transform = "translateY(-150px)";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
      <div
        className="HomeContainer"
        style={{ height: "100%", margin: "150px auto" }}
      >
        <div className="banner" style={{ width: "76%" }}>
          <div className="bannerText" style={{ width: "100%" }}>
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#046A3A",
                textAlign: "left",
                // sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
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
            <p
              style={{
                textAlign: "justify",
                fontSize: "18px",
                fontFamily: "Poppins,sans-serif",
                fontWeight: "500",
                paddingBlock: "20px",
                width: "100%",
              }}
            >
              {t("services_mainbody")}{" "}
            </p>
            <div className="homeButtons">
              <button
                style={{ cursor: "pointer", borderRadius: "10px" }}
                className="btn1"
              >
                {t("moreinfo_btn")}
              </button>
              <button
                className="btn2"
                style={{ cursor: "pointer", borderRadius: "10px" }}
              >
                {t("exploreservices_btn")}
              </button>
            </div>
          </div>
          <div
            className="bannerImg"
            style={{
              width: "100%",
            }}
          >
            <img src={service} alt="" width={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <Box ref={countBoxRef} className="countBox">
        <Box className="count">
          <Typography
            variant="h3"
            sx={{
              ml: 2,
              color: "#046A3A",
              fontWeight: 600,
              fontSize: "32px",
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
        {/* <SearchBox onSearch={handleSearch} width="360px" marginTop="10px" /> */}
      </div>
      <div className="ServiceContainer">
        <AboutCard
          heading={t("card_head1")}
          icon={<ContentCopyRoundedIcon />}
          text1={t("card_text11")}
          text2={t("card_text21")}
          lists={[t("card_list11"), t("card_list21")]}
        />
        <AboutCard
          heading={t("card_head3")}
          icon={<IosShareRoundedIcon />}
          text1={t("card_text13")}
          text2={t("card_text23")}
          lists={[t("card_list11"), t("card_list21")]}
        />

        <AboutCard
          heading={t("card_head2")}
          icon={<LightbulbOutlinedIcon />}
          text1={t("card_text12")}
          text2={t("card_text22")}
          lists={[
            t("card_list12"),
            t("card_list22"),
            t("card_list32"),
            t("card_list42"),
            t("card_list52"),
          ]}
        />
      </div>
    </div>
  );
};

export default Service;
