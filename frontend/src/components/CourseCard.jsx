import {  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { breadcrumb } from '../assets';
import './styles/courseCard.css';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseCard = ({ courses }) => {
  const navigate = useNavigate();
  // console.log("Course Value ==>", courses);
// let urlImage = `https://www.udyamwell.com/uploads/course/thumbnails/`;
let url = `http://localhost:8080/uploads/course/videos/`;
// let urlVideo = `http://localhost:9000/uploads/course/videos/`;

// Access the courses array inside the courses object
// const coursesArray = courses?.courses || [];

// const [showVideo, setShowVideo] = useState(false);

// const handleCardClick = () => {
//   setShowVideo(true);
// };


  // const handleShare = async (title, url) => {
  //   try {
  //     await navigator.share({
  //       title,
  //       url,
  //     });
  //   } catch (error) {
  //     console.error('Error sharing:', error);
  //   }
  // };

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
  };
  const handleVideo = (e) => {
    setVideoFile(e.target.files[0]);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!videoFile) {
      return alert("Please select a file");
    }
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);
      formData.append("video", videoFile);
      // Replace the URL with your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Video uploaded successfully");
      } else {
        alert("Failed to upload video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      // alert('Error uploading video');
    }
  };

  const handleVideoPlayer = (filename) => {
    window.open(`${url}${filename}`);
    return;
  };


  return (
    <>
      {courses?.map((course) => (
        <Card key={course._id} sx={{ width: 350, borderRadius: "10px",m:3,cursor:"pointer" }} >

{/* <Box className='cardImageBox' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {!showVideo ? (
        <>
          <CardMedia
            component="img"
            height="194"
            image={urlImage + course.image}
            sx={{ opacity: 0.8,overflow:"hidden" }}
            alt="Paella dish"
          />
          <Box className='playIcon'>
            <PlayCircleFilledTwoToneIcon sx={{ height: "100%", width: "40%" }} />
          </Box>
          <Box className='timing'>
            <p>0.23</p>
          </Box>
        </>
      ) : (
        // Show the embedded video player when the card is clicked
        <iframe
          width="100%"
          height="194"
          src={urlVideo+ course.video}
          title="Embedded Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </Box> */}
   
          <Box className='cardImageBox'>
            <div onClick={() => handleVideoPlayer(course.filename)}>
              <CardMedia
                component="img"
                height="250"
                // image={breadcrumb}
                // image= "http://localhost:9000/uploads/course/thumbnails/1690093516906_cloud3.jpg"
                image= {url + course.thumbnailPath}
                sx={{ opacity: 0.8 }}
                alt="UdyamWell Course"
              />
              <Box className='playIcon'>
                <PlayCircleFilledTwoToneIcon sx={{ height: "100%", width: "40%" }} />
              </Box>

              {/* <Box className='timing'>
                <p>0.23</p>
              </Box> */}

            </div>
          </Box>

          {/* <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // subheader="September 14, 2016"
            subheader= {course.createdAt}
          /> */}

          <CardContent sx={{ padding: "0 16px",mt:3}}>
            <Typography variant="h5" color={'green'} sx={{color:"green",cursor:"pointer" }}>
              {/* <Link to={`/course/${course?._id}`} sx={{listStyle:"none",textDecoration:"none",border:"none"}}>{course.name}</Link> */}
              <p sx={{ listStyle: "none", textDecoration: "none", border: "none", }} >
                {course.title}
              </p>
            </Typography>
            <Typography variant="body1" sx={{mt:2}}>
              {course.description} {/* Use course.description to display the description */}
            </Typography>
          </CardContent>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={() => handleShare(course.name, course.link)}>
              <ShareIcon />
            </IconButton>
          </CardActions> */}

        </Card>
      ))}

      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleTitle}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleDescription}
        />
        <input
          type="file"
          name="thumbnail"
          placeholder="Thumbnail"
          onChange={handleThumbnail}
        />
        <input type="file" name="video" onChange={handleVideo} />
        <button onClick={handleUpload}>Submit</button>
      </div>
    </>
  );
}


export default CourseCard;