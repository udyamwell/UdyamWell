import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { breadcrumb } from '../assets';
import "./styles/courseCard.css";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = ({ courses }) => {
  const navigate = useNavigate();
  let urlImage = `https://www.udyamwell.com/uploads/course/thumbnails/`;

  const handleShare = async (title, url) => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      {courses?.map((course) => (
        <Card
          key={course._id}
          sx={{
            display: "flex",
            alignItems: "center",
            width: 370,
            height: 140,
            borderRadius: "10px",
            m: 3,
            cursor: "pointer",
            background: "#2E84461F",
          }}
          onClick={() => navigate(`/course/${course?._id}`)}
        >
          <Box
            className="cardImageBox"
            sx={{
              width: "60%",
              height: "auto",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                // height="250"
                image={urlImage + course.image}
                sx={{ opacity: 0.8 }}
                alt="UdyamWell Course"
              />
              <Box className="playIcon">
                <PlayCircleFilledTwoToneIcon
                  sx={{ height: "100%", width: "40%" }}
                />
              </Box>
            </a>
          </Box>
          <CardContent sx={{ padding: "0 16px", mt: 3 }}>
            <Typography
              variant="h5"
              color={"green"}
              sx={{ color: "green", cursor: "pointer" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                to={`/course/${course?._id}`}
              >
                {course.name}
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 0, fontSize: "14px" }}>
              {course.description}{" "}
              {/* Use course.description to display the description */}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CourseCard;
