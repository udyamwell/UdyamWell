import React, { useEffect } from "react";
import TopSection from "../components/TopSection";
import CourseCard from "../components/CourseCard";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:9000/users/courses');
          // Handle the response data
          console.log(res.data);
          if(!res.status === 200){
            console.log("Something Went Wrong ");
          }
        } catch (error) {
          // Handle the error
          console.error('Error fetching data:', error);
          navigate('/sign-in');
        }
      };
    
    useEffect(()=>{
        fetchData();
    },[]);
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