import React from "react";
import CourseCard from './CourseCard'; 
import './styles/courseCard.css';
import { Box } from "@mui/material";
const SingleCoursePage = () => {
    return (
        <>
        <div className="mainVidContainer">
            <div className="mainVid">
                <h1>fgstdfx</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7g4KIRP1wyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="content">
                <h3 style={{color:"grey"}}>rgstrfhgbtd</h3>
            </div>
            </div>
            {/*  */}
            <div className="recommendations">
                <h1>Recommendations</h1>
              <Box display={'flex'} flexWrap={'wrap'}>
              <div className="recomVid">
                <CourseCard/>
                </div>
                <div className="recomVid">
                <CourseCard/>
                </div>
              </Box>
            </div>
        </div>
        </>
    )
}

export default SingleCoursePage;