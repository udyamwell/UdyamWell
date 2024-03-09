import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
const VideoLectureCard = ({ lectures, onCardClick }) => {
  let urlVideo = `https://www.udyamwell.com/uploads/course/videos/`;

  return (
    <>
      <Stack>
        {lectures?.map((lecture) => (
          <>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={lecture.videoName}
              />
            </FormGroup>
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold", ml: 2 }}
              variant="h6"
              onClick={() => onCardClick(`${urlVideo}${lecture.video}`)}
            >
              {lecture.video}
            </Typography>
          </>
          // <Card key={lecture._id} sx={{ maxWidth: 300, borderRadius: "10px",m:3,ml:0,cursor:"pointer" }} onClick={() => onCardClick(`${urlVideo}${lecture.video}`)}>
          //   <a href={lecture.link} target="_blank" rel="noopener noreferrer">

          //   <Box className='cardImageBox'>
          //       <CardMedia
          //         component="img"
          //         height="194"
          //         image= {urlImage + lecture.videoThumbnail}
          //         sx={{ opacity: 0.8 }}
          //         alt="Paella dish"
          //       />
          //       <Box className='playIcon'>
          //       <IconButton aria-label="play" >
          //           <PlayCircleFilledTwoToneIcon />
          //       </IconButton>
          //       </Box>

          //       <Box className='timing'>
          //         <p>0.23</p>
          //       </Box>
          //   </Box>
          //   <CardContent sx={{ padding: "0 16px",mt:4}}>
          //     <Typography variant="h5" color={'green'} sx={{color:"green",cursor:"pointer" }}>
          //       {lecture.videoName}
          //     </Typography>
          //     <Typography variant="body1" sx={{mt:2}}>
          //       {lecture.description} {/* Use lecture.description to display the description */}
          //     </Typography>
          //   </CardContent>
          //   </a>
          // </Card>
        ))}
      </Stack>
    </>
  );
};

export default VideoLectureCard;
