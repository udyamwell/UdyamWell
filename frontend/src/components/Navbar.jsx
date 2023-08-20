import React, { useState } from "react";
import './styles/navbar.css';
import { menu, close, menuBlack, closeBlack, Udyamwell_Logo_Standee  } from "../assets";
import { Link } from "react-router-dom";
const Navabar = () => {
  const [toggle, setToggle] = useState(false);
  const [navabr,setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY,"heeyyyyy")
    if(window.scrollY>=80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <>
      <nav id="navbar" className={navabr? "navbar active" : "navbarHome"}>
       <div  className="Maincontainer">
        {/*  */}
        <div className="container">
          <div className="navbar-brand">
            <img
              src={Udyamwell_Logo_Standee}
              className="whiteLogo"
              height={"70px"}
              width={"auto"}
              alt=""
            />
            <img
              src={Udyamwell_Logo_Standee}
              height={"70px"}
              className="logo"
              width={"auto"}
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
            <ul >
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
