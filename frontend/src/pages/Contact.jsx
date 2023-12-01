import React, { useEffect, useState } from "react";
import './contact.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Button, Stack, TextField } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { landingPageBg_small } from "../assets";
import emailjs  from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [wrong,setWrong] = useState("");
  const form = useRef();
  useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);
  // const Service_id = import.meta.env.Service_id;
  const Template_id = process.env.Template_id;
  console.log("se",Template_id)
  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [subject,setSubject] = useState("");
  // const [message,setMessage] = useState("");
  const handleSubmit = (e)=> {
    e.preventDefault();
    emailjs.sendForm('service_vv4ze4b', 'template_a1xm98n', form.current, 'e7EHTp-Nfbp7jKueD')
      .then((result) => {
        Swal.fire(
          `Email Sent`,
          "Please wait for the team to reply!!",
          "success"
        );
        window.location.reload();
          // console.log(result.text);
      }, (error) => {
          alert(error.text);
      });
  }
  
    return (
        <>
          {/* <TopSection MainHeadinig="Contact Us" subText="" text="Contact Us" /> */}
          <div className="landingPageCover">
          <img
            src={landingPageBg_small}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
          <div className="contact" style={{marginTop:"15rem"}}>
            <div className="contactForm">
            <div className="form">
            <h1 className="subHeading">Get in Touch</h1>
            {wrong && (<h3>{wrong}</h3>)}
          <form ref={form} onSubmit={handleSubmit}>
          <Stack className="ContactStack" spacing={2}>
           <TextField
            fullWidth
            name="from_name"
            variant="outlined"
                  type="text"
                  placeholder="Enter your Name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
                 <TextField
                 variant="outlined"
                  type="email"
                  placeholder="Enter your Email Address"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                 <TextField
                 variant="outlined"
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  // value={subject}
                  // onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                // sx={{borderBottom:"1px solid black",mt:5}}
                placeholder="Enter your message"
                variant="outlined"
                name="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
                />
           </Stack>
                <Button variant="contained" type="submit" sx={{ml:1,mt:3}}>Submit</Button>
          </form>
            </div>
            {/*  */}
            <div className="information">
          <div className="contact-info">
            <span className="contact-info__icon"><HomeOutlinedIcon/></span>
            <div className="media-body">
              <h3>Catalyst Building, IIT Mandi.</h3>
              <p>Himachal Pradesh, 175005</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon"><PhoneIphoneOutlinedIcon/></span>
            <div className="media-body">
              <h3>+91 867 9625 300</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon"><MailOutlinedIcon/></span>
            <div className="media-body">
            <a href="mailto:admin@udyamwell.com" target="_blank"><h3>admin@udyamwell.com</h3></a>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon"><WhatsAppIcon/></span>
            <div className="media-body">
              <a href='https://chat.whatsapp.com/GvR6jeujogr8YeOvspVF1F' target='_blank'><h3>Connect on Whatsapp</h3></a>
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