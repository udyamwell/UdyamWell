import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCources } from "../slices/CourseSlice";
import { landingPageBg } from "../assets";
import { Box, Typography } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

const Course = () => {
  const {all_courses} = useSelector(state=>state.courses);
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCources());
    },[]);
    return (
        <>
         {/* <TopSection MainHeadinig="Our Courses" subText="" text="Our Various Courses" /> */}
         <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
       <Box sx={{mt:15}}>
       <Box>
            <Typography variant="h2" textAlign={'center'} sx={{fontWeight:'600',color:"#236836"}}>
                Our Courses
            </Typography>
        </Box>
         <div className="CourseContainer" style={{width:"90%",margin:"2rem auto",display:"flex",flexWrap:"wrap"}}>
         <CourseCard courses={all_courses} type={'course'} />
         </div>
       </Box>
        </>
    )
}

export default Course;
