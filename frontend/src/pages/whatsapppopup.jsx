import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./whatsapppopup.css";
import udyamwelllogo from "../assets/Udyamwell_Logo_Standee.png";
import { updateLanguage } from "../slices/SettingsSlice.js";
import { useDispatch } from "react-redux";
const WhatsAppPopup = () => {
  const { i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const popupShownBefore = getCookie("popupShown");
    if (!popupShownBefore) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setCookie("popupShown", "true", 365); // Set cookie to indicate that the popup has been shown
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setCookie("language", language, 365);
    dispatch(updateLanguage(language)); // Dispatch the renamed action
    closePopup();
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-box" ref={popupRef}>
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
