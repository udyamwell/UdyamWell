import React from "react";
import TopSection from "../components/TopSection";
import "./about.css";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Box, Typography } from "@mui/material";
import { landingPageBg_About } from "../assets";
const AboutCard = ({ heading, text1, text2, lists,icon }) => {
  return (
    <div className="cardContainer1">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p>{text1}</p>
    </div>
  );
};

export const AboutServices = ()=>{
  return(
    <div className="aboutServices" style={{marginTop:"15rem"}}>
        <div className="aboutServices1">
          <div className="aboutServicesDiv">
          <h1>UdyamWell Services</h1>
          <p >
            UdyamWell is a true partner that guides you on your entrepreneurial
            journey and stays with you in every step of the way to assist you in
            overcoming challenges and also in reaching new heights.
          </p>
          </div>
        </div>
        <AboutCard
          heading="Learning Platform & Community Support"
          icon={<ContentCopyRoundedIcon/>}
          text1="UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network."
        />
        <AboutCard
          heading="Handholding Support"
          icon={<IosShareRoundedIcon/>}
          text1="UdyamWell provides personalized handholding support to help you through every stage of your business journey. Whether you need help with product development, marketing, or finance, UdyamWell's team of experts is there to guide you. You can get one-on-one coaching and mentoring to help you make the best decisions for your business."
        />
        <AboutCard
          icon={<LightbulbOutlinedIcon/>}
          heading="Partner Connect"
          text1="UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest."
        />
      </div>
  )
}
const About = () => {
  return (
    <>
     <div className="landingPageCover">
          <img
            src={landingPageBg_About}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
    <Box sx={{mt:25,textAlign:"center"}}>
      <Typography variant="h2" sx={{color:"#236836",fontWeight:750}}>About Us</Typography>
      <Typography className="aboutText" sx={{textAlign:"center",margin:"10px auto",fontWeight:"bold",padding:"0 10px"}} variant="body1">UdyamWell is a true partner that guides you on your entrepreneurial journey and <br/>
      stays with you in every step of the way to assist you in overcoming challenges and also in reaching new heights.</Typography>
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
      <AboutServices/>
    </>
  );
};

export default About;
