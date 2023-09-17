import React from "react";
import {  banner_img, landingPageBg, learning_img } from "../assets";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { AboutServices } from "./About";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import './homepage.css';
const HomePage = () => {
    const navigate = useNavigate();
    return ( 
        <>
        <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
        <div className="HomeContainer">
            <div className="banner">
                <div className="bannerText">
                    
                    <h1>Partner in <span style={{color:"black"}}>your</span> Business Journey</h1>
                    <Typography variant="body1" sx={{textAlign:"justify",color:"black"}}>UdyamWell: A one-stop solution for you from your capacity building to product sales. </Typography>
                    <div className="homeButtons">
                        <button style={{cursor:"pointer"}} className="btn1"  onClick={()=>navigate('/courses')}>
                            View Course
                        </button>
                        <button className="btn2" style={{cursor:"pointer"}}  onClick={()=>navigate('/udyamsheel')}>
                            Udyamsheel
                        </button>
                    </div>
                </div>
                <div className="bannerImg">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
        {/* section 2 */}
        <Box className='countBox'>
            <Box className='count'>
                <LaptopMacIcon sx={{fontSize:"50px"}}/> <Typography variant="h5" sx={{ml:2,color:"#236836",fontWeight:600}}>5 Courses</Typography>
            </Box>   
            <Box className='count'>
                <PeopleAltOutlinedIcon sx={{fontSize:"50px"}}/> <Typography variant="h5" sx={{ml:2,color:"#236836",fontWeight:600}}>10+ Mentors</Typography>
            </Box> 
            <Box className='count'>
                <PersonSharpIcon sx={{fontSize:"50px"}}/> <Typography variant="h5" sx={{ml:2,color:"#236836",fontWeight:600}}>100+ Business</Typography>
            </Box>            
        </Box>
        {/* section 3 */}
        <div className="homeServices" style={{marginTop:"3rem"}}>
        <AboutServices/>
        </div>
        {/*  section3*/}
        <div className="homeAbout">
            <div className="aboutImg">
                <img src={learning_img} alt="" />
            </div>
            <div className="aboutInfo">
                <div className="aboutSub">
                    <div className="about_"></div>
                    <div className="aboutSubText" style={{marginLeft:"10px"}}><p>About Us</p></div>
                </div>
                {/*  */}
                <h1>Learning with Love and Loughter</h1>
                <div className="aboutKeyPoints">
                    <p>UdyamWell is a dynamic platform dedicated to nurturing and empowering rural entrepreneurs across India. Our comprehensive ecosystem includes innovative programs, mentorship, access to markets, and learning resources. With a strong emphasis on fostering self-reliance and prosperity, UdyamWell strives to bridge the gap between rural enterprises and urban markets, enabling economic growth and sustainable livelihoods in rural communities. </p>
                </div>
            {/*  */}
            <div className="homeAboutButton">
                <button>Read More</button>
            </div>
            </div>
        </div>
    </>
    )
} 
export default HomePage;