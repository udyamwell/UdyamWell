import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const LanguageToggle = () => {
  const { t } = useTranslation();

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage).then(() => {
      // Do something after changing the language if needed
    });
  };

  return (
    <div className="language-dropdown">
      <span>{t("language")}: </span>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
