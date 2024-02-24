import React from "react";
import { landingPageBg_small } from "../assets";
import { Box, Typography } from "@mui/material";
import "./sellOnONDC.css";
import SellOnONDCForm from "../components/forms/SellOnONDCform";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
function SellOnONDC() {
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
          <h1>
            START <span style={{ color: "black" }}>SELLING </span> ON{" "}
            <span style={{ color: "black" }}>ONDC</span> WITH{" "}
            <span style={{ color: "black" }}>UDYAMWELL </span>{" "}
          </h1>
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
          <Typography variant="h3">
            <span style={{ color: "#2e8446" }}>What is </span> ONDC?
          </Typography>
          <Typography variant="h6" className="serviceSubHeading">
            ONDC, a government-backed initiative, stands for the Open Network
            for Digital Commerce. It is a pioneering network designed to
            transform the world of digital commerce seamlessly uniting sellers
            and buyers, creating an interconnected ecosystem that fosters
            collaborative and secure transactions.
          </Typography>
          <Typography variant="h6" className="serviceSubHeading">
            At its core, ONDC aims to address the challenges faced by
            traditional online marketplaces, such as trust issues, high
            transaction fees, and limited interoperability. Through harnessing
            the potential of blockchain technology and the beakn protocol, ONDC
            establishes an ecosystem where transactions are securely documented
            ensuring transparency and seamless verifiability.
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
          <Typography variant="h3">
            <span style={{ color: "#2e8446", marginTop: "40px" }}>
              Why Choose{" "}
            </span>{" "}
            ONDC?
          </Typography>
          <Typography variant="h6" className="serviceSubHeading">
            ONDC promotes a transparent and decentralised digital commerce
            ecosystem. It provides secure access, management, and potential
            monetization of your data, empowering you while fostering trust in
            the digital marketplace.
          </Typography>
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
      </div>
    </div>
  );
}

export default SellOnONDC;
