import React from "react";
import "./service.css";
import { landingPageBg, service } from "../assets";
import { useNavigate } from "react-router";

import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Box, Typography } from "@mui/material";
const ServiceCard = ({ heading, text1, text2, lists,icon }) => {
  return (
    <div className="cardContainer">
      <span>
        <i>{icon}</i>
      </span>
      <h4>{heading}</h4>
      <p>{text1}</p>
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
  const data = [
    {
      heading: "Udyam Saathi",
      icon:<ContentCopyRoundedIcon/>,
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
      icon:<IosShareRoundedIcon/>,
      text1:
        "  UdyamWell's Handholding Support, provided by both our Udyam Sathis and the UdyamWell team, offers personalized assistance to rural entrepreneurs at every step of their journey. Our passionate mentors and dedicated team members provide expert advice, resources, and strategic direction, ensuring that rural enterprises receive the crucial support needed to thrive and prosper.",
      text2: "We can help you with",
      lists: [
        "1. Finding Udyam Saathi nearby you 🌎",
        "2. Request for Udyam Saathi 🤵",
      ],
    },
    {
        heading:'Partner Connect',
        icon:<LightbulbOutlinedIcon/>,
        text1:"UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest.",
        lists:[
            '1. Digital Partner 🌐','2. Logistics Partner 🚚','3. Accounts Partner 👨‍💻','4. Packaging Partner 📦','5. Legal Partner ⚖'
        ]
    },
  ];
  return (
    <div className="servicePage">
     <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
        <div className="HomeContainer" style={{margin:"8rem auto"}}>
            <div className="banner">
                <div className="bannerText">
                    <h1 style={{fontSize:"2.5rem"}}>Where <span style={{color:"black"}}>Rural</span> Enterprise <span  style={{color:"black"}}>Meets</span> Excellence  </h1>
                    <p>UdyamWell is where rural enterprise meets excellence. Our services are designed to elevate the quality and performance of rural businesses, setting a new standard for success in rural development. </p>
                    <div className="homeButtons">
                        <button style={{cursor:"pointer"}} className="btn1">
                           More Info
                        </button>
                        <button className="btn2" style={{cursor:"pointer"}}>
                            Explore Services
                        </button>
                    </div>
                </div>
                <div className="bannerImg">
                    <img src={service} alt="" width={{width:"100%"}}/>
                </div>
            </div>
        </div>
        <Box sx={{p:"0 55px"}} textAlign={'center'}>
          <Typography variant="h3"><span style={{color:"#2e8446"}}>Our</span> Services</Typography>
          <Typography variant="h6" className="serviceSubHeading" > Our comprehensive range of services is tailored to empower rural businesses, entrepreneurs, and communities to thrive in today's dynamic economic landscape.</Typography>
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
          )
        })}
      </div>
    </div>
  );
};

export default Service;
