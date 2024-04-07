import React, { useState } from "react";
import "./styles/footer.css";
import { fb, ig, linkedIn, logo1, twitter } from "../assets";
import yt from "../assets/yt.png";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";
import TermsCondition from "../pages/TermsCondition";
import Privacy from "../pages/Privacy";
const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const handleClick = async () => {
    console.log(email);
    if (email === "") {
      alert("Please enter a valid email !");
      return;
    }
    try {
      await axios.post("https://udyamwell.com/api/newsletter", { email });
      Swal.fire({
        title: "Thank you for Subscribing!",
        text: "View our previous brochures",
        confirmButtonText: "View Brochures",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            "https://drive.google.com/file/d/1iExaGfa9UOmbUmk8oX1rC9d0TNh2po3X/view?usp=sharing",
            "_blank"
          );
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "There was an error subscribing.", "error");
    }
  };
  const [showTermsCondition, setShowTermsCondition] = useState(false);
  const [showPrivacy, setPrivacy] = useState(false);

  const handleShowTermsCondition = () => {
    setShowTermsCondition(true);
  };

  const handleCloseTermsCondition = () => {
    setShowTermsCondition(false);
  };

  const handlePrivacy = () => {
    setPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setPrivacy(false);
  };

  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="part1">
            <img src={logo1} alt="" />
            {/* <h3
              style={{
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "Poppins,sans-serif",
                color: "#046A3A",
              }}
            >
              उद्यमWell
            </h3> */}
            <p>{t("footer_body")}</p>
          </div>
          {/*  */}
          <div className="part2">
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "Poppins,sans-serif",
                color: "#046A3A",
              }}
            >
              {t("newsletter_head")}
            </h3>
            <p>{t("newsletter_body")}</p>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t("placeholder_email")}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="btnFooter">
                  <button
                    type="button"
                    className="footerBtn"
                    onClick={handleClick}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </form>
            <div className="social_icon">
              <a
                href="https://www.youtube.com/@UdyamWell/videos"
                target="blank"
              >
                <img src={yt} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/udyamwell"
                target="blank"
              >
                <img src={linkedIn} alt="" />
              </a>
              <a href="https://www.instagram.com/udyamwell" target="blank">
                <img src={ig} alt="" />
              </a>
              <a href="https://www.twitter.com/UdyamWell" target="blank">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.facebook.com/103844642681723" target="blank">
                <img src={fb} alt="" />
              </a>
            </div>
          </div>
          {/*  */}
          <div className="part3">
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "Poppins,sans-serif",
                color: "#046A3A",
              }}
            >
              {t("contact_us")}
            </h3>
            <div className="contact_info">
              <p style={{ color: "black" }}>
                <span style={{ color: "#046A3A" }}> {t("address_head")}</span>{" "}
                {t("address_body")}
              </p>
              <p>
                <span style={{ color: "#046A3A" }}> {t("phone_head")}</span>{" "}
                <a href="tel:+91 7978949923">+91 7978949923</a>
              </p>
              <p>
                <span style={{ color: "#046A3A" }}>{t("email_head")} </span>
                <a href="mailto:admin@udyamwell.com">
                  admin@udyamwell.com
                </a>{" "}
              </p>
            </div>
            <div id="google_translate_element"></div>
          </div>
          {/*  */}
        </div>
        <div className="bottom">
          <div className="bottom_child">
            <div className="copyrights">
              <p>Copyright © 2024, UdyamWell Private Limited.</p>
            </div>
            <div className="terms">
              <div className="terms_child">
                <button
                  className="bottom-btn"
                  onClick={handleShowTermsCondition}
                >
                  Terms and Conditions
                </button>
              </div>
              <div className="terms_child">
                <button className="bottom-btn" onClick={handlePrivacy}>
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTermsCondition && (
        <TermsCondition handleClose={handleCloseTermsCondition} />
      )}
      {showPrivacy && <Privacy handleClose={handleClosePrivacy} />}
    </>
  );
};

export default Footer;
