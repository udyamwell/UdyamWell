import React from "react";
import { landingPageBg_small } from "../assets";
import { Box, Typography } from "@mui/material";

const Blog = () => {
  return (
    <>
      <div className="landingPageCover">
        <img
          src={landingPageBg_small}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <Box sx={{ margin: "9rem auto 0 auto" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            width: "80%",
            m: "0 auto",
            fontWeight: "bold",
          }}
        >
          Connecting Rural Dreams Success Stories That Inspire
        </Typography>
        <hr style={{ width: "80%", margin: "1rem auto" }} />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            width: "80%",
            m: "0 auto",
            fontWeight: "bold",
          }}
        >
          Blogs coming soon!
        </Typography>
      </Box>
    </>
  );
};

export default Blog;
