import React from "react";
import './styles/topSection.css';
import { breadcrumb } from "../assets";
const TopSection = ({ MainHeadinig,subText,text }) => {
  return (
    <>
      <section class="bgImageContainer">
        <div>
            <img src={breadcrumb} className="bgImage" alt="" />
        </div>
        <div class="textContainer">
          <h1>{MainHeadinig}</h1>
          <p>
            Home  <span>/ </span>
             {MainHeadinig}
          </p>
        </div>

      </section>
        <section className="headingContainer">
            <p>{subText}</p>
            <h1>{text}</h1>
        </section>
    </>
  );
};

export default TopSection;
