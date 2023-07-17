import React from "react";
import TopSection from "../components/TopSection";
import './contact.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
    return (
        <>
          <TopSection MainHeadinig="Contact Us" subText="" text="Contact Us" />

          <div className="contact">
            <div className="contactForm">
            <div className="form">
            <h1 className="subHeading">Get in Touch</h1>
            <form action="">
            <input
                  type="text"
                  className="halfInput"
                  placeholder="Enter your Name"
                />
                 <input
                  type="email"
                  className="halfInput"
                  placeholder="Enter your Email Address"
                />
                 <input
                  style={{width:"86%"}}
                  type="text"
                  placeholder="Enter Subject"
                />
                <textarea
                style={{width:"86%",resize:"none"}}
                placeholder="Enter your message"
                rows={'50'}
                cols={'40'}
                />
                <Button variant="contained" sx={{ml:1}}>Submit</Button>
            </form>
            </div>
            {/*  */}
            <div class="information">
          <div class="contact-info">
            <span class="contact-info__icon"><HomeOutlinedIcon/></span>
            <div class="media-body">
              <h3>Catalyst Building, IIT Mandi.</h3>
              <p>Himachal Pradesh, 175005</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-info__icon"><PhoneIphoneOutlinedIcon/></span>
            <div class="media-body">
              <h3>+91 867 9625 300</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-info__icon"><MailOutlinedIcon/></span>
            <div class="media-body">
            <a href="mailto:admin@udyamwell.com" target="_blank"><h3>admin@udyamwell.com</h3></a>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-info__icon"><WhatsAppIcon/></span>
            <div class="media-body">
              <a href='https://api.whatsapp.com/send?phone=+91 9045839741' target='_blank'><h3>Connect on Whatsapp</h3></a>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          </div>
          </div>

          </div>
        </>
    )
}

export default Contact;