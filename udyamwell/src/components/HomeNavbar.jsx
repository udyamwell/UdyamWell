import React, { useState } from "react";
import './styles/homeNavbar.css';
import { menuBlack, closeBlack, Udyamwell_Logo_Standee  } from "../assets";
import { Link } from "react-router-dom";
const HomeNavabar = () => {
  const [toggle1, setToggle1] = useState(false);

  window.addEventListener("scroll", function () {
    // var navbar = document.g("navbarHome");
    if (window.scrollY > 0) {
      document.querySelector('#navbarHome').setAttribute("class","navbar-scrollHome");
    } else {
      document.querySelector('#navbarHome').removeAttribute("class");
    }
  });
  return (
    <>
      <nav id="navbarHome">
       <div  className="MaincontainerHome">
        {/*  */}
        <div className="containerHome">
          <div className="navbar-brand">
            <img
              src={Udyamwell_Logo_Standee}
              height={"70px"}
              className="logo1"
              width={"auto"}
              alt=""
            />
          </div>
          <ul className="navbar-menuHome">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/blogs'>Blog</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </div>
        {/*  */}
        <div className="mobNavHome">
            <img
            className="mobLogo1"
            src={toggle1 ? closeBlack : menuBlack}
            alt="menu"
            onClick={() => setToggle1(!toggle1)}
          />
          <div
            className={`${
              !toggle1 ? "hidden1" : "flex1"
            }`}
          >
            <ul>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to={'/'}>Home</Link></li>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to='about'>About</Link></li>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to='/courses'>Courses</Link></li>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to='/blogs'>Blog</Link></li>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to='/services'>Services</Link></li>
            <li  onClick={() => {setToggle1(!toggle1);}}><Link to='/contact'>Contact</Link></li>
            
            </ul>
          </div>
        </div>
       </div>
      </nav>
    </>
  );
};

export default HomeNavabar;
