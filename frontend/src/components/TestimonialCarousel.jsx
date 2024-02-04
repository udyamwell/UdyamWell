import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";
import Quote_Left from "../assets/Quote_Left.png";
import Male_User from "../assets/Male_User.png";
import StarIcon from "@mui/icons-material/Star";
const testimonialData = [
  {
    title: "Great Service!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Nec pharetra aliquet rhoncus diam tempus ac interdum pellentesque. Cursus fermentum egestas nibh accumsan. Turpis commodo rhoncus in habitasse. Quis odio eu laoreet dignissim ut urna nibh id.",
    name: "John Doe",
    rating: 4,
    profilePic: Male_User, // Replace with the actual image file
  },
  {
    title: "Great Service!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Nec pharetra aliquet rhoncus diam tempus ac interdum pellentesque. Cursus fermentum egestas nibh accumsan. Turpis commodo rhoncus in habitasse. Quis odio eu laoreet dignissim ut urna nibh id.",
    name: "John Doe",
    rating: 3,
    profilePic: Male_User, // Replace with the actual image file
  },
  {
    title: "Great Service!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Nec pharetra aliquet rhoncus diam tempus ac interdum pellentesque. Cursus fermentum egestas nibh accumsan. Turpis commodo rhoncus in habitasse. Quis odio eu laoreet dignissim ut urna nibh id.",
    name: "John Doe",
    rating: 5,
    profilePic: Male_User, // Replace with the actual image file
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three testimonials at a time
    slidesToScroll: 1,
    vertical: false, // Show testimonials in a horizontal row direction
  };

  return (
    <div className="testimonials">
      {testimonialData.map((testimonial, index) => (
        <div key={index} className="testimonial-slide">
          <h3 className="testimonial-title">{testimonial.title}</h3>
          <div
            className="content"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              paddingTop: "20px",
            }}
          >
            {" "}
            <img src={Quote_Left} alt="" style={{ height: "30px" }} />
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
          <hr className="testimonial-line" />

          <div className="testimonial-content">
            <img
              src={testimonial.profilePic}
              alt={`${testimonial.name}'s profile`}
              className="testimonial-profile-pic"
            />
            <div className="testimonial-details">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-rating">
                {new Array(testimonial.rating).fill(null).map(() => (
                  <StarIcon />
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
