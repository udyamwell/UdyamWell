
import React, { useEffect, useState } from "react";
import VideoLectureCard from './VideoLectureCard';
import './styles/courseCard.css';
import { Box, CircularProgress, Typography, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCource } from "../slices/videos";
import CircularWithValueLabel from "./CircularLabel";
import axios from "axios";

const SingleCoursePage = () => {
    const { id } = useParams();
    const { courseName, lectures, error, image } = useSelector(state => state.lectures);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // Track selected video index
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
    const[lectureId, setLectureId] = useState("");
    const [progress, setProgress] = useState(0);
    const [viewedVideo, setViewedVideo] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [courseLength, setCourseLength] = useState(0);

    useEffect(() => {
        dispatch(fetchSingleCource(id));
    }, [id]); // Add 'id' as a dependency to fetch the course data when it changes
    useEffect(() => {
        // Set the initial selected video URL to the URL of the first lecture
        if (lectures && lectures.length > 0) {
            setLectureId(lectures[0]._id);
            setSelectedVideoUrl(`https://www.udyamwell.com/uploads/course/videos/${lectures[0].video}`);
        }
        setCourseLength(lectures?.length);
    }, [lectures]);
    useEffect(()=>{
        if(progress > 85){
            axios.post("https://www.udyamwell.com/api/v1",{userId : user._id, courseId : id, status : "50%",lectureId})
            .then((res)=>console.log(res.data))
            .catch((err)=>console.log(err))
        }
    }, [progress])
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        axios.post("https://www.udyamwell.com/api/v1/getStatus",{ userId : user._id, courseId : id })
        .then((res)=>{
            setIsLoading((prevState)=>!prevState);
            setViewedVideo(res.data.videoLength);
        })
        .catch(err=>console.log(err));
    }, [courseLength]);
    useEffect(() => { 
        if (courseLength != 0)
            setCurrentProgress(viewedVideo/courseLength*100)
    }, [isLoading])
    const handleCardClick = (videoUrl,lectureId, index) => {
        setLectureId(lectureId);
        setSelectedVideoUrl(videoUrl);
        setSelectedVideoIndex(index); // Update the selected video index
    };
    // const handlePlay = ()=>{
    //     console.log("Play");
    // }
    const handlePause = ()=>{
        const length = document.getElementById("video").duration;
        const current = document.getElementById("video").currentTime;
        const calculatedProgress = Math.round((Math.round(current) / Math.round(length))*100);
        console.log("Progress ---> ",calculatedProgress);
        setProgress(calculatedProgress);
    }
    const handleEnd = ()=>{
        console.log("End");
        setProgress(100);
    }
    return (
        <>
             <div className="singleCourse">
             <Box sx={{margin:"10px 0 30px 0 ",display:"flex",justifyContent:"flex-end"}}>
                    <section style={{display:"flex"}}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>Your Progress:</Typography>
                        <CircularWithValueLabel value={currentProgress} sx={{ml:2}}/>
                    </section>
                </Box>
            <div className="mainVidContainer">
                <div className="mainVid" style={{ marginBottom: "50px" }}>
                    <h1>{courseName}</h1>
                    {/* <iframe
                        onClick={()=>console.log("Success")}
                        style={{ marginTop: "26px" }}
                        width="100%"
                        height="194"
                        src={selectedVideoUrl}
                        title="Embedded Video Player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe> */}
                    <video 
                        id="video"
                        onPause={handlePause}
                        onEnded={handleEnd}
                        src={selectedVideoUrl}
                        width="100%"
                        height="300"
                        controls
                    ></video>
                    {/* <div className="content">
                        <h3 style={{ color: "grey" }}>rgstrfhgbtd</h3>
                    </div> */}
                </div>
                <div className="recommendations" style={{ marginBottom: "50px" }}>
                    <h1>Playlist</h1>
                    <Box sx={{mt:2,ml:2}}>
                        {/* Render the VideoLectureCard component passing lectures data and handleCardClick */}
                        <VideoLectureCard lectures={lectures} type={'video'} onCardClick={handleCardClick} selectedVideoIndex={selectedVideoIndex} />
                    </Box>
                </div>
            </div>
             </div>
        </>
    );
}
export default SingleCoursePage;






