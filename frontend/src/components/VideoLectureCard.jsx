import {  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { breadcrumb } from '../assets';
// import './styles/lectureCard.css';

import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import { Link } from 'react-router-dom';


const VideoLectureCard = ({ lectures, onCardClick }) => {
  // console.log("lecture Value ==>", lectures);
let urlImage = `https://udyamwell.azurewebsites.net/uploads/course/videoThumbnails/`;
let urlVideo = `https://udyamwell.azurewebsites.net/uploads/course/videos/`;

  return (
    <>
      {lectures?.map((lecture) => (
        <Card key={lecture._id} sx={{ maxWidth: 300, borderRadius: "10px",m:3,ml:0,cursor:"pointer" }} onClick={() => onCardClick(`${urlVideo}${lecture.video}`)}>
          <a href={lecture.link} target="_blank" rel="noopener noreferrer">
   
          <Box className='cardImageBox'>
              <CardMedia
                component="img"
                height="194"
                // image={breadcrumb}
                // image= "http://localhost:9000/uploads/lecture/thumbnails/1690093516906_cloud3.jpg"
                image= {urlImage + lecture.videoThumbnail}
                sx={{ opacity: 0.8 }}
                alt="UdyamWell Course"
              />
              <Box className='playIcon'>
              <IconButton aria-label="play" >
                  <PlayCircleFilledTwoToneIcon />
              </IconButton>
              </Box>

              {/* <Box className='timing'>
                <p>0.23</p>
              </Box> */}
          </Box>

          {/* <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // subheader="September 14, 2016"
            subheader= {lecture.createdAt}
          /> */}

          <CardContent sx={{ padding: "0 16px",mt:4}}>
            <Typography variant="h5" color={'green'} sx={{color:"green",cursor:"pointer" }}>
              {lecture.videoName}
            </Typography>
            <Typography variant="body1" sx={{mt:2}}>
              {lecture.description} {/* Use lecture.description to display the description */}
            </Typography>
          </CardContent>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
          </CardActions> */}

          </a>
        </Card>
      ))}
    </>
  );
}


export default VideoLectureCard;