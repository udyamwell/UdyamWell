import React, { useEffect } from "react";
import "./about.css";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import { Box, Typography } from "@mui/material";
import { landingPageBg_About , landingPageBg_small} from "../assets";
const AboutCard = ({ heading, text1, text2, lists,icon }) => {
  return (
    <div className="cardContainer1">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p style={{textAlign:"justify"}}>{text1}</p>
    </div>
  );
};
export const AboutServices = ()=>{
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return(
    <div className="aboutServices" style={{marginTop:"10rem"}}>
       <Box sx={{p:"0 55px"}} textAlign={'center'}>
          <Typography variant="h3"><span style={{color:"#2e8446"}}>Our</span> Services</Typography>
          <Typography variant="h6" className="serviceSubHeading" > UdyamWell is a true partner that guides you on your entrepreneurial
            journey and stays with you in every step of the way to assist you in
            overcoming challenges and also in reaching new heights.</Typography>
        </Box>
        <div className="aboutServices1">
          {/* <div className="aboutServicesDiv">
         
          <h1>UdyamWell Services</h1>
          <p style={{textAlign:"justify"}}>
            UdyamWell is a true partner that guides you on your entrepreneurial
            journey and stays with you in every step of the way to assist you in
            overcoming challenges and also in reaching new heights.
          </p>
          </div> */}
        </div>
        <AboutCard
          heading="Learning Platform & Community Support"
          icon={<ContentCopyRoundedIcon/>}
          text1="UdyamWell's learning and community support platform is a dynamic hub designed to empower rural entrepreneurs with comprehensive learning resources, mentorship, and a thriving community network. It offers tailored courses, expert guidance, and collaborative spaces, fostering an environment where innovation and growth flourish, ultimately driving lasting prosperity in rural India."
        />
        {/* <AboutCard
          heading="Handholding Support"
          icon={<IosShareRoundedIcon/>}
          text1=" 
          UdyamWell's Handholding Support, provided by both our Udyam Sathis and the UdyamWell team, offers personalized assistance to rural entrepreneurs at every step of their journey. Our passionate mentors and dedicated team members provide expert advice, resources, and strategic direction, ensuring that rural enterprises receive the crucial support needed to thrive and prosper."
        />
        <AboutCard
          icon={<LightbulbOutlinedIcon/>}
          heading="Partner Connect"
          text1="UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest."
        /> */}
        <AboutCard
          icon={<HandshakeTwoToneIcon/>}
          heading="Partner Connect"
          text1="UdyamWell provides personalized assistance to rural entrepreneurs at every step of their journey, from ideation to execution. We have a vast network of partners to help you with a range of services, so you can focus on your core business activities."
        />
        <AboutCard
          icon={<LightbulbOutlinedIcon/>}
          heading="ONDC enabled seller platform- "
          text1="UdyamWell's ONDC (Open Network for Digital Commerce) Enabled Seller Platform empowers rural entrepreneurs to expand their reach and access larger consumer markets. Leveraging this platform, sellers can seamlessly list their products, access logistics and payment services, and connect with a broader customer base, thus fostering economic growth in rural communities. 
          "
        />
      </div>
  )
}
const About = () => {
  return (
    <>
     <div className="landingPageCover">
          <img
            src={landingPageBg_small}
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
      {/* <AboutServices/> */}
    </>
  );
};

export default About;
