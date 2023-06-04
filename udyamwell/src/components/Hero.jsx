import React from "react";

const Hero = () => {
    return(
        <>
        <section class="banner_part">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                    <div class="banner_text">
                        <div class="banner_text_iner">
                            {/* <!-- <h5>Every child yearns to learn</h5> --> */}
                            <h1>Partner in your Business Journey</h1>
                            <h4>UdyamWell: A Platform for you to make your entrepreneurial dreams come true. </h4>
                            <a href="./cource.html" class="btn_1">View Course </a>
                            <a href="./about.html" class="btn_2">Get Started </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- feature_part start--> */}
    <section class="feature_part">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-xl-3 align-self-center">
                    <div class="single_feature_text ">
                        <h2>UdyamWell <br/> Services</h2>
                        <p>UdyamWell is a true partner that guides you on your entrepreneurial journey and stays with you in every step of the way to assist you in overcoming challenges and also in reaching new heights.</p>
                        <a href="./about.html" class="btn_1">Read More</a>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon"><i class="ti-layers"></i></span>
                            <h4>Learning Platform & Community Support</h4>
                            <p>UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon"><i class="ti-new-window"></i></span>
                            <h4>Handholding Support</h4>
                            <p>UdyamWell provides personalized handholding support to help you through every stage of your business journey. Whether you need help with product development, marketing, or finance, UdyamWell's team of experts is there to guide you. You can get one-on-one coaching and mentoring to help you make the best decisions for your business</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="single_feature">
                        <div class="single_feature_part single_feature_part_2">
                            <span class="single_service_icon style_icon"><i class="ti-light-bulb"></i></span>
                            <h4>Partner Connect</h4>
                            <p>UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Hero;