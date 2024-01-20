import React from "react";
import {
  front_view_hands_using_smartphone,
  hand_holding_smartphone,
  landingPageBg,
  playstore,
} from "../assets";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import "./DownloadApp.css";
import Service from "./Service";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
const DownloadApp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      {/*  */}
      <div className="HomeContainerDownload">
        <Box className="bannerDownload">
          <div className="bannerTextDownload">
            <Typography
              className="smartHeadline"
              sx={{ fontWeight: "bold", width: "100%" }}
            >
              {t("appinf_smarthead")}
            </Typography>
            <h1>
              {t("appinf_mainhead1")}
              <span style={{ color: "black" }}>
                {t("appinf_mainhead2")}
              </span>{" "}
              {t("appinf_mainhead3")}{" "}
              <span style={{ color: "black" }}>{t("appinf_mainhead4")}</span>{" "}
            </h1>
          </div>
          <div className="bannerImgDownload" style={{ display: "flex" }}>
            <div className="imgPart1">
              <img src={hand_holding_smartphone} alt="" />
            </div>
            <div className="imgInfoPart2">
              <div className="part2Count">
                <Stack sx={{ textAlign: "center" }}>
                  <Typography sx={{ color: "grey" }}>
                    {t("appinf_activeusers")}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    -
                  </Typography>
                </Stack>
                <hr style={{ height: "15px" }} />
                <Stack sx={{ textAlign: "center" }}>
                  <Typography sx={{ color: "grey" }}>
                    {t("appinf_downloads")}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    -
                  </Typography>
                </Stack>
              </div>
              <Typography sx={{ fontWeight: "bold", marginTop: "3rem" }}>
                {t("appinf_mainbody")}
              </Typography>
              <Typography
                sx={{ color: "grey", marginTop: "1rem", width: "100%" }}
              >
                {t("appinf_test")}
              </Typography>
              <div style={{ width: "100%", float: "left", marginTop: "10px" }}>
                {/* <img src={playstore}  alt="" /> */}
                <a href="https://i.diawi.com/3uzBgy" target="_blank">
                  <Button
                    sx={{ ml: 2, color: "white" }}
                    // aria-describedby={id}
                    variant="contained"
                    // onClick={handleClick}
                  >
                    {t("UdyamWell")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Box>
      </div>
      {/*  */}
      <Service />
      {/*  */}
      <Box
        className="registerDownload"
        sx={{ p: "0 55px", margin: "0 auto" }}
        textAlign={"center"}
      >
        <Typography variant="h3" sx={{ fontWeight: "600" }}>
          {t("appinf_head1")}
          <span style={{ color: "#2e8446" }}> {t("appinf_head2")}</span>{" "}
          {t("appinf_head3")}{" "}
          <span style={{ color: "#2e8446" }}> {t("appinf_head4")}</span>{" "}
          {t("appinf_head5")}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", mt: 2 }}
          className="serviceSubHeading"
        >
          {" "}
          {t("appinf_body")}
        </Typography>
      </Box>
      {/*  */}
      <Box sx={{ m: "0 auto" }}>
        <div className="banner" style={{ margin: "0 auto", width: "100%" }}>
          <div className="bannerImg">
            <img
              src={front_view_hands_using_smartphone}
              alt=""
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="bannerText" style={{ marginRight: "50PX" }}>
            <Stack spacing={2}>
              <Accordion variant="contained">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step1")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    {t("appinf_stepbody1")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step2")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step3")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step4")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody4")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step5")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step6")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {t("appinf_step7")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t("appinf_stepbody")}</Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </div>
        </div>
      </Box>
    </>
  );
};

export default DownloadApp;
