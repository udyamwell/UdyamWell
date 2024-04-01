// import { useEffect, useState } from "react";
// import "./AnimatedCircles.css";

// const AnimatedCircles = () => {
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const createCircle = () => {
//       const circle = document.createElement("div");
//       circle.className = "circle";
//       circle.style.width = `${Math.floor(Math.random() * 80 + 20)}px`;
//       circle.style.height = circle.style.width;
//       circle.style.backgroundColor = `hsl(${Math.floor(
//         Math.random() * 360
//       )}, 100%, 50%)`;
//       circle.style.position = "absolute";
//       circle.style.left = `${Math.random() * 80}vw`;
//       circle.style.top = `${Math.random() * 100}%`;
//       document.body.appendChild(circle);
//     };

//     const scrollHandler = () => {
//       const scrollY = window.scrollY;

//       if (Math.abs(scrollY - lastScrollY) >= 300) {
//         // Adjust the threshold as needed
//         setLastScrollY(scrollY);

//         const circles = document.querySelectorAll(".circle");

//         circles.forEach((circle) => {
//           //   const newLeft = parseFloat(circle.style.left) + Math.random() * 5 - 2.5;
//           const newTop = parseFloat(circle.style.top) + Math.random() * 5 - 2.5;

//           //   circle.style.left = `${newLeft}%`;
//           circle.style.top = `${newTop}%`;
//         });
//       }
//     };

//     for (let i = 0; i < 6; i++) {
//       createCircle();
//     }

//     window.addEventListener("scroll", scrollHandler);

//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//     };
//   }, [lastScrollY]);

//   return null;
// };

// export default AnimatedCircles;
