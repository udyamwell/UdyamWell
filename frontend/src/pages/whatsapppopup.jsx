import React, { useState, useEffect, useRef } from "react";
import "./whatsapppopup.css";
import udyamwelllogo from "../assets/Udyamwell_Logo_Standee.png";
import { useTranslation } from "react-i18next";

const WhatsAppPopup = () => {
  const { i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const popupRef = useRef(null);
  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to handle language change
  // const handleLanguageChange = (event) => {
  //   setSelectedLanguage(event.target.value);
  // };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    closePopup(); // Close the popup after changing language
  };
  // Function to handle form submission (to be modified according to your requirements)

  // Event listener to open the popup when the page loads
  useEffect(() => {
    // Add delay (in milliseconds) before showing the popup (e.g., 5000 for 5 seconds)
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array to only run once
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showPopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        closePopup();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);
  // Return the popup component
  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-box">
            <img src={udyamwelllogo} alt="udyamwell" />
            <div className="popup-content">
              <p>Do you want to change your default language?</p>
              <select
                value={selectedLanguage}
                className="language-select"
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
              <div className="btns">
                <button
                  className="continue-btn"
                  onClick={() => changeLanguage(selectedLanguage)}
                >
                  Continue
                </button>
                <button className="cancel-btn" onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;
