import React, { useEffect } from "react";
import "./Privacy.css";
import { landingPageBg_small } from "../assets";

const TermsCondition = () => {
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
            <h3>Terms and Conditions of</h3>
            <h3>UdyamWell Private Limited Website</h3>
          </div>
          <div class="container-content">
            <p>
              Welcome to UdyamWell. These terms and conditions outline the rules
              and regulations for the use of our website.
            </p>
            <p>
              By accessing this website, you accept these terms and conditions.
              Do not continue to use UdyamWell if you do not agree with all the
              terms and conditions stated on this page.
            </p>
            <h3>Cookies:</h3>
            <p>
              We employ the use of cookies. By accessing UdyamWell, you agreed
              to use cookies in agreement with our Privacy Policy.
            </p>
            <h3>License:</h3>
            <p>
              Unless otherwise stated, UdyamWell and/or its licensors own the
              intellectual property rights for all material on this website. All
              intellectual property rights are reserved.
            </p>
            <p>
              - We may use the information to improve our products and services.
            </p>
            <p>
              - Periodically, we may send promotional emails about new products,
              special offers, or other information which we think you may find
              interesting.
            </p>
            <h3>You must not:</h3>
            <p>- Republish material from UdyamWell</p>
            <p>- Sell, rent, or sub-license material from UdyamWell</p>
            <p>- Reproduce, duplicate or copy material from UdyamWell</p>
            <p>- Redistribute content from UdyamWell</p>
            <h3>Content Liability:</h3>
            <p>
              We shall not be held responsible for any content that appears on
              your website. You agree to protect and defend us against all
              claims that arise on your website.
            </p>
            <h3>Reservation of Rights:</h3>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our website. You approve to immediately remove
              all links to our website upon request.
            </p>
            <p>
              We also reserve the right to amend these terms and conditions and
              it's linking policy at any time. By continuously linking to our
              website, you agree to be bound to and follow these linking terms
              and conditions.
            </p>
            <h3>Removal of links from our website:</h3>
            <p>
              If you find any link on our website that is offensive for any
              reason, you are free to contact and inform us at any moment. We
              will consider requests to remove links, but we are not obligated
              to do so or to respond to you directly.
            </p>
            <p>
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
            <h3>Disclaimer:</h3>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website. Nothing in this disclaimer
              will:
            </p>
            <p>
              - limit or exclude our or your liability for death or personal
              injury
            </p>
            <p>
              - limit or exclude our or your liability for fraud or fraudulent
              misrepresentation
            </p>
            <p>
              - limit any of our or your liabilities in any way that is not
              permitted under applicable law
            </p>
            <p>
              - exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </p>
            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer:
            </p>
            <p>(a) are subject to the preceding paragraph; and</p>
            <p>
              (b) govern all liabilities arising under the disclaimer, including
              liabilities arising in contract, in tort and for breach of
              statutory duty.
            </p>
            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
