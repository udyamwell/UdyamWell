import {  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { breadcrumb } from '../assets';
import './styles/courseCard.css';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
const CourseCard = () => {
    return (
        <>
         <Card sx={{ maxWidth: 275 ,borderRadius:"10px"}}>
            <Box className='cardImageBox'>
            <CardMedia
        component="img"
        height="194"
        image={breadcrumb}
        sx={{opacity:0.8}}
        alt="Paella dish"
      />
      <Box className='playIcon'>
        <PlayCircleFilledTwoToneIcon sx={{height:"100%",width:"40%"}}/>
      </Box>
      <Box className='timing'>
       <p>0.23</p>
      </Box>
            </Box>
       <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader="September 14, 2016"
      />
       <CardContent sx={{padding:"0 16px"}}>
        <Typography variant="h6">
          This impressive paeussels,
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
        </>
    )
}

export default CourseCard;