import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CourseCard2 from "../components/CourseCard2";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCources } from "../slices/CourseSlice";
import { lms } from "../assets";
import Bg_about from "../assets/Bg_about.png";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import TestimonialCarousel from "../components/TestimonialCarousel";
import "./Course.css";
const Course = () => {
  const { all_courses } = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    !user && navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchAllCources());
  }, [dispatch, navigate, user]);
  return (
    <>
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div className="HomeContainer" style={{ margin: "3.5rem auto 0 auto" }}>
        <div className="banner">
          <div className="bannerText">
            <h1
              style={{
                fontSize: "3.4rem",
                sx: { fontSize: "0.5rem", md: { fontSize: "1rem" } },
              }}
            >
              UdyamWell <span style={{ color: "black" }}>Learning</span> System
            </h1>
            <p style={{ textAlign: "justify", fontSize: "15px" }}>
              UdyamWell Learning System is a comprehensive Learning Management
              System designed to uplift rural enterprises by providing them with
              a powerful tool for skill development, knowledge enhancement, and
              sustainable growth. Recognizing the unique challenges faced by
              rural businesses, this LMS aims to bridge the gap between limited
              resources and the need for up-to-date information and training.
            </p>
            <div className="homeButtons">
              <button style={{ cursor: "pointer" }} className="btn1" disabled>
                Get Started
              </button>
              <button className="btn2" disabled style={{ cursor: "pointer" }}>
                Live Sessions
              </button>
            </div>
          </div>
          <div className="bannerImg">
            <img src={lms} alt="" width={{ width: "100%" }} />
          </div>
        </div>
      </div>
      {/*  */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          margin: "2rem auto",
          backgroundColor: "#e0f1e5",
          padding: 3,
          borderRadius: "55px",
        }}
        className="brochure"
      >
        <Typography variant="h6" color={"#266319"}>
          Interested in learning more? Download our informative brochure to get
          all the details!
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "white",
            margin: "0px 20px",
            padding: "10px 60px",
            borderRadius: "20px",
            fontWeight: "400",
            textTransform: "inherit",
            border: "none",
            background:
              "linear-gradient(90deg, rgba(46,132,70,1) 0%, rgba(0,100,0,1) 100%);",
          }}
        >
          Download
        </Button>
      </Box>
      {/*  */}
      <Box sx={{ width: "80%", margin: "6rem auto 0 auto" }}>
        <div>
          <div>
            <Typography
              variant="h4"
              sx={{
                ml: 2,
                fontWeight: "500",
              }}
            >
              Explores Courses by Category
            </Typography>
            <Typography sx={{ ml: 2, mt: 1 }} variant="h6">
              Browse top class courses bye browsing our category which will be
              more easy for you.
            </Typography>
          </div>
        </div>
        <div
          className="CourseContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "103%",
            margin: "0 auto",
          }}
        >
          <CourseCard courses={all_courses} type={"course"} />
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          margin: "6rem 0 0 0",
          padding: "40px",
          background: "#2E84461F",
        }}
      >
        <div style={{ width: "80%", margin: "0 auto" }}>
          <div>
            <div>
              <Typography
                variant="h4"
                sx={{
                  ml: 2,
                  fontWeight: "500",
                }}
              >
                Popular courses for you
              </Typography>
              <Typography sx={{ ml: 2, mt: 1 }} variant="h6">
                Get the best courses for you
              </Typography>
            </div>
          </div>
          <div
            className="CourseContainer"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "103%",
              margin: "0 auto",
            }}
          >
            <CourseCard2 courses={all_courses} type={"course"} />
          </div>
        </div>
      </Box>
      <Box sx={{ width: "80%", margin: "6rem auto 0 auto" }}>
        <Typography
          variant="h4"
          sx={{
            ml: 2,
            fontWeight: "500",
            width: "400px",
          }}
        >
          What our students are saying about us
        </Typography>
        <TestimonialCarousel />
      </Box>
    </>
  );
};

export default Course;
