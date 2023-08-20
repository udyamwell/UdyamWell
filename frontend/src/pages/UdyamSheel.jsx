import React from 'react';
import TopSection from '../components/TopSection';
import "./udyamSheel.css";
import { banner_img, landingPageBg, udyamsheel, udyamsheelQr } from '../assets';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
const UdyamSheel = () => {
    const navigate = useNavigate();
    return (
        <div>
             <div className="landingPageCover">
          <img
            src={landingPageBg}
            width='100vw'
            alt="landing"
            className="landingPageCover__animation"
          />
        </div>
        <div className="HomeContainer" style={{margin:"8rem auto"}}>
            <div className="banner">
                <div className="bannerText">
                    <h1>UdyamSheel Bharat Program   </h1>
                    <p>Rural Enterprises face many challenges such as procuring raw material, inadequate skills, weak communication & transportation and much more. UdyamWell is building a program to help Rural enterprises overcome these challenges. This happens through mentorship & enabling them via our support ecosystem. We aim to help these enterprises reach new heights by bringing them services, in collaboration with ONDC & NGO’s. </p>
                </div>
                <div className="bannerImg">
                    <img src={udyamsheel} alt="" style={{borderRadius:"20px"}}/>
                </div>
            </div>
        </div>
        {/*  */}
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{margin:"1rem auto",backgroundColor:"#e0f1e5",padding:3,borderRadius:"55px"}} className='brochure'>
            <Typography variant='h6' color={'#266319'}>
                Interested in learning more? Download our informative brochure to get all the details!!
            </Typography>
            <Button variant='contained' sx={{color:"white",ml:3,p:"10px 50px",borderRadius:"25px"}}>Download</Button>
        </Box>
        {/*  */}
         <div className="sheelContainer">
         <div className="saathiForm">
        <h1 className="section_tittle text-center mt-5 mb-4" style={{color:"green"}}>पंजीकरण</h1>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd8rdTq9MRAmbWfpZhmKirrC1A8BFwElk_zbSrWsGOQOGnIZg/formResponse">
                <div className='field'>
                    <label for="" className="mr-3 mt-4" style={{fontSize: "18px"}}>Name /  आपका नाम</label>
                    <input type="text" name="entry.449441306" placeholder="Enter your name" required/> <br/>
                </div>
                <hr/>
                <div className='field'>
                    <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Phone Number /  फ़ोन नंबर</label>
                    <input type="tel" name="entry.775556124" placeholder="Enter your phone number" required/> <br/>
                </div>
            <hr/>
            {/* <!--  --> */}
                <div className='field'>
                 <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Name of your Enterprise /  आपके उद्यम का नाम</label>
                 <input type="text" name="entry.1579784548" placeholder="Enterise Name" required/> <br/>
                </div>
                <hr/>
                <div className='field'>
                    <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Founder/Owner Name /   संस्थापक का नाम</label>
                <input type="text" name="entry.877036990" placeholder="Founder Name" required/> <br/>
                </div>
            <hr/>
            {/* <!--  --> */}
            <div className='field'>
                <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Email Address/  मेल पता</label>
                <input type="email" name="entry.1894326054" placeholder="Enter your Email" required/> <br/>
            </div>
            <hr/>
           <div className='field'>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Business Address /  व्यावसायिक पता</label>
                <input type="text" name="entry.1414131589" placeholder="Address" required/> <br/>
           </div>
            <hr/>
            {/* <!--  --> */}
           <div className='field'>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Business Address /  व्यावसायिक पताAny Website or Social Media link (If Available) /  कोई भी वेबसाइट या सोशल मीडिया लिंक (यदि उपलब्ध हो)</label>
            <input type="text" name="entry.205543619" placeholder="Link"/> <br/> </div> <hr/>
           <div className='field'>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Number of people in the organization (Team Size) /  संगठन में लोगों की संख्या</label>
            <input type="text" name="entry.1018743359" placeholder="Number of people"/> <br/> </div> <hr/>
            {/* <!--  --> */}
           <div className='field' >
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>What business you are involved in? /  आप किस व्यवसाय से जुड़े हैं?</label>
            <input type="text" name="entry.1951356654" placeholder="Business" required/> <br/> </div> <hr/>
           <div className='field' style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"start"}}>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Are you willing to actively participate in workshops, training sessions, and events organized by UdyamWell? /  क्या आप हमारे संगठन द्वारा आयोजित कार्यशालाओं, प्रशिक्षण सत्रों और कार्यक्रमों में सक्रिय रूप से भाग लेने के इच्छुक हैं?</label>
            <div>
                <input type="radio" name="entry.1352070005" id="Yes" value="Yes"/>
                <label for="Yes">Yes / हाँ</label>
            </div>
            <div>
                <input type="radio" name="entry.1352070005" id="notsure" value="notsure"/>
                <label for="notsure">Not sure; want to know more. / निश्चित नहीं; और अधिक जानने की इच्छा है।</label>
            </div>
            <div>
                <input type="radio" name="entry.1352070005" id="no" value="no"/>
                <label for="no">No/ नहीं</label>
            </div>
            <div>
                <input type="radio" name="entry.1352070005" id="other" value="other"/>
                <label for="other">अन्य… / Other</label>
            </div> </div> <hr/>
            {/* <!--  --> */}
            {/* <!-- <input type="text" name="" placeholder="How do you know?"/> <br> --> */}
           <div className='field' style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"start"}}>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>How did you hear about our startup support program? //  आपने हमारे स्टार्टअप सहायता कार्यक्रम के बारे में कैसे सुना?</label>
            <div>
                <input type="radio" name="entry.244755604" id="sm" value="sm"/>
                <label for="sm">सोशल मीडिया चैनलों के माध्यम से / Through Social Media Channels </label>
            </div>
            <div>
                <input type="radio" name="entry.244755604" id="website" value="website"/>
                <label for="website">हमारी वेबसाइट/ Our website</label>
            </div>
            <div>
                <input type="radio" name="entry.244755604" id="campaign" value="campaign"/>
                <label for="campaign">स्थानीय अभियान / Local Campaign</label>
            </div>
            <div>
                <input type="radio" name="entry.244755604" id="someone" value="someone"/>
                <label for="someone">Through someone you know / किसी ऐसे व्यक्ति के माध्यम से जिसे आप जानते हैं</label>
            </div>
            <div>
                <input type="radio" name="entry.244755604" id="Saathi" value="Saathi"/>
                <label for="Saathi">उद्यम-साथी / Udyam Saathi</label>
            </div>
            </div>
            <hr/>
            {/* <!--  --> */}
            <div className='field'>
            <label for="" className="mr-3 mt-3" style={{fontSize: "18px"}}>Any Suggestions/ 
                कोई भी सुझाव जिसे आप साझा करना चाहते हैं ||
                </label>
            <input type="text" name="entry.301022112" placeholder="Suggestions" required/></div> <br/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Button variant='contained' sx={{color:"white"}} type="submit">Submit</Button>
            </div>
        </form>
    </div>
    {/*  */}
    <div className="qrCode">
        <Stack>
            <Typography variant='h4'>
            You can Scan this qr code to fill the form! 
            </Typography>
            <Box height={'100%'} width={'100%'}>
        <img src={udyamsheelQr} alt="" height={'300px'} width={'300px'} style={{marginTop:'20px'}}/>

            </Box>
        </Stack>
    </div>
    {/*  */}
         </div>
        {/*  */}
        </div>
    )
}


export default UdyamSheel;