import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Carousel from "../components/Carousel";
import Bg_about from "../../src/assets/Bg_about.png";
import { useNavigate } from "react-router";
import founder from "../assets/founder.png";
import article2 from "../assets/article2.png";
import article1 from "../assets/article1.png";
import news1 from "../assets/news1.jpg";
const AboutCard = ({ heading, text1, text2, lists, icon }) => {
  return (
    <div className="cardContainer2" style={{ height: "550px" }}>
      <span>
        <i>{icon}</i>
      </span>
      <h4 style={{ width: "90%", marginInline: "auto" }}>{heading}</h4>
      <p
        style={{
          textAlign: "justify",
          color: "black",
          fontWeight: "200",
          fontSize: "18px",
        }}
      >
        {text1}
      </p>
    </div>
  );
};

const Checkpoint = ({ cx, cy, heading, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHoverEnter = () => {
    setIsOpen(true);
  };

  const handleHoverLeave = () => {
    setIsOpen(false);
  };

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="24"
        fill="#046A3A"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        style={{ cursor: "pointer" }}
      />
      <text
        x={cx}
        y={cy - 30}
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="black"
      >
        {heading}
      </text>
      {isOpen && (
        <>
          <foreignObject x={cx - 65} y={cy + 40} width="140" height="600">
            <div
              style={{
                background: "#046A3A",
                padding: "4px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <p style={{ textAlign: "justify" }}>{description}</p>
            </div>
          </foreignObject>
        </>
      )}
    </g>
  );
};
const Checkpoint2 = ({ cx, cy, heading, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHoverEnter = () => {
    setIsOpen(true);
  };

  const handleHoverLeave = () => {
    setIsOpen(false);
  };

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="8"
        fill="#046A3A"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        style={{ cursor: "pointer" }}
      />
      <text
        x={cx + 20}
        y={cy}
        textAnchor="start"
        fontSize="12"
        fontWeight="bold"
        fill="black"
      >
        {heading}
      </text>
      {isOpen && (
        <>
          <foreignObject x={cx + 10} y={cy + 2} width="80" height="100">
            <div>
              <p
                style={{
                  background: "#046A3A",
                  color: "white",
                  fontSize: "8px",
                  padding: "4px",
                }}
              >
                {description}
              </p>
            </div>
          </foreignObject>
        </>
      )}
    </g>
  );
};

const Boxs = ({ image, imageUrl, width }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    // Open pop-up window with image
    window.open(imageUrl, "_blank", "width=80%,height=auto");
  };
  return (
    <Link to="#" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
      <img
        src={image}
        alt="B"
        style={{
          width: "400px",
          height: "auto",
          transition: "transform 0.3s",
        }}
      />
    </Link>
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
        <h3>
          <span style={{ color: "#000000" }}>{t("our")}</span> {t("services")}
        </h3>
        <Typography
          variant="h6"
          fontWeight={"500"}
          fontSize={"16px"}
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
          Empowering <span style={{ color: "black" }}>Rural Communities </span>:
          Our Story
        </Typography>
        <Typography
          className="aboutText"
          sx={{
            textAlign: "center",
            margin: "10px auto",
            width: "70%",
            fontWeight: "500",
            fontFamily: "Poppins,sans-serif",
            padding: "0 20px",
            fontSize: "18px",
          }}
          variant="h6"
        >
          A spirit of transition is present in our country. From villages to
          cities, sparks of ideas connect us together. <br />
          We at UdyamWell are passionate about helping rural communities in
          consolidating their ideas.
        </Typography>
      </Box>

      <Carousel />

      <Box sx={{ paddingBlock: "50px", textAlign: "center" }}>
        <div className="banner" style={{ margin: "0px auto", width: "70%" }}>
          <div className="bannerText">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#046A3A",
                textAlign: "left",
                width: "100%",
                lineHeight: "60px",
              }}
            >
              <span style={{ color: "black" }}> Founder's </span> Words
            </h1>
            <cite
              style={{
                textAlign: "justify",
                fontSize: "18px",
                fontFamily: "Poppins,sans-serif",
                fontWeight: "500",
                paddingBlock: "20px",
                width: "100%",
              }}
            >
              As Mahatma Gandhi famously said,{" "}
              <spam style={{ fontWeight: "bold" }}>
                "The soul of India lives in its villages."
              </spam>{" "}
              I strongly believe that technology can play a transformative role
              in rural areas. With this vision in mind, we have launched
              UdyamWell, not just as a platform but as a movement dedicated to
              building a better Bharat that serves the world.
            </cite>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className="about_"></div>
              <p>Sachin Korla</p>
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
            <img src={founder} alt="" width={{ width: "100%" }} />
          </div>
        </div>
      </Box>
      {/* <Box className="countBox2" style={{ width: "70%" }}>
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
      </Box> */}
      <div className="timeline-box">
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "600",
            color: "#046A3A",
            textAlign: "center",
            width: "100%",
            lineHeight: "60px",
            // sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
          }}
        >
          Our
          <span style={{ color: "black" }}> Remarkable </span> Milestones
        </h1>

        <svg
          width="100%"
          style={{ paddingBlock: "100px" }}
          viewBox="0 -40 1200 350"
          className="timeline-big"
        >
          <path
            d="M 0,100 Q 150,200 300,100 Q 450,0 600,100 Q 750,200 900,100 Q 1050,0 1200,100"
            fill="none"
            stroke="green"
            strokeWidth="6"
            strokeDasharray="5"
          />

          <text x="2%" y="100" fontSize="34" textAnchor="middle">
            📍
          </text>
          <text x="98%" y="70" fontSize="34" textAnchor="middle">
            🏁
          </text>
          <Checkpoint
            cx={140}
            cy={150}
            heading="June"
            description="Company Incorporated."
          />
          <Checkpoint
            cx={300}
            cy={100}
            heading="July"
            description="Completed a successful pilot with our target customers."
          />
          <Checkpoint
            cx={500}
            cy={55}
            heading="August"
            description="Recognition by Startup India"
          />
          <Checkpoint
            cx={700}
            cy={145}
            heading="October"
            description=" Launched our website and organized the first Rural Mart."
          />
          <Checkpoint
            cx={900}
            cy={100}
            heading="February"
            description="Gained support from the Meity Startup Hub."
          />
          <Checkpoint
            cx={1080}
            cy={50}
            heading="March"
            description="Showcase at the World Youth Festival in Russia and Startup Mahakumbh."
          />
        </svg>
        <svg
          width="100%"
          style={{ paddingTop: "100px" }}
          viewBox="0 0 150 450"
          className="timeline-small"
        >
          <path
            d="M 50,0 L 50,380"
            fill="none"
            stroke="green"
            strokeWidth="3"
            strokeDasharray="6"
          />

          <text x="50" y="15" fontSize="14" textAnchor="middle">
            📍
          </text>
          <text x="56" y="375" fontSize="14" textAnchor="middle">
            🏁
          </text>
          <Checkpoint2
            cx={50}
            cy={30}
            heading="June"
            description="Incubation at IIT Mandi"
          />
          <Checkpoint2
            cx={50}
            cy={90}
            heading="July"
            description="Onboarding of first 15 Rural Enterprises"
          />
          <Checkpoint2
            cx={50}
            cy={150}
            heading="August"
            description="Recognition by Startup India"
          />
          <Checkpoint2
            cx={50}
            cy={210}
            heading="October"
            description="Successful organization of ` Rural Mart` at IIT Mandi during HST Edition 7 in collaboration with IIT Mandi Catalyst "
          />
          <Checkpoint2
            cx={50}
            cy={270}
            heading="February"
            description="Receipt of Grant from Meity Startup Hub"
          />
          <Checkpoint2
            cx={50}
            cy={330}
            heading="March"
            description="Representation of UdyamWell at World Youth Festival in Russia"
          />
        </svg>
      </div>
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <div
          className="banner"
          style={{
            margin: "0px auto",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <div
            className="bannerText"
            style={{ width: "100%", margin: "0px auto" }}
          >
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "600",
                color: "#046A3A",
                textAlign: "center",
                width: "80%",
                lineHeight: "60px",
                margin: "0px auto",
                // sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              Media
              <span style={{ color: "black" }}> and Recognition</span>
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                margin: "100px auto",
              }}
            >
              <Boxs image={article1} imageUrl={news1} />
              <Boxs
                image={article2}
                imageUrl={
                  "https://www.entrepreneur.com/en-in/news-and-trends/how-the-countrys-largest-bank-is-supporting-social-startups/449434"
                }
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default About;
