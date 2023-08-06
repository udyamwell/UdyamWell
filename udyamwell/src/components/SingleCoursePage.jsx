import React, { useEffect } from "react";
import CourseCard from './CourseCard'; 
import './styles/courseCard.css';
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { fetchSingleCource } from "../slices/videos";
import { useDispatch, useSelector } from "react-redux";
const SingleCoursePage = () => {
    const {id} = useParams();
    const {courseName,lectures,error,image} = useSelector(state=>state.lectures);
    const dispatch = useDispatch();
    console.log("id",id)
    useEffect(()=>{
        dispatch(fetchSingleCource(id));
    },[])
    let urlImage = `http://localhost:9000/uploads/course/thumbnails/${image}`;
    return (
        <>
        <div style={{marginTop:"10rem",width:"100%"}}>
            <div >
                <h1 style={{marginBottom:"50px",textAlign:"center"}}>{courseName}</h1>
                <img src={urlImage} alt="" height={"100vh"} width={'80%'} style={{margin:"0 auto"}}/>
            </div>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7g4KIRP1wyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="content">
                <h3 style={{color:"grey"}}>rgstrfhgbtd</h3>
            </div>
            </div>
            {/*  */}
            {/* <div className="recommendations">
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
        </div> */}
        </>
    )
}

export default SingleCoursePage;