import React from "react";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import './homepage.css';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { advance_feature_img, banner_img, learning_img } from "../assets";
import { AboutServices } from "./About";
const HomePage = () => {
    return ( 
        <>
        <div className="HomeContainer">
            <div className="banner">
                <div className="bannerText">
                    <h1>Partner in your Business Journey</h1>
                    <h6>UdyamWell: A Platform for you to make your entrepreneurial dreams come true. </h6>
                    <div className="homeButtons">
                        <button className="btn1">
                            View Course
                        </button>
                        <button className="btn2">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="bannerImg">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>

        {/*  */}

        <div className="homeServices">
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
                    <p> <span><DriveFileRenameOutlineOutlinedIcon/> </span> UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners.</p>
                    <p> <span><DriveFileRenameOutlineOutlinedIcon/> </span> UdyamWell provides personalized handholding support to help you through every stage of your business journey.</p>
                    <p> <span><DriveFileRenameOutlineOutlinedIcon/> </span> UdyamWell has a vast network of partners to help you with a range of services.</p>
                </div>
            {/*  */}
            <div className="homeAboutButton">
                <button>Read More</button>
            </div>
            </div>
        </div>
        {/* section */}
        <div className="homeFeature">
            <div className="feautreInfo">
            <div className="aboutSub">
                    <div className="about_"></div>
                    <div className="aboutSubText" style={{marginLeft:"10px"}}><p>Advance Feature</p></div>
                </div>
                <h1>Our Advance Educator Learning System</h1>
                <p id="featureText">UdyamWell is a Learning Platform especially designed for people from rural background to help them in growing their business and network.</p>
                <div className="features">
                    <div className="feature1">
                        <div className="featureIcon">
                            <NoteAltRoundedIcon/>
                        </div>
                        <h2>Learn Anywhere</h2>
                        <p>You can be at any part of the world and we will be ensuring that ypu recieves right information and guidance at your own convienient time.</p>
                    </div>
                    <div className="feature2">
                        <div className="featureIcon">
                            <TaskOutlinedIcon/>
                        </div>
                        <h2>Expert Teacher</h2>
                        <p>Our Mentors are expert in this domain and they are always available for you to help you grow your Business.</p>
                    </div>
                </div>
            </div>
            <div className="featureImg">
                <img src={advance_feature_img} alt="" />
            </div>
        </div>
        </>
    )
} 
export default HomePage;