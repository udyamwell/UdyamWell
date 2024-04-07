import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";
import Quote_Left from "../assets/Quote_Left.png";
import User0 from "../assets/Testinomials.png";
import User1 from "../assets/Testinomials1.png";
import User2 from "../assets/Testinomials2.png";
import StarIcon from "@mui/icons-material/Star";
const testimonialData = [
  {
    title: "",
    review:
      "उद्यमवेल का उद्यमशील भारत प्रोग्राम और उनका समर्थन मेरे लिए एक वरदान है। इससे मेरे व्यवसाय को बढ़ाने में बहुत मदद मिली है। उद्यमवेल से जुड़े हुए कुछ ही महीनों में मेरे आय के स्रोतों में वृद्धि हुई है। पहले अन्य राज्यों से उद्यमवेल के माध्यम से ऑर्डर आए, फिर आईआईटी मंडी में केवल दो दिनों के मार्ट में बहुत अधिक मुनाफा हुआ। अब अगर मुझे कोई संदेह या समस्या आती है, तो उद्यमवेल से मुझे  सहायता मिल जाती है।",
    name: "Ajay  ",
    company: "Jagriti Bamboo Craft",
    address: "Una, Himachal",
    rating: 4,
    profilePic: User0,
  },
  {
    review:
      "उद्यमवेल ने मुझे कैसे काम को सही तरीके से करके आगे बढ़ा जा सकता है ! उद्यमवेल में  जुड़ने के बाद से मेरा छोटा बिजनेस मुझे एक बड़े बिजनेस का आकार दिखा रहा है इस पूरी टीम को दिल से बहुत बहुत धन्यवाद। उद्यमवेल से मुझे जोड़ने के लिए सचिन जी बहुत-बहुत  धन्यवाद!",
    name: "Kalyani Keerti",
    company: "Anshima Terracota",
    address: " Gorakhpur,UP",
    rating: 4,
    profilePic: User1,
  },
  {
    review:
      "UdyamWell's capacity-building program empowered our rural women entrepreneurs with valuable knowledge and skills. We are grateful for their dedication and look forward to a long-term partnership. ",
    name: "Srinithi Sripelly",
    company: "  UUI, Seva Mandir,",
    address: " Rajasthan",
    rating: 5,
    profilePic: User2,
  },
];

const TestimonialCarousel = () => {
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
              <p className="testimonial-name">{testimonial.company}</p>
              <p className="testimonial-name">{testimonial.address}</p>
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
