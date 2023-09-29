import React from "react";
import { front_view_hands_using_smartphone, hand_holding_smartphone, landingPageBg, playstore } from "../assets";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import './DownloadApp.css';
import Service from "./Service";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const DownloadApp = () => {
    const navigate  = useNavigate();
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
          {/*  */}
          <div className="HomeContainerDownload">
            <Box className="bannerDownload">
                <div className="bannerTextDownload" >
                    <Typography className="smartHeadline" sx={{fontWeight:"bold",width:"100%"}}>Start Selling Smarter</Typography>
                    <h1>Welcome To <span style={{color:"black"}}>UdyamWell</span> Seller <span style={{color:"black"}}>Services</span>  </h1>
                </div>
                <div className="bannerImgDownload" style={{display:'flex'}}>
                    <div className="imgPart1">
                    <img src={hand_holding_smartphone} alt="" />
                    </div>
                    <div className="imgInfoPart2">
                        <div className="part2Count" >
                            <Stack sx={{textAlign:"center"}}>
                                <Typography sx={{color:"grey"}}>Active Users</Typography>
                                <Typography variant="h4" sx={{fontWeight:700}}>
                                    -
                                </Typography>
                            </Stack>
                            <hr style={{height:"15px"}}/>
                            <Stack sx={{textAlign:"center"}}>
                                <Typography sx={{color:"grey"}}>Downloads</Typography>
                                <Typography variant="h4" sx={{fontWeight:700}}>
                                    -
                                </Typography>
                            </Stack>
                        </div>
                        <Typography sx={{fontWeight:
                        "bold",marginTop:"3rem"}}>
                        Are you ready to unlock new opportunities and take your business to the next level? Look no further! UdyamWell Seller Services is here to revolutionize the way you sell your products and reach your customers.
                        </Typography>
                        <Typography sx={{color:"grey",marginTop:"1rem",width:"100%"}}>
                            Test our App:
                        </Typography>
                        <div style={{width:"100%",float:"left",marginTop:"10px"}}>
                        {/* <img src={playstore}  alt="" /> */}
                        <a href="https://i.diawi.com/3uzBgy" target="_blank" >
                        <Button
                        sx={{ml:2,color:"white"}}
                        // aria-describedby={id}
                        variant="contained"
                        // onClick={handleClick}
                        >
                        UdyamWell
                        </Button>
                        </a>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
        {/*  */}
        <Service/>
        {/*  */}
        <Box className='registerDownload' sx={{p:"0 55px",margin:"0 auto"}} textAlign={'center'}>
          <Typography variant="h3" sx={{fontWeight:"600"}}>How to<span style={{color:"#2e8446"}}> Register</span> in <span style={{color:"#2e8446"}}> UdyamWell</span> Seller Services</Typography>
          <Typography variant="body2" sx={{fontWeight:"bold",mt:2}} className="serviceSubHeading" > Welcome to the exciting world of selling with UdyamWell Seller Services! Whether you're an experienced seller or just starting out, our platform makes it easy for you to showcase your products and connect with eager customers. Here's a step-by-step guide on how to register and get started on our platform:</Typography>
        </Box>
        {/*  */}
        <Box sx={{m:"0 auto"}}>
        <div className="banner" style={{margin:"0 auto",width:"100%"}}>
                <div className="bannerImg">
                    <img src={front_view_hands_using_smartphone} alt="" style={{borderRadius:"20px"}}/>
                </div>
                <div className="bannerText" style={{marginRight:"50PX"}}>
               <Stack spacing={2}>
               <Accordion variant="contained">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>1. Download the App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          If you haven't already, make sure to download our app from the Google Play Store. You can find it by searching for "UdyamWell Seller Services" in the search bar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>2. Sign up</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>3. Complete Your profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>4. Add Products in listing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can simply add products by clicking on "List Products" Tab on the Navigation panel.
Then add product images, description etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>5. Set Up Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>6. Start Selling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:"600"}}>7. Check Insights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
               </Stack>
                </div>
            </div>
        </Box>
        </>
    )
}

export default DownloadApp;