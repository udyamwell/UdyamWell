import React, { useState } from "react";
import {
  front_view_hands_using_smartphone,
  hand_holding_smartphone,
} from "../assets";
import Bg_about from "../assets/Bg_about.png";
import toggle_btn from "../assets/toggle_btn.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import ondc from "../assets/ondc.png";
import sbi from "../assets/sbifoundationlogo.png";
import microsoft from "../assets/microsoft.png";
import iitmandicatalyst from "../assets/iitmandicatalyst.png";
import "./DownloadApp.css";

import { useTranslation } from "react-i18next";
import "./CustomAccordion.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
const ServiceCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div className="cardContainer" style={{ borderRadius: "15px" }}>
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p style={{ textAlign: "justify" }}>{text1}</p>
      <p style={{ color: "grey", marginTop: "px" }}>{text2}</p>
      <ul>
        {lists.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
const DownloadApp = () => {
  const { t } = useTranslation();
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
              sx={{ fontWeight: "bold", width: "100%" }}
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
                  <Typography sx={{ color: "grey" }}>
                    {t("appinf_activeusers")}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    -
                  </Typography>
                </Stack>
                <hr style={{ height: "15px" }} />
                <Stack sx={{ textAlign: "center" }}>
                  <Typography sx={{ color: "grey" }}>
                    {t("appinf_downloads")}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    -
                  </Typography>
                </Stack>
              </div>
              <Typography sx={{ fontWeight: "bold", marginTop: "3rem" }}>
                {t("appinf_mainbody")}
              </Typography>
              <Typography
                sx={{ color: "grey", marginTop: "1rem", width: "100%" }}
              >
                {t("appinf_test")}
              </Typography>
              <div style={{ width: "100%", float: "left", marginTop: "10px" }}>
                {/* <img src={playstore}  alt="" /> */}
                <a
                  href="https://i.diawi.com/3uzBgy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    sx={{ ml: 2, color: "white" }}
                    // aria-describedby={id}
                    variant="contained"
                    // onClick={handleClick}
                  >
                    {t("UdyamWell")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Box>
      </div>
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
      <div className="service-title">
        <div className="service-head">
          <h1>
            <span style={{ color: "green" }}>Our</span> Services
          </h1>
        </div>
        <div className="service-body">
          <p>
            {" "}
            Our comprehensive range of services is tailored to empower rural
            businesses, entrepreneurs, and communities to thrive in today's
            dynamic economic landscape.
          </p>
        </div>
      </div>
      <div
        className="ServiceContainer"
        style={{ gap: "20px", margin: "80px 13%" }}
      >
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
      {/*  */}
      {/* <Service /> */}
      {/*  */}
      <Box
        className="registerDownload"
        sx={{ p: "0 55px", margin: "0 auto", width: "60%" }}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant="h3" sx={{ fontWeight: "600" }}>
          {t("appinf_head1")}
          <span style={{ color: "#2e8446" }}> {t("appinf_head2")}</span>{" "}
          {t("appinf_head3")}{" "}
          <span style={{ color: "#2e8446" }}> {t("appinf_head4")}</span>{" "}
          {t("appinf_head5")}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "nomral",
            mt: 2,
            fontSize: "18px",
            textAlign: "justify",
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
              src={front_view_hands_using_smartphone}
              alt=""
              style={{ width: "90%" }}
            />
          </div>
          <div className="bannerText" style={{ marginRight: "5%" }}>
            {/* <Stack spacing={2}>
              <Accordion variant="contained" style={{ textAlign: "right" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step1")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    {t("appinf_stepbody1")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step2")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step3")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step4")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody4")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step5")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step6")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step7")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
            </Stack> */}
            <div className="custom-accordion">
              <div className="accordion-counter-top">{`Step ${activeStep}/${totalSteps}`}</div>
              {renderAccordionStep(1, "appinf_step1", "appinf_stepbody1")}
              {renderAccordionStep(2, "appinf_step2", "appinf_stepbody")}
              {renderAccordionStep(3, "appinf_step3", "appinf_stepbody")}
              {renderAccordionStep(4, "appinf_step4", "appinf_stepbody4")}
              {renderAccordionStep(5, "appinf_step5", "appinf_stepbody")}
              {renderAccordionStep(6, "appinf_step6", "appinf_stepbody")}
              {renderAccordionStep(7, "appinf_step7", "appinf_stepbody")}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default DownloadApp;
