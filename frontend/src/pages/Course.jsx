import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCources } from "../slices/CourseSlice";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const Course = () => {
  const {all_courses} = useSelector(state=>state.courses);

  const [lectures, setLectures] = useState([]);
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCources());
    },[]);

    const getAllLectures = async()=> {
        await axios.get('http://localhost:8080/lecture')
        .then((res) => {
            setLectures(res.data.lectures);
        })
    }

    useEffect(() => {
        console.log('useEffect')
        getAllLectures();
    },[])

    return (
        <>
         <TopSection MainHeadinig="Our Courses" subText="" text="Our Various Courses" />
         <div className="CourseContainer" style={{width:"90%",margin:"7rem auto",display:"flex",flexWrap:"wrap"}}>
         <CourseCard courses={lectures} type={'course'} />
         </div>
        </>
    )
}

export default Course;
