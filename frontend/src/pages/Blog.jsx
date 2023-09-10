import React from "react";
import TopSection from "../components/TopSection";
import { landingPageBg_small } from "../assets";
import { Box, Typography } from "@mui/material";

const Blog = () => {
    return (
        <>
         <div className="landingPageCover">
          <img
            src={landingPageBg_small}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
        <Box sx={{mt:18}}>
          <Typography variant="h3" textAlign={"center"} sx={{color:"#236836"}}>
            Blogs Coming soon
          </Typography>
        </Box>
          {/* <TopSection MainHeadinig="Our Blog" subText="popular courses" text="coming soon" /> */}
        </>
    )
}

export default Blog;