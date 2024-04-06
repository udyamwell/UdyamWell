import React, { useEffect, useRef, useState } from "react";
import { hand_holding_smartphone } from "../assets";
import Bg_about from "../assets/Bg_about.png";
import toggle_btn from "../assets/toggle_btn.png";
import { Box, Stack, Typography } from "@mui/material";
import ondc from "../assets/ondc.png";
import sbi from "../assets/sbifoundationlogo.png";
import microsoft from "../assets/microsoft.png";
import iitmandicatalyst from "../assets/iitmandicatalyst.png";
import "./DownloadApp.css";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import { useTranslation } from "react-i18next";
import "./CustomAccordion.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import frontViewStep0 from "../assets/Step0.png";
import frontViewStep1 from "../assets/Step1.png";
import frontViewStep2 from "../assets/Step2.png";
import frontViewStep3 from "../assets/Step3.png";
import frontViewStep4 from "../assets/Step4.png";
import frontViewStep5 from "../assets/Step5.png";
import frontViewStep6 from "../assets/Step6.png";
import frontViewStep7 from "../assets/Step7.png";
const AboutCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div
      className="cardContainer1"
      style={{
        width: "320px",
        "@media (max-width: 800px)": {
          minHeight: "none",
        },
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
// const ServiceCard = ({ heading, text1, text2, lists, icon }) => {
//   return (
//     <div className="cardContainer" style={{ borderRadius: "15px" }}>
//       <span>
//         <i>{icon}</i>
//       </span>
//       <h4>{heading}</h4>
//       <p style={{ textAlign: "justify" }}>{text1}</p>
//       <p style={{ color: "grey", marginTop: "px" }}>{text2}</p>
//       <ul>
//         {lists.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };
const DownloadApp = () => {
  const countBoxRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const countBox = countBoxRef.current;

  //     const scrollY = window.scrollY;

  //     if (countBox && scrollY >= 600) {
  //       countBox.style.transform = "translateY(50px)";
  //     } else {
  //       countBox.style.transform = "translateY(-100px)";
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
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 7;

  const handleStepClick = (step) => {
    setActiveStep(step === activeStep ? "0" : step);
  };

  const renderAccordionStep = (step, summaryKey, bodyKey) => (
    <div
      key={step}
      className={`accordion-item ${activeStep === step ? "active" : ""}`}
    >
      <div className="accordion-summary" onClick={() => handleStepClick(step)}>
        <span className="accordion-text">{t(summaryKey)}</span>
        <span
          className={`accordion-icon ${activeStep === step ? "rotate" : ""}`}
        >
          <img src={toggle_btn} alt="" style={{ width: "20px" }} />
        </span>
      </div>
      {activeStep === step && (
        <div className="accordion-body">{t(bodyKey)}</div>
      )}
    </div>
  );
  const stepImages = [
    frontViewStep0,
    frontViewStep1,
    frontViewStep2,
    frontViewStep3,
    frontViewStep4,
    frontViewStep5,
    frontViewStep6,
    frontViewStep7,
  ];
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
      {/*  */}
      <div className="HomeContainerDownload">
        <Box className="bannerDownload">
          <div className="bannerTextDownload">
            <Typography
              className="smartHeadline"
              sx={{
                fontWeight: "500",
                width: "100%",
                fontFamily: "Poppins,sans-serif",
                fontSize: "18px",
              }}
            >
              {t("appinf_smarthead")}
            </Typography>
            <h1>
              {t("appinf_mainhead1")}
              <span style={{ color: "black" }}>
                {t("appinf_mainhead2")}
              </span>{" "}
              {t("appinf_mainhead3")}{" "}
              <span style={{ color: "black" }}>{t("appinf_mainhead4")}</span>{" "}
            </h1>
          </div>
          <div className="bannerImgDownload" style={{ display: "flex" }}>
            <div className="imgPart1">
              <img src={hand_holding_smartphone} alt="" />
            </div>

            <div className="imgInfoPart2">
              <div className="part2Count">
                <Stack sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      color: "grey",
                      fontFamily: "Poppins.sans-serif",
                      fontSize: "18px",
                    }}
                  >
                    {t("appinf_activeusers")}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Poppins,sans-serif",
                      color: "#046A3A",
                      fontWeight: 600,
                      fontSize: "50px",
                    }}
                  >
                    500+
                  </Typography>
                </Stack>
                <hr
                  style={{ height: "30px", width: "2px", background: "black" }}
                />
                <Stack sx={{ textAlign: "center" }}>
                  <Typography sx={{ color: "grey" }}>
                    {t("appinf_downloads")}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Poppins,sans-serif",
                      color: "#046A3A",
                      fontWeight: 600,
                      fontSize: "50px",
                    }}
                  >
                    600+
                  </Typography>
                </Stack>
              </div>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "18px",
                  marginTop: "3rem",
                  textAlign: "justify",
                }}
                variant="p"
              >
                {t("appinf_mainbody")}
              </Typography>
              <Typography
                sx={{ color: "grey", marginTop: "1rem", width: "100%" }}
              >
                {t("appinf_test")}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  float: "left",
                  marginTop: "10px",
                }}
              >
                {/* <img src={playstore}  alt="" /> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.udyamwell.seller.app&hl=en_IN&gl=US"
                  target="_blank"
                  rel="noreferrer"
                  className="App-Link"
                >
                  <div className="App-Btn">
                    <img src={playstore} alt=" "></img>
                    <span>Playstore</span>
                  </div>
                </a>
                <a href=".." target="_blank" rel="noreferrer">
                  <div className="App-Btn">
                    <img src={appstore} alt=" "></img>
                    <span>Appstore</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <Box
        ref={countBoxRef}
        className="countBox"
        // style={{ transform: "translateY(-100px)", marginBottom: "120px" }}
      >
        <Box className="count">
          <Typography
            variant="h5"
            sx={{ ml: 2 }}
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
      <div className="service-title">
        <div className="service-head">
          <h1
            style={{
              fontFamily: "Poppins,sans-serif",
              fontSize: "50px",
              color: "black",
            }}
          >
            <span
              style={{
                color: "#046A3A",
                fontFamily: "Poppins,sans-serif",
                fontSize: "50px",
              }}
            >
              {t("our")}
            </span>{" "}
            {t("services")}
          </h1>
        </div>
        <div className="service-body">
          <p> {t("services_body")}</p>
        </div>
      </div>
      <div
        className="ServiceContainer"
        style={{ gap: "20px", margin: "80px 13%" }}
      >
        {/* {data?.map((d, index) => {
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
        })} */}
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
      {/*  */}
      {/* <Service /> */}
      {/*  */}
      <Box
        className="registerDownload"
        sx={{ p: "0 55px", margin: "0 auto", width: "80%" }}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant="h3" sx={{ fontWeight: "600", width: "80%" }}>
          {t("appinf_head1")}
          <span style={{ color: "#2e8446" }}> {t("appinf_head2")}</span>{" "}
          {t("appinf_head3")}{" "}
          <span style={{ color: "#2e8446" }}> {t("appinf_head4")}</span>{" "}
          {t("appinf_head5")}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "500",
            mt: 2,
            fontSize: "18px",
            textAlign: "justify",
            width: "80%",
          }}
          className="serviceSubHeading1"
        >
          {" "}
          {t("appinf_body")}
        </Typography>
      </Box>
      {/*  */}
      <Box sx={{ m: "0 auto" }}>
        <div className="banner" style={{ margin: "0 auto", width: "100%" }}>
          <div className="bannerImg">
            <img
              src={stepImages[activeStep]}
              alt=""
              style={{ maxWidth: "100%", height: "auto", width: "100%" }}
            />
          </div>
          <div className="bannerText" style={{ marginRight: "5%" }}>
            <div className="custom-accordion">
              <div className="accordion-counter-top">{`Step ${activeStep}/${totalSteps}`}</div>
              {renderAccordionStep(1, "appinf_step1", "appinf_stepbody1")}
              {renderAccordionStep(2, "appinf_step2", "appinf_stepbody2")}
              {renderAccordionStep(3, "appinf_step3", "appinf_stepbody3")}
              {renderAccordionStep(4, "appinf_step4", "appinf_stepbody4")}
              {renderAccordionStep(5, "appinf_step5", "appinf_stepbody5")}
              {renderAccordionStep(6, "appinf_step6", "appinf_stepbody6")}
              {renderAccordionStep(7, "appinf_step7", "appinf_stepbody7")}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default DownloadApp;
