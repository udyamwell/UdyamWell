import React, { useState } from "react";
import "./styles/footer.css";
import { fb, ig, linkedIn, logo1, twitter } from "../assets";
import Swal from "sweetalert2";
import axios from "axios";
const Footer = () => {
  const [email, setEmail] = useState("");

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
            <p style={{ textAlign: "justify" }}>
              UdyamWell is a true partner that guides you on your
              entrepreneurial journey and stays with you in every step of the
              way to assist you in overcoming challenges and also in reaching
              new heights.
            </p>
          </div>
          {/*  */}
          <div className="part2">
            <h1>Newsletter</h1>
            <p>Stay updated with our latest features and services.</p>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter email address"
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
            <h1>Contact Us</h1>
            <div className="contact_info">
              <p>
                <span> Address :</span> Catalyst Building, IIT Mandi, Himachal
                Pradesh - 175005
              </p>
              <p>
                <span> Phone :</span>{" "}
                <a href="tel:+91 8679625300">+91 8679625300</a>
              </p>
              <p>
                <span> Email : </span>
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
              <p>@Copyright 2023, UdyamWell Partner in your business Journey</p>
            </div>
            <div className="terms">
              <div className="terms_child">
                <a href="https://drive.google.com/file/d/15j9Z7c-HcstlDcPJ3KO018PeRLv5yzw8/view?usp=sharing" target="_blank">
                  Terms and Conditions
                </a>
              </div>
              <div className="terms_child">
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
