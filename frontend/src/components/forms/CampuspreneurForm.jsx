import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import "./CampuspreneurForm.css";

const CampuspreneurForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cvFile, setCvFile] = useState(null);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    handleSubmit();
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzwmVCJ4naoRusbWdh634JDLrK1u8_XBqFq4QUvBXh4aO0ciPt0VgUVXyv08pH3NRYt/exec";
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = new FormData(formRef.current);
    form.append("Cv", cvFile);
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        console.log("Success!", response);
        if (currentPage >= 4) {
          Swal.fire("Thankyou for Submitting !");
        }
      })
      .catch((error) => {
        Swal.fire("Request not processed, please try again !");
        console.error("Error!", error.message);
      });
  };

  return (
    <div className="formCampus" style={{ width: "100%", margin: "0 auto" }}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="submit-to-google-sheet"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {currentPage === 1 && (
          <div>
            <h2 style={{ textAlign: "center", color: "#046A3A" }}>
              Page 1 : Candidate Information
            </h2>
            <div className="inputs">
              <label className="label3">
                Name / नाम
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label className="label3">
                Email / ईमेल
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label className="label3">
                Mobile Number (Calling) / मोबाइल नंबर
                <input
                  type="number"
                  name="MobileNumberCalling"
                  placeholder="Enter your Mobile Number (Calling)"
                  required
                />
              </label>
              <label className="label3">
                Mobile Number (Whatsapp) / मोबाइल नंबर
                <input
                  type="number"
                  name="MobileNumberWhatsapp"
                  placeholder="Enter your Mobile Number (Whatsapp)"
                  required
                />
              </label>
              <label className="label3">
                Name of your college / आपके कॉलेज का नाम
                <input
                  type="text"
                  name="CollegeUniversity"
                  placeholder="Enter your college name"
                  required
                />
              </label>
              <label className="label3">
                Course of Study (i.e. B.E/ M.B.A etc.) / अध्ययन का पाठ्यक्रम
                (अर्थात् बी.ई./एम.बी.ए आदि)
                <input
                  type="text"
                  name="CourseOfStudy"
                  placeholder="Enter your course of study"
                  required
                />
              </label>
              <label className="label3">
                Year of Study / अध्ययन का वर्ष
                <input
                  type="number"
                  name="YearOfStudy"
                  placeholder="Enter your year of study"
                  required
                />
              </label>
              <label className="label3">
                Date of Birth / जन्म की तारीख
                <input
                  type="date"
                  name="DateOfBirth"
                  placeholder="Enter your Date of Birth"
                  required
                />
              </label>
              <label className="label3">
                Gender / लिंग
                <div
                  style={{
                    paddingBlock: "10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <label>
                    <input type="radio" name="Gender" value="male" required />
                    Male / पुरुष
                  </label>
                  <label>
                    <input type="radio" name="Gender" value="female" required />
                    Female / महिला
                  </label>
                  <label>
                    <input type="radio" name="Gender" value="other" required />
                    Prefer not to say / नहीं कहना चाहता
                  </label>
                </div>
              </label>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <div>
              <h2 style={{ textAlign: "center", color: "#046A3A" }}>
                Page 2: Skill Mapping
              </h2>
              <div className="inputs">
                <label className="label3">
                  State,District,Village of Residence / राज्य, जिला, निवास का
                  गाँव
                  <input
                    type="text"
                    name="Residence"
                    placeholder="Enter your State/District/Village of Residence"
                    required
                  />
                </label>
                <label className="label3">
                  Specific Area/Region you are interested in working with
                  <input
                    type="text"
                    name="RegionInterest"
                    placeholder="Enter your Area of Intrest"
                    required
                  />
                </label>
                <label className="label3">
                  Relevant Skills / प्रासंगिक कौशल (Communication, Marketing,
                  Mentorship, etc.)
                  <input
                    type="text"
                    name="RelevantSkills"
                    placeholder="Enter your skills"
                    required
                  />
                </label>
                <label className="label3">
                  Any previous experience in Rural Development or
                  Entrepreneurship Programs / ग्रामीण विकास या उद्यमिता
                  कार्यक्रमों में कोई पिछला अनुभव
                  <input
                    type="text"
                    name="PreviousExperience"
                    placeholder="Enter your past experience"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div>
            <div>
              <h2 style={{ textAlign: "center", color: "#046A3A" }}>
                Page 3: Skill Mapping Contd.
              </h2>
              <div className="inputs">
                <label className="label3">
                  Why do you want to become a CampusPreneur ? / आप
                  कैम्पसप्रेन्योर क्यों बनना चाहते हैं?
                  <input
                    type="text"
                    name="WhyCampusPreneur"
                    placeholder="Enter your Reason"
                    required
                  />
                </label>
                <label className="label3">
                  What are different kinds of societies/co-curricular activities
                  you have joined in your college? / आप अपने कॉलेज में किन
                  विभिन्न प्रकार की समितियों/सह-पाठ्यचर्या संबंधी गतिविधियों में
                  शामिल हुए हैं?
                  <input
                    type="text"
                    name="CoCurricularActivities"
                    placeholder="Enter your Area of Intrest"
                    required
                  />
                </label>
                <label className="label3">
                  Whether you want to become an Entrepreneur or want to be a
                  part of MNC in upcoming 5 years and why? / क्या आप आगामी 5
                  वर्षों में उद्यमी बनना चाहते हैं या एमएनसी का हिस्सा बनना
                  चाहते हैं और क्यों?
                  <input
                    type="text"
                    name="FuturePlans"
                    placeholder="Enter your skills"
                    required
                  />
                </label>
                <label className="label3">
                  What strategies would you use to help enterprises understand
                  the benefits of joining UdyamWell? / उद्यमवेल में शामिल होने
                  के लाभों को समझने में उद्यमों की मदद करने के लिए आप किन
                  रणनीतियों का उपयोग करेंगे?
                  <input
                    type="text"
                    name="Strategies"
                    placeholder="Enter your past experience"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        )}
        {currentPage === 4 && (
          <div>
            <div>
              <h2 style={{ textAlign: "center", color: "#046A3A" }}>
                Page 4: Skill Mapping Contd.
              </h2>
              <div className="inputs">
                <label className="label3">
                  Please attach CV/Resume / कृपया सीवी/बायोडाटा संलग्न करें
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="Cv"
                    required
                  />
                </label>
                <label className="label3">
                  Is there anything else you would like to share or highlight
                  about yourself? / क्या ऐसा कुछ और है जिसे आप अपने बारे में
                  साझा करना या उजागर करना चाहेंगे?
                  <input
                    type="text"
                    name="AdditionalInfo"
                    placeholder="Tell us more about yourself"
                  />
                </label>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Submit button */}
          {currentPage > 1 && (
            <button
              className="btnForm"
              style={{
                color: "white",
                padding: "10px 60px",
                borderRadius: "10px",
                fontWeight: "400",
                textTransform: "inherit",
                border: "none",
                background: "#046A3A",
              }}
              type="button"
              onClick={prevPage}
            >
              Previous
            </button>
          )}
          {currentPage < 4 && (
            <button
              className="btnForm"
              style={{
                color: "white",
                padding: "10px 60px",
                borderRadius: "10px",
                fontWeight: "400",
                textTransform: "inherit",
                border: "none",
                background: "#046A3A",
              }}
              type="submit"
              onClick={nextPage}
            >
              Next
            </button>
          )}
          {currentPage === 4 && (
            <button
              className="btnForm"
              style={{
                color: "white",
                padding: "10px 60px",
                borderRadius: "10px",
                fontWeight: "400",
                textTransform: "inherit",
                border: "none",
                background: "#046A3A",
              }}
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CampuspreneurForm;
