import React, { useEffect } from "react";
import "./Privacy.css";
import { landingPageBg_small } from "../assets";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg_small}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div class="main-container">
        <div class="container">
          <div class="heading">
            <h3>Privacy Policy of</h3>
            <h3>UdyamWell Private Limited Website</h3>
          </div>
          <div class="container-content">
            <p>
              This Privacy Policy explains how UdyamWell collects, uses, and
              protects any information that you provide when using our website.
            </p>
            <h3>Information We Collect:</h3>
            <p>
              - We may collect personal information such as name, email, contact
              details, and enterprise name when you register on our website.
            </p>
            <h3>How We Use Your Information:</h3>
            <p>
              - The information collected is used for internal record keeping.
            </p>
            <p>
              - We may use the information to improve our products and services.
            </p>
            <p>
              - Periodically, we may send promotional emails about new products,
              special offers, or other information which we think you may find
              interesting.
            </p>
            <h3>Data Security:</h3>
            <p>
              - We are committed to ensuring that your information is secure. We
              have implemented suitable physical, electronic, and managerial
              procedures to safeguard and secure the information we collect
              online.
            </p>
            <h3>Never Sharing Your Information:</h3>
            <p>
              - We do not sell, distribute, or lease your personal information
              to third parties.
            </p>
            <h3>Your Consent:</h3>
            <p>
              - By using our website, you consent to the terms of this Privacy
              Policy.
            </p>
            <h3>Changes to the Privacy Policy:</h3>
            <p>- Any changes to this policy will be posted on this page.</p>
            <h3>Contact Information:</h3>
            <p>
              - If you have any questions or concerns regarding this Privacy
              Policy, you may contact us at
              <a href="mailto:admin@udyamwell.com">admin@udyamwell.com</a>.
            </p>
            <h3>This Privacy Policy was last updated on 22/November/2023.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
