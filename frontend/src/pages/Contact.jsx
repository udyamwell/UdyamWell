import React, { useEffect, useState } from "react";
import "./contact.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Button, Stack, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Bg_about from "../assets/Bg_about2.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import contact_img from "../assets/contact_img.png";
const Contact = () => {
  const { t } = useTranslation();
  const [wrong, setWrong] = useState("");
  const form = useRef();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // const Service_id = import.meta.env.Service_id;
  const Template_id = process.env.Template_id;
  console.log("se", Template_id);
  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [subject,setSubject] = useState("");
  // const [message,setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vv4ze4b",
        "template_a1xm98n",
        form.current,
        "e7EHTp-Nfbp7jKueD"
      )
      .then(
        (result) => {
          Swal.fire(
            `Email Sent`,
            "Please wait for the team to reply!!",
            "success"
          );
          window.location.reload();
          // console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      {/* <TopSection MainHeadinig="Contact Us" subText="" text="Contact Us" /> */}
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="contact" style={{ marginTop: "15rem" }}>
        <div className="contactForm">
          <div className="form">
            <h1
              className="subHeading"
              style={{ color: "#2E8446", fontSize: "50px" }}
            >
              {t("contact_head")}
            </h1>
            {wrong && <h3>{wrong}</h3>}
            <form ref={form} onSubmit={handleSubmit}>
              <Stack className="ContactStack" spacing={2}>
                <TextField
                  fullWidth
                  name="from_name"
                  variant="outlined"
                  type="text"
                  placeholder={t("formph_name")}
                  sx={{
                    backgroundColor: "#E0F1E5",
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "black", // Placeholder color
                      fontWeight: "400",
                    },
                  }}
                  // value={name}
                />
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder={t("formph_mail")}
                  name="email"
                  sx={{
                    backgroundColor: "#E0F1E5",
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "black", // Placeholder color
                      fontWeight: "400",
                    },
                  }}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  type="text"
                  name="subject"
                  placeholder={t("formph_subject")}
                  sx={{
                    backgroundColor: "#E0F1E5",
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "black", // Placeholder color
                      fontWeight: "400",
                    },
                  }}
                  // value={subject}
                  // onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                  // sx={{borderBottom:"1px solid black",mt:5}}
                  placeholder={t("formph_message")}
                  variant="outlined"
                  name="message"
                  sx={{
                    backgroundColor: "#E0F1E5",
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "black", // Placeholder color
                      fontWeight: "400",
                    },
                  }}
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                />
              </Stack>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  margin: "28px 28%",
                  color: "white",
                  padding: "10px 60px",
                  borderRadius: "20px",
                  fontWeight: "400",
                  textTransform: "inherit",
                  border: "none",
                  background:
                    "linear-gradient(90deg, rgba(46,132,70,1) 0%, rgba(0,100,0,1) 100%);",
                }}
              >
                {t("submit_btn")}
              </Button>
            </form>
            <div className="contact-img">
              <img src={contact_img} alt="" />
            </div>
          </div>
          {/*  */}
          <div className="information">
            <div className="contact-info">
              <span className="contact-info__icon">
                <HomeOutlinedIcon />
              </span>
              <div className="media-body">
                <h3>{t("address_body1")}</h3>
                <p>{t("address_body2")}</p>
              </div>
            </div>
            <div className="contact-info">
              <span className="contact-info__icon">
                <PhoneIphoneOutlinedIcon />
              </span>
              <div className="media-body">
              <h3>+91 797 8949 923</h3>
                <p>{t("phone_time")}</p>
              </div>
            </div>
            <div className="contact-info">
              <span className="contact-info__icon">
                <MailOutlinedIcon />
              </span>
              <div className="media-body">
                <a href="mailto:admin@udyamwell.com" target="_blank">
                  <h3>admin@udyamwell.com</h3>
                </a>
                <p>{t("mail_body")}</p>
              </div>
            </div>
            <div className="contact-info">
              <span className="contact-info__icon">
                <WhatsAppIcon />
              </span>
              <div className="media-body">
                <a
                  href="https://chat.whatsapp.com/GvR6jeujogr8YeOvspVF1F"
                  target="_blank"
                >
                  <h3>{t("contact_whatsapp")}</h3>
                </a>
                <p>{t("contact_whatsappbody")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
