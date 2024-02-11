import React, { useEffect } from "react";
import "./udyamSheel.css";
import { udyamsheel, udyamsheelQr } from "../assets";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router";
import Bg_about from "../assets/Bg_about.png";
const UdyamSheel = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
      <div
        className="HomeContainer"
        style={{ margin: "0rem auto 0 auto", width: "100%" }}
      >
        <div className="banner" style={{ margin: "none" }}>
          <div className="bannerText">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              UdyamSheel <span style={{ color: "black" }}>Bharat</span> Program{" "}
            </h1>
            <p style={{ textAlign: "justify", fontSize: "16px" }}>
              Rural Enterprises face many challenges such as procuring raw
              material, inadequate skills, weak communication & transportation
              and much more. UdyamWell is building a program to help Rural
              enterprises overcome these challenges. This happens through
              mentorship & enabling them via our support ecosystem. We aim to
              help these enterprises reach new heights by bringing them
              services, in collaboration with ONDC & NGO’s.{" "}
            </p>
          </div>
          <div className="bannerImg">
            <img src={udyamsheel} alt="" style={{ borderRadius: "20px" }} />
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
        <Typography variant="h6" color={"#046A3A"}>
          Interested in learning more? Download our informative brochure to get
          all the details!!
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            background: "#046A3A",
            ml: 3,
            p: "10px 50px",
            borderRadius: "25px",
          }}
        >
          Download
        </Button>
      </Box>
      {/*  */}
      <div className="sheelContainer">
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
              <a
                href="https://forms.gle/VPMWHcUxDmvNxE8d7"
                target="_blank"
                rel="noreferrer"
              >
                <button style={{ cursor: "pointer" }} className="download_btn">
                  Click Here
                </button>
              </a>
            </p>
          </div>
          <div className="qrCode_udyamsathi">
            <img
              src={udyamsheelQr}
              alt="qrcode"
              width={"132px"}
              height={"132px"}
            />
            <p style={{ fontSize: "0.6rem" }}>Scan Here to fill via phone</p>
          </div>
        </div>
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

        {/*  */}
        {/* <div className="qrCode">
          <Stack>
            <Typography variant="h4">
              You can Scan this qr code to fill the form!
            </Typography>
            <Box height={"100%"} width={"100%"}>
              <img
                src={udyamsheelQr}
                alt=""
                height={"300px"}
                width={"300px"}
                style={{ marginTop: "20px" }}
              />
            </Box>
          </Stack>
        </div> */}
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default UdyamSheel;
