import React from "react";
import TopSection from "../components/TopSection";
import CourseCard from "../components/CourseCard";

const Course = () => {
    return (
        <>
         <TopSection MainHeadinig="Our Courses" subText="" text="Our Various Courses" />
         <div className="CourseContainer" style={{width:"85%",margin:"7rem auto"}}>
         <CourseCard/>
         </div>
        </>
    )
}

export default Course;