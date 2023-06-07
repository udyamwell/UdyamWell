import React, { useState } from "react";
import './styles/navbar.css';
import { logo1, single_page_logo, menu, close, menuBlack, closeBlack  } from "../assets";
import { Link } from "react-router-dom";
const Navabar = () => {
  const [toggle, setToggle] = useState(false);

  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scroll");
      document.querySelector(".whiteLogo").style.display = "none";
      document.querySelector(".logo").style.display = "block";
      document.querySelector(".mobWhiteLogo").style.display = "none";
      document.querySelector(".mobLogo").style.display = "block";
    } else {
      navbar.classList.remove("navbar-scroll");
      document.querySelector(".whiteLogo").style.display = "block";
      document.querySelector(".logo").style.display = "none";
      document.querySelector(".mobWhiteLogo").style.display = "block";
      document.querySelector(".mobLogo").style.display = "none";
    }
  });
  return (
    <>
      <nav id="navbar">
       <div  className="Maincontainer">
        {/*  */}
        <div className="container">
          <div className="navbar-brand">
            <img
              src={single_page_logo}
              className="whiteLogo"
              height={"100px"}
              width={"100px"}
              alt=""
            />
            <img
              src={logo1}
              height={"100px"}
              className="logo"
              width={"100px"}
              alt=""
            />
          </div>
          <ul className="navbar-menu">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/blogs'>Blog</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        {/*  */}
        <div className="mobNav">
          <img
          className="mobWhiteLogo"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
            <img
            className="mobLogo"
            src={toggle ? closeBlack : menuBlack}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            <li  onClick={() => {setToggle(!toggle);}}><Link to={'/'}>Home</Link></li>
            <li  onClick={() => {setToggle(!toggle);}}><Link to='about'>About</Link></li>
            <li  onClick={() => {setToggle(!toggle);}}><Link to='/courses'>Courses</Link></li>
            <li  onClick={() => {setToggle(!toggle);}}><Link to='/blogs'>Blog</Link></li>
            <li  onClick={() => {setToggle(!toggle);}}><Link to='/services'>Services</Link></li>
            <li  onClick={() => {setToggle(!toggle);}}><Link to='/contact'>Contact</Link></li>
            
            </ul>
          </div>
        </div>
       </div>
      </nav>
    </>
  );
};

export default Navabar;
