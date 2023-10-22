
import React, { useEffect, useState } from "react";
import VideoLectureCard from './VideoLectureCard';
import './styles/courseCard.css';
import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCource } from "../slices/videos";
import CircularWithValueLabel from "./CircularLabel";
const SingleCoursePage = () => {
    const { id } = useParams();
    const { courseName, lectures, error, image } = useSelector(state => state.lectures);
    const dispatch = useDispatch();
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // Track selected video index
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    useEffect(() => {
        dispatch(fetchSingleCource(id));
    }, [id]); // Add 'id' as a dependency to fetch the course data when it changes
    useEffect(() => {
        // Set the initial selected video URL to the URL of the first lecture
        if (lectures && lectures.length > 0) {
            setSelectedVideoUrl(`https://www.udyamwell.com/uploads/course/videos/${lectures[0].video}`);
        }
    }, [lectures]);
    const handleCardClick = (videoUrl, index) => {
        setSelectedVideoUrl(videoUrl);
        setSelectedVideoIndex(index); // Update the selected video index
    };
    return (
        <>
             <div className="singleCourse">
             <Box sx={{margin:"10px 0 30px 0 ",display:"flex",justifyContent:"flex-end"}}>
                    <section style={{display:"flex"}}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>Your Progress:</Typography>
                        <CircularWithValueLabel value={25} sx={{ml:2}}/>
                    </section>
                </Box>
            <div className="mainVidContainer">
                <div className="mainVid" style={{ marginBottom: "50px" }}>
                    <h1>{courseName}</h1>
                    <iframe
                        style={{ marginTop: "26px" }}
                        width="100%"
                        height="194"
                        src={selectedVideoUrl}
                        title="Embedded Video Player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
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






