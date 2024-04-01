import React, { useState } from "react";
import "./Carousel.css";

function Card({ index, link, activeIndex, onMouseEnter }) {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = window.innerWidth <= 600;

  const handleHover = () => {
    setIsHovered(true);
    onMouseEnter(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      style={{
        left: isSmallScreen ? index * 40 : index * 160,
        zIndex:
          activeIndex === index || isHovered ? 100 : 50 - Math.abs(index - 1),
        // opacity: isHovered || index === 1 ? 1 : 0.8,
        transform: isHovered || index === 1 ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        title={`iframe-${index}`}
        width="100%"
        height="100%"
        src={link}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <Card
        index={0}
        link={"https://www.youtube.com/embed/HKFxVgfiUZE?si=eH-M9S_VzGYiQd3f"}
        activeIndex={activeIndex}
        onMouseEnter={handleMouseEnter}
      />
      <Card
        index={1}
        link={"https://www.youtube.com/embed/7g4KIRP1wyY?si=0yLLHCPRisa1USKm"}
        activeIndex={activeIndex}
        onMouseEnter={handleMouseEnter}
      />
      <Card
        index={2}
        link={"https://www.youtube.com/embed/vAZN-SohD40?si=jw7uBp6zlQgwUTOP"}
        activeIndex={activeIndex}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
}

export default Carousel;
