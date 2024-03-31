import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import { config } from "react-spring";
// import PropTypes from "prop-types";
// import Carousel from "react-spring-3d-carousel";

// export default function Carroussel(props) {
//   const table = props.cards.map((element, index) => {
//     return { ...element, onMouseEnter: () => setActiveIndex(index) };
//   });

//   const [offsetRadius, setOffsetRadius] = useState(3);
//   const [showArrows, setShowArrows] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [cards] = useState(table);

//   useEffect(() => {
//     setOffsetRadius(props.offset);
//     setShowArrows(props.showArrows);
//   }, [props.offset, props.showArrows]);

//   return (
//     <div
//       style={{
//         width: props.width,
//         height: props.height,
//         margin: props.margin,
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <Carousel
//         slides={cards}
//         goToSlide={activeIndex}
//         offsetRadius={offsetRadius}
//         showNavigation={showArrows}
//         animationConfig={config.gentle}
//         onMouseLeave={() => setActiveIndex(-1)}
//         slidesToShow={3}
//         slidesToScroll={1}
//       />
//     </div>
//   );
// }

// Carroussel.propTypes = {
//   cards: PropTypes.arrayOf(PropTypes.object).isRequired,
//   width: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
//   margin: PropTypes.string,
//   offset: PropTypes.number,
//   showArrows: PropTypes.bool,
// };

// Carroussel.defaultProps = {
//   margin: "0",
//   offset: 3,
//   showArrows: true,
// };
