import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCources } from "../slices/CourseSlice";
// import { useNavigate } from 'react-router-dom';

const Course = () => {
  const {all_courses} = useSelector(state=>state.courses);
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCources());
    },[]);
    return (
        <>
         <TopSection MainHeadinig="Our Courses" subText="" text="Our Various Courses" />
         <div className="CourseContainer" style={{width:"90%",margin:"7rem auto",display:"flex",flexWrap:"wrap"}}>
         <CourseCard courses={all_courses?.courses} />
         </div>
        </>
    )
}

export default Course;