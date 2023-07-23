import {  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { breadcrumb } from '../assets';
import './styles/courseCard.css';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';


const CourseCard = ({ courses }) => {
let urlImage = `http://localhost:9000/uploads/course/thumbnails/`;

  const handleShare = async (title, url) => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      {courses.map((course) => (
        <Card key={course._id} sx={{ maxWidth: 275, borderRadius: "10px" }}>
          <Box className='cardImageBox'>
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                height="194"
                // image={breadcrumb}
                // image= "http://localhost:9000/uploads/course/thumbnails/1690093516906_cloud3.jpg"
                image= {urlImage + course.image}
                sx={{ opacity: 0.8 }}
                alt="Paella dish"
              />
              <Box className='playIcon'>
                <PlayCircleFilledTwoToneIcon sx={{ height: "100%", width: "40%" }} />
              </Box>

              <Box className='timing'>
                <p>0.23</p>
              </Box>

            </a>
          </Box>

          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // subheader="September 14, 2016"
            subheader= {course.createdAt}
          />

          <CardContent sx={{ padding: "0 16px" }}>
            <Typography variant="h6">
              {course.name} {/* Use course.name to display the name */}
            </Typography>
            <Typography variant="body2">
              {course.description} {/* Use course.description to display the description */}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={() => handleShare(course.name, course.link)}>
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
      ))}
    </>
  );
}


export default CourseCard;