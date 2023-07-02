import React from "react";
import './service.css';
import TopSection from "../components/TopSection";
const ServiceCard = ({heading,text1,text2,lists}) => {
    return (
        <div className="cardContainer">
            <span><i></i></span>
            <h4>{heading}</h4>
            <p style={{textAlign:"justify"}}>{text1}</p>
            <p style={{textAlign:"justify"}}>{text2}</p>
            <ul style={{textAlign:"left"}}>
                {lists.map((item=>{return <li>{item}</li>}))}
            </ul>
        </div>
    )
}
const Service = ()=> {
return(
    <>
    <TopSection MainHeadinig='Our Services' subText="" text="Our Services"/>
    <div className="ServiceContainer">
    <ServiceCard heading='Udyam Saathi' text1='UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network.' text2='We can help you with' lists={['1. Finding Udyam Saathi nearby you 🌎','2. Request for Udyam Saathi 🤵']}/>
    <ServiceCard heading='Handholding Support' text1="UdyamWell provides personalized handholding support to help you through every stage of your business journey. Whether you need help with product development, marketing, or finance, UdyamWell's team of experts is there to guide you. You can get one-on-one coaching and mentoring to help you make the best decisions for your business." text2='We can help you with' lists={['1. Sales Enablement 💲','2. Market Connect 🤵','3. Brand Building 💹']}/>
    <ServiceCard heading='Partner Connect' text1='UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest.' text2='We can help you partner with' lists={['1. Digital Partner 🌐','2. Logistics Partner 🚚','3. Accounts Partner 👨‍💻','4. Packaging Partner 📦','5. Legal Partner ⚖']}/>
    </div>
    </>
)
}

export default Service;