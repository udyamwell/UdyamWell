import React, { useState, useEffect } from "react";
import { landingPageBg_small } from "../assets";
import { Box, Typography } from "@mui/material";
import "./sellOnONDC.css";
import SellOnONDCForm from "../components/forms/SellOnONDCform";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TestimonialCarousel from "../components/TestimonialCarousel";
import toggle_btn from "../assets/toggle_btn.png";
import banner_ondc from "../assets/BANNER.jpg";
function SellOnONDC() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step === activeStep ? "0" : step);
  };
  const renderAccordionStep = (step, summaryKey, bodyKey) => (
    <div
      key={step}
      className={`accordion-item ${activeStep === step ? "active" : ""}`}
    >
      <div className="accordion-summary" onClick={() => handleStepClick(step)}>
        <span className="accordion-text">{summaryKey}</span>
        <span
          className={`accordion-icon ${activeStep === step ? "rotate" : ""}`}
        >
          <img src={toggle_btn} alt="" style={{ width: "20px" }} />
        </span>
      </div>
      {activeStep === step && <div className="accordion-body">{bodyKey}</div>}
    </div>
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="sellonondc">
      <div className="landingPageCover">
        <img
          src={landingPageBg_small}
          width="100%"
          height="100vh"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="main-container">
        <div className="heading">
          <h1 className="Text_Ondch1" style={{ width: "100%" }}>
            Opening <span style={{ color: "black" }}>up a </span> new{" "}
            <span style={{ color: "black" }}>world!</span>
          </h1>
          <p style={{ marginTop: "4px" }}>
            Start Selling on ONDC with UdyamWell
          </p>
        </div>
        <div className="form">
          <SellOnONDCForm />
        </div>
      </div>
      <div alignItems={"center"}>
        <Box
          sx={{ p: "0 55px" }}
          textAlign={"center"}
          width={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <h1 className="Text_Ondch1">
            <span style={{ color: "#046A3A" }}>All about </span> ONDC
          </h1>
          <hr
            style={{
              width: "80%",
              height: "3px",
              background: "#046A3A",
              border: "none",
            }}
          />
          <Typography
            variant="h6"
            fontFamily={"Poppins,sans-serif"}
            fontWeight={"500"}
            fontSize={"18px"}
            className="serviceSubHeading"
          >
            ONDC (Open Network for Digital Commerce) is a revolutionary network
            seamlessly uniting potential sellers and buyers via an
            interconnected forum fostering collaborative and secured
            transactions.
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"Poppins,sans-serif"}
            fontWeight={"500"}
            fontSize={"18px"}
            className="serviceSubHeading"
          >
            At the root level, ONDC addresses the issues faced in traditional
            marketplaces which include but are not limited to lack of
            transparency, higher costs and unsatisfactory interoperability.
            Utilizing the potential of blockchain technology and the Beckn
            protocol, ONDC establishes a secure network that documents
            transactions while maintaining transparency and efficient
            verifiability.
          </Typography>
        </Box>

        <Box
          sx={{ p: "0 55px" }}
          textAlign={"center"}
          width={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"80px"}
        >
          {" "}
          {/* <Typography
            variant="h3"
            fontFamily={"Poppins,sans-serif"}
            fontSize={"50px"}
            fontWeight={"600"}
          >
            <span style={{ color: "#046A3A", marginTop: "40px" }}>
              Choose Value,{" "}
            </span>{" "}
            Choose ONDC!
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"Poppins,sans-serif"}
            fontWeight={"500"}
            fontSize={"18px"}
            className="serviceSubHeading"
          >
            ONDC supports a transparent and decentralised system specifically
            tailored for digital commerce. With ONDC, secure access, management
            and the potential monetization of your valuable data are right at
            your fingertips! Thus, ONDC empowers and grants you a strong footing
            in the digital marketplace.
          </Typography> */}
          <img
            src={banner_ondc}
            style={{ width: "80%", borderRadius: "20px" }}
            alt="ondc"
          />
          <Box className="countBox1" width={"80%"}>
            <Box className="count1">
              <PeopleAltOutlinedIcon sx={{ fontSize: "50px" }} />{" "}
              <Typography
                variant="h5"
                sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
              >
                Expanded customer choice
              </Typography>
            </Box>
            <Box className="count1">
              <LaptopMacIcon sx={{ fontSize: "50px" }} />{" "}
              <Typography
                variant="h5"
                sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
              >
                Catalyzes innovation
              </Typography>
            </Box>
            <Box className="count1">
              <PaymentsIcon sx={{ fontSize: "50px" }} />{" "}
              <Typography
                variant="h5"
                sx={{ ml: 2, color: "#236836", fontWeight: 600 }}
              >
                Cost efficiency
              </Typography>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            background: "#E6F0E8",
            paddingBlock: "120px",
            marginBlock: "60px",
          }}
        >
          <Box
            sx={{ p: "0 55px" }}
            textAlign={"center"}
            width={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <h1 className="Text_Ondch1">
              <span style={{ color: "black" }}>UdyamWell </span>- Your
              ‘must-have’ success partner!
            </h1>

            <Typography
              variant="h6"
              fontFamily={"Poppins,sans-serif"}
              fontWeight={"500"}
              fontSize={"18px"}
              className="serviceSubHeading"
            >
              UdyamWell strives to support and empower the ambitions and dreams
              born in rural regions. Our ability to analyze data will definitely
              help in aiding e-commerce operations, foster growth in the digital
              environment and boost sales performances. With unmatched security,
              full-time support and the ability to personalize the services, you
              are sure to experience immense gains!
            </Typography>
          </Box>
          <Box
            sx={{ p: "0 55px" }}
            textAlign={"center"}
            width={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"80px"}
          >
            <h1 className="Text_Ondch1">
              <span style={{ color: "black" }}>A breath away from </span>
              Onboarding!
            </h1>

            <Typography
              variant="h6"
              fontFamily={"Poppins,sans-serif"}
              fontWeight={"500"}
              fontSize={"18px"}
              className="serviceSubHeading"
            >
              UdyamWell has an immensely successful track record of aiding
              several rural customers onboard into the ONDC eco-system. The team
              strives tirelessly to bring a magnificent onboarding experience to
              the customers. We are honoured to have been able to contribute to
              the ONDC community. Get access to a procedure that proceeds at
              your own pace! To register you just need to fill the form given
              above and we’ll be all set!
            </Typography>
          </Box>
        </div>
        <Box
          sx={{ p: "0 55px" }}
          textAlign={"center"}
          width={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"80px"}
        >
          <h1 className="Text_Ondch1">
            {" "}
            They talk about it
            <span style={{ color: "black" }}> Better</span> than us
          </h1>
          <div style={{ width: "80%" }}>
            <TestimonialCarousel />
          </div>
        </Box>
        <Box
          sx={{ p: "0 55px" }}
          textAlign={"center"}
          width={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"80px"}
          marginBottom={"40px"}
        >
          <h1 className="Text_Ondch1">
            Frequently
            <span style={{ color: "Black" }}> Asked</span> Questions
          </h1>
          <div className="custom-accordion">
            {renderAccordionStep(
              1,
              "How to start selling on ONDC with UdyamWell?",
              "The procedure is quite simple. The UdyamWell app has to be installed onto your device. An account has to be setup upon launching the app. Just basic details like name, email address and phone number will do. A business setup mechanism may require details like business name, address, PAN card, description logo and so on. Henceforth you should be able to list your products and services. A review and approval procedure will take place to confirm that the platform's policies are followed. UdyamWell may additionally offer training materials and resources. Users may also have access to UdyamSathi and various other support systems."
            )}
            {renderAccordionStep(
              2,
              "Is there any payment required for this procedure?",
              "No payment is required to make use of ONDC. A success-based commission is charged on sales. Free onboarding and budget-friendly training programs are provided."
            )}
            {renderAccordionStep(
              3,
              "Is UdyamWell secure?",
              "UdyamWell offers a highly secure and well maintained environment. A specialized team works efficiently to ensure that no harm comes to any user."
            )}
            {renderAccordionStep(
              4,
              "What does ONDC offer?",
              "ONDC is an open source service network that brings together several vendors under a common roof. It makes sure that there is an impartial and fair deal for all buyers, sellers and partners."
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default SellOnONDC;
