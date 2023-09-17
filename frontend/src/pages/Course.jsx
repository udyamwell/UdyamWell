import React, { useEffect} from "react";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCources } from "../slices/CourseSlice";
import { landingPageBg, lms, service } from "../assets";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Course = () => {
  const {all_courses} = useSelector(state=>state.courses);
  const {user} = useSelector(state=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    useEffect(()=>{
      !user && navigate('/')
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dispatch(fetchAllCources());
    },[]);
    return (
        <>
         <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
        <div className="HomeContainer" style={{margin:"3.5rem auto 0 auto"}}>
            <div className="banner" style={{width:'65%'}}>
                <div className="bannerText">
                    <h1 style={{fontSize:"3rem",sx:{fontSize:"0.5rem",md:{fontSize:"1rem"}}}}>UdyamWell <span style={{color:"black"}}>Learning</span> System</h1>
                    <p style={{textAlign:"justify",fontSize:"15px"}}>UdyamWell Learning System is a comprehensive Learning Management System designed to uplift rural enterprises by providing them with a powerful tool for skill development, knowledge enhancement, and sustainable growth. Recognizing the unique challenges faced by rural businesses, this LMS aims to bridge the gap between limited resources and the need for up-to-date information and training.</p>
                    <div className="homeButtons">
                        <button style={{cursor:"pointer"}} className="btn1" disabled>
                           Get Started
                        </button>
                        <button className="btn2" disabled style={{cursor:"pointer"}}>
                            Get free Trial
                        </button>
                    </div>
                </div>
                <div className="bannerImg">
                    <img src={lms} alt="" width={{width:"100%"}}/>
                </div>
            </div>
        </div>
        {/*  */}
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{margin:"2rem auto",backgroundColor:"#e0f1e5",padding:3,borderRadius:"55px"}} className='brochure'>
            <Typography variant='h6' color={'#266319'}>
                Interested in learning more? Download our informative brochure to get all the details!!
            </Typography>
            <Button variant='contained' sx={{color:"white",ml:3,p:"10px 50px",borderRadius:"25px"}}>Download</Button>
        </Box>
        {/*  */}
       <Box sx={{width:"80%",margin:"6rem auto 0 auto"}}>
        <Typography variant="h4"sx={{ml:2,fontWeight:"bold"}}>Explore Course for Category</Typography>
        <Typography sx={{ml:2,mt:1}} variant="h6">Browse top class courses bye browsing our category which will be more easy for you.</Typography>
         <div className="CourseContainer" style={{display:"flex",flexWrap:"wrap"}}>
         <CourseCard courses={all_courses} type={'course'} />
         </div>
       </Box>
        </>
    )
}

export default Course;
