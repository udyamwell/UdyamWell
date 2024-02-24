import React, { useState } from "react";
import "./styles/footer.css";
import { fb, ig, linkedIn, logo1, twitter } from "../assets";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const handleClick = () => {
    console.log(email);
    if (email === "") {
      alert("Please enter a valid email !");
      return;
    }
    axios
      .post("https://udyamwell.com/api/newsletter", { email })
      .then((res) => {
        // console.log(res.status);
        Swal.fire("Thankyou for Subscribing !");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="part1">
            <img src={logo1} alt="" />
            <h1>उद्यमWell</h1>
            <p style={{ textAlign: "justify" }}>{t("footer_body")}</p>
          </div>
          {/*  */}
          <div className="part2">
            <h1>{t("newsletter_head")}</h1>
            <p>{t("newsletter_body")}</p>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t("placeholder_email")}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="btn">
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
              <a href="https://www.facebook.com/103844642681723" target="blank">
                <img src={fb} alt="" />
              </a>

              <a href="https://www.twitter.com/UdyamWell" target="blank">
                <img src={twitter} alt="" />
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
            </div>
          </div>
          {/*  */}
          <div className="part3">
            <h1>{t("contact_us")}</h1>
            <div className="contact_info">
              <p style={{ color: "black" }}>
                <span style={{ color: "green" }}> {t("address_head")}</span>{" "}
                {t("address_body")}
              </p>
              <p>
                <span style={{ color: "green" }}> {t("phone_head")}</span>{" "}
                <a href="tel:+91 7978949923">+91 7978949923</a>
              </p>
              <p>
                <span style={{ color: "green" }}>{t("email_head")} </span>
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
              <p>{t("copyright")}</p>
            </div>
            <div className="terms">
              <div className="terms_child">
                <Link to="/termscondition">{t("terms_txt")}</Link>
              </div>
              <div className="terms_child">
                <Link to="/privacy">{t("policy_txt")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
