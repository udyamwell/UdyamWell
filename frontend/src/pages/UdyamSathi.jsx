import React, { useEffect } from "react";
import "./udyamsathi.css";
import { banner_img, landingPageBg, udyamsathiQR } from "../assets";
import udyamsathi from "../assets/udyamsathi.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Bg_about from "../assets/Bg_about.png";
import { Link } from "react-router-dom";
const UdyamSathi = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <div>
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="HomeContainer" style={{ margin: "0rem auto 0 auto" }}>
        <div className="banner" style={{ width: "70%" }}>
          <div className="bannerText">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              {" "}
              <span style={{ color: "black" }}>
                UdyamSathi <br />
              </span>{" "}
              Program{" "}
            </h1>
            <p
              style={{
                textAlign: "justify",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              The Udyamsathi Program is a unique initiative that engages
              enthusiastic and dedicated student ambassadors to act as mentors
              and ambassadors for rural enterprises. As a Udyamsathi, you will
              be at the forefront of connecting with and supporting rural
              businesses, helping them realize the benefits of joining the
              Udyamwell ecosystem. <br />
              {/* <button
                style={{ cursor: "pointer" }}
                className="download_btn position"
                onClick={() => navigate("/requestpage")}
              >
                Join Now
              </button> */}
            </p>
          </div>
          <div className="bannerImg">
            <img src={udyamsathi} alt="" style={{ borderRadius: "20px" }} />
          </div>
        </div>
      </div>
      {/*  */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          margin: "1rem auto",
          backgroundColor: "#e0f1e5",
          padding: 3,
          borderRadius: "55px",
        }}
        className="brochure"
      >
        <Typography variant="h6" color={"#266319"}>
          Interested in learning more? Download our informative brochure to get
          all the details!!
        </Typography>
        {/* <Button
          variant="contained"
          sx={{ color: "white", ml: 3, p: "10px 50px", borderRadius: "25px" }}
          href="/requestpage"
          onClick={()=>{
            console.log("Hello from udyamsathi")
          }}
        >
          Download
        </Button> */}
        <button
          style={{ cursor: "pointer" }}
          className="download_btn"
          onClick={() => navigate("/requestpage")}
        >
          Download
        </button>
      </Box>
      {/*  */}

      {/*  */}
      <div
        className="HomeContainer"
        style={{ margin: "0rem auto 0 auto", width: "90%" }}
      >
        <div className="banner">
          <div className="bannerText_udyamsathi">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              {" "}
              <span style={{ color: "black" }}>Register </span> Here{" "}
            </h1>
            <p style={{ textAlign: "justify", fontSize: "16px" }}>
              Are you ready to be a catalyst for change? The Udyamsathi Program
              by Udyamwell is calling out to you! This is your chance to embark
              on a transformative journey, where your passion meets purpose, and
              your actions resonate in the hearts of rural entrepreneurs. <br />
              <br />
              <a href="https://forms.gle/VPMWHcUxDmvNxE8d7" target="_blank">
                <button style={{ cursor: "pointer" }} className="download_btn">
                  Click Here
                </button>
              </a>
            </p>
          </div>
          <div className="qrCode_udyamsathi">
            <img
              src={udyamsathiQR}
              alt="qrcode"
              width={"132px"}
              height={"132px"}
            />
            <p style={{ fontSize: "0.6rem" }}>Scan Here to fill via phone</p>
          </div>
        </div>
      </div>
      <div
        className="saathiContainer"
        style={{ width: "80%", margin: "0px auto" }}
      >
        <div className="saathiForm">
          <h1 style={{ color: "green", textAlign: "center" }}>
            Registration / पंजीकरण
          </h1>
        </div>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd8rdTq9MRAmbWfpZhmKirrC1A8BFwElk_zbSrWsGOQOGnIZg/formResponse">
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Name / आपका नाम
            </label>
            <input
              type="text"
              name="entry.449441306"
              placeholder="Enter your name"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Phone Number / फ़ोन नंबर
            </label>
            <input
              type="tel"
              name="entry.775556124"
              placeholder="Enter your phone number"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Name of your Enterprise / आपके उद्यम का नाम
            </label>
            <input
              type="text"
              name="entry.1579784548"
              placeholder="Enterise Name"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Founder/Owner Name / संस्थापक का नाम
            </label>
            <input
              type="text"
              name="entry.877036990"
              placeholder="Founder Name"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Email Address/ मेल पता
            </label>
            <input
              type="email"
              name="entry.1894326054"
              placeholder="Enter your Email"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Business Address / व्यावसायिक पता
            </label>
            <input
              type="text"
              name="entry.1414131589"
              placeholder="Address"
              required
            />{" "}
          </div>
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Any Website or Social Media link (If Available) / कोई भी वेबसाइट
              या सोशल मीडिया लिंक (यदि उपलब्ध हो)
            </label>
            <input type="text" name="entry.205543619" placeholder="Link" />{" "}
          </div>{" "}
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              Number of people in the organization (Team Size) / संगठन में लोगों
              की संख्या
            </label>
            <input
              type="text"
              name="entry.1018743359"
              placeholder="Number of people"
            />{" "}
          </div>{" "}
          <hr />
          <div className="field">
            <label for="" className="" style={{ fontSize: "18px" }}>
              What business you are involved in? / आप किस व्यवसाय से जुड़े हैं?
            </label>
            <input
              type="text"
              name="entry.1951356654"
              placeholder="Business"
              required
            />{" "}
          </div>{" "}
          <hr />
          <div
            className="field"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <label for="" className="" style={{ fontSize: "18px" }}>
              Are you willing to actively participate in workshops, training
              sessions, and events organized by UdyamWell? / क्या आप हमारे संगठन
              द्वारा आयोजित कार्यशालाओं, प्रशिक्षण सत्रों और कार्यक्रमों में
              सक्रिय रूप से भाग लेने के इच्छुक हैं?
            </label>
            <div>
              <input
                type="radio"
                name="entry.1352070005"
                id="Yes"
                value="Yes"
              />
              <label for="Yes">Yes / हाँ</label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.1352070005"
                id="notsure"
                value="notsure"
              />
              <label for="notsure">
                Not sure; want to know more. / निश्चित नहीं; और अधिक जानने की
                इच्छा है।
              </label>
            </div>
            <div>
              <input type="radio" name="entry.1352070005" id="no" value="no" />
              <label for="no">No/ नहीं</label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.1352070005"
                id="other"
                value="other"
              />
              <label for="other">Other/ अन्य… </label>
            </div>{" "}
          </div>{" "}
          <hr />
          <div
            className="field"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <label for="" className="mr-3 mt-3" style={{ fontSize: "18px" }}>
              How did you hear about our startup support program? // आपने हमारे
              स्टार्टअप सहायता कार्यक्रम के बारे में कैसे सुना?
            </label>
            <div>
              <input type="radio" name="entry.244755604" id="sm" value="sm" />
              <label for="sm">
                Through Social Media Channels/ सोशल मीडिया चैनलों के माध्यम से{" "}
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.244755604"
                id="website"
                value="website"
              />
              <label for="website">Our Website/ हमारी वेबसाइट</label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.244755604"
                id="campaign"
                value="campaign"
              />
              <label for="campaign"> Local Campaign/ स्थानीय अभियान </label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.244755604"
                id="someone"
                value="someone"
              />
              <label for="someone">
                Through someone you know / किसी ऐसे व्यक्ति के माध्यम से जिसे आप
                जानते हैं
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="entry.244755604"
                id="Saathi"
                value="Saathi"
              />
              <label for="Saathi">Udyam Saathi/उद्यम-साथी</label>
            </div>
          </div>
          <hr />
          <div className="field">
            <label for="" className="mr-3 mt-3" style={{ fontSize: "18px" }}>
              Any Suggestions/ कोई भी सुझाव जिसे आप साझा करना चाहते हैं ||
            </label>
            <input
              type="text"
              name="entry.301022112"
              placeholder="Suggestions"
              required
            />
          </div>{" "}
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
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
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="HomeContainer" style={{ margin: "0rem auto 0 auto" }}>
        <div className="content_heading_udyamSathi">
          <h1
            style={{
              fontSize: "50px",
              sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
            }}
          >
            {" "}
            <span style={{ color: "black" }}>Unleash The Power Of </span>{" "}
            UdyamSathi{" "}
          </h1>
          <h4 style={{ color: "black", fontWeight: "400" }}>
            Empowering Rural Dreams with Udyamwell
          </h4>
        </div>
        <hr className="horizontal" />
        <div className="content_udyamsathi">
          <div className="content_child">
            <div className="content_grandchild">
              <h4
                style={{
                  fontSize: "2rem",
                  sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
                }}
              >
                {" "}
                <span style={{ color: "black" }}>Why </span> Udyamsathi?{" "}
              </h4>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Because Empowerment Starts with You!
                </span>
                <br />
                Imagine a world where every rural entrepreneur has the tools and
                support they need to turn their vision into reality. Udyamwell
                believes in the power of grassroots innovation, and our
                Udyamsathis play a pivotal role in making this vision come true.
              </p>
            </div>
            <div className="content_grandchild">
              <h4
                style={{
                  fontSize: "2rem",
                  sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
                }}
              >
                {" "}
                <span style={{ color: "black" }}>
                  What is{" "}
                </span> Udyamsathi?{" "}
              </h4>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  The Architects of Rural Renaissance!
                </span>
                <br />
                Udyamsathis are not just ambassadors; they are mentors,
                champions, and the heartbeat of change. As a Udyamsathi, you
                will be at the forefront of a movement that seeks to uplift
                rural enterprises across the nation.
              </p>
            </div>
          </div>
          <div className="content_child">
            <div className="content_grandchild">
              <h4
                style={{
                  fontSize: "2rem",
                  sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
                }}
              >
                {" "}
                <span style={{ color: "black" }}>The </span> 2/2/2 Program{" "}
              </h4>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Where Dreams Take Flight!
                </span>
                <br />
                The Udyamsathi Program is not just a stint; it's a two-month
                odyssey filled with purpose and impact. You will be assigned two
                significant missions each month, challenging your skills and
                creativity. The journey doesn't end there - bi-weekly meetings
                will be your platform to share experiences, overcome obstacles,
                and celebrate victories.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}></span>
              </p>
            </div>
            <div className="content_grandchild">
              <h4
                style={{
                  fontSize: "2rem",
                  sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
                }}
              >
                {" "}
                <span style={{ color: "black" }}>What is </span> UdyamWell?{" "}
              </h4>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  A One-Stop Solution for Rural Entreprises!
                </span>
                <br />
                It aims to empower rural entrepreneurs in India. It provides a
                marketplace for talented artisans and small businesses to
                showcase their authentic products, ranging from traditional
                handicrafts to farm-fresh produce. By supporting local
                communities and contributing to sustainable growth, UdyamWell
                strives to create a thriving ecosystem for rural enterprises.
              </p>
            </div>
          </div>
          <h4
            style={{
              fontSize: "2rem",
              sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
            }}
          >
            {" "}
            <span style={{ color: "black" }}>Key </span> Responsibilities{" "}
          </h4>
          <ol>
            <li>
              <span style={{ fontWeight: "bold" }}>Identify and Approach:</span>{" "}
              UdyamSathis will be assigned specific regions where they will
              identify and approach potential rural enterprises.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Advocacy and Education:
              </span>
              Assist rural enterprises in understanding the manifold benefits of
              being a part of UdyamWell, including access to resources,
              mentorship, and a supportive community.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Onboarding Support:</span>
              Guide and assist rural enterprises through the onboarding process,
              ensuring a seamless transition into the UdyamWell network.
            </li>
          </ol>
          <h4
            style={{
              fontSize: "2rem",
              sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
            }}
          >
            {" "}
            <span style={{ color: "black" }}>What </span> We Look For{" "}
          </h4>
          <ol>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Passion for Rural Development:
              </span>{" "}
              We are seeking individuals with a genuine passion for making a
              positive impact in rural communities.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Effective Communication Skills:
              </span>
              UdyamSathis should possess strong communication skills to engage
              effectively with diverse stakeholders.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Innovative Thinking:</span>
              We welcome creative thinkers who can come up with innovative
              strategies to support and uplift rural enterprises.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Commitment:</span>
              UdyamSathis should be committed to dedicating time and effort to
              the program, contributing to the growth of rural entrepreneurship.
            </li>
          </ol>
          <h4
            style={{
              fontSize: "2rem",
              sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
            }}
          >
            {" "}
            <span style={{ color: "black" }}>Bene</span>fits{" "}
          </h4>
          <ol>
            <li>
              <span style={{ fontWeight: "bold" }}>Skill Development:</span>{" "}
              Enhance your communication, leadership, and mentorship skills
              through hands-on experience.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Networking Opportunities:
              </span>
              Connect with like-minded individuals, entrepreneurs, and
              professionals in the field of rural development.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Certificate of Participation:
              </span>
              Receive recognition for your commitment and contribution to the
              UdyamWell UdyamSathi Program.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Impact: </span>
              Be part of a transformative journey, making a lasting impact on
              rural entrepreneurs and communities.
            </li>
          </ol>
        </div>
        <hr className="horizontal" />
        <div className="banner" style={{ width: "70%", marginBottom: "100px" }}>
          <div className="bannerText_udyamsathi">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              {" "}
              <span style={{ color: "black" }}>Register </span> Here{" "}
            </h1>
            <p style={{ textAlign: "justify", fontSize: "16px" }}>
              Are you ready to be a catalyst for change? The Udyamsathi Program
              by Udyamwell is calling out to you! This is your chance to embark
              on a transformative journey, where your passion meets purpose, and
              your actions resonate in the hearts of rural entrepreneurs. <br />
              <br />
              <a href="https://forms.gle/VPMWHcUxDmvNxE8d7" target="_blank">
                <button style={{ cursor: "pointer" }} className="download_btn">
                  Click Here
                </button>
              </a>
            </p>
          </div>
          <div className="qrCode_udyamsathi">
            <img
              src={udyamsathiQR}
              alt="qrcode"
              width={"132px"}
              height={"132px"}
            />
            <p style={{ fontSize: "0.6rem" }}>Scan Here to fill via phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UdyamSathi;
