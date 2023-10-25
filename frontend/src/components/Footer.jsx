import React from "react";
import "./styles/footer.css";
import { fb, ig, linkedIn, logo1, twitter } from "../assets";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="part1">
            <img src={logo1} alt="" />
            <h1>उद्यमWell</h1>
            <p style={{textAlign:"justify"}}>
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
                />
                <div className="btn">
                  <button type="button" className="footerBtn">
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
              <a href="https://www.linkedin.com/company/udyamwell" target="blank">
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
                <p><span> Address :</span> Catalyst Building, IIT Mandi, Himachal Pradesh - 175005</p>
                <p><span> Phone :</span> +91 8679625300</p>
                <p><span> Email : </span>admin@udyamwell.com </p>
            </div>
            <div id="google_translate_element"></div>
 
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Footer;
