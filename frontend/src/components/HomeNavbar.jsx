import React, { useState } from "react";
import "./styles/homeNavbar.css";
import { menuBlack, closeBlack, Udyamwell_Logo_Standee } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/UserSlice.js";
import {
  Button,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import LanguageToggle from "./languagetoggle";
import { useTranslation } from "react-i18next";
const HomeNavbar = () => {
  const { t } = useTranslation();
  const [toggle1, setToggle1] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, error } = useSelector((state) => state.user);
  const [navabr, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
    navigate("/login");
  };

  //Admin Panel
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <nav
        id="navbarHome"
        className={navabr ? "navbarHome active" : "navbarHome"}
      >
        <div className="MaincontainerHome">
          {/*  */}
          <div className="containerHome">
            <div className="navbar-brand">
              <img
                src={Udyamwell_Logo_Standee}
                height={"70px"}
                className="logo1"
                width={"auto"}
                alt=""
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul className="navbar-menuHome">
              <li>
                <Link to={"/"}>{t("nav_home")}</Link>
              </li>
              <li>
                <Link to="about">{t("nav_about")}</Link>
              </li>
              <li>
                <Link to="/appInformation">{t("nav_downloadapp")}</Link>
              </li>
              <div class="dropdown">
                <button class="dropbtn">
                  <Link to="/services">{t("nav_services")}</Link>
                </button>
                <div class="dropdown-content">
                  {user && <Link to="/courses">{t("nav_courses")}</Link>}
                  <Link to="/udyamsheel">{t("nav_udyamsheel")}</Link>
                  <Link to="/udyamsathi">{t("nav_udyamsathi")}</Link>
                </div>
              </div>
              <li>
                <Link to="/contact">{t("nav_contact")}</Link>
              </li>
              {user && (
                <>
                  <li
                    style={{ fontWeight: "bold" }}
                    onClick={handleOpenUserMenu}
                  >
                    <Link>{user?.name}</Link>
                  </li>
                  <Menu
                    sx={{ mt: "70px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {/* {settings.map((setting) => ( */}
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        onClick={() => navigate("/profile")}
                        textAlign="center"
                      >
                        {t("nav_profile")}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLogout}>
                        {t("logout_btn")}
                      </Typography>
                    </MenuItem>
                    {/* ))} */}
                  </Menu>
                </>
              )}
              {/* <li>
                      <Button variant="contained" sx={{ml:2,color:"white"}}>
                        Sell on ONDC
                      </Button>
                    </li> */}
              {user?.isAdmin && (
                <>
                  <Button
                    sx={{ ml: 2, color: "white" }}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                  >
                    Admin Panel
                  </Button>
                  <Popover
                    sx={{ mt: 4 }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Stack>
                      {user?.superAdmin && (
                        <Button sx={{ p: 1 }} onClick={handleClose}>
                          <Typography onClick={() => navigate("/admin/users")}>
                            Users
                          </Typography>
                        </Button>
                      )}
                      <Button sx={{ p: 1 }} onClick={handleClose}>
                        <Typography onClick={() => navigate("/admin/courses")}>
                          Lectures
                        </Typography>
                      </Button>
                    </Stack>
                  </Popover>
                </>
              )}
              {!user && (
                <Button
                  sx={{
                    p: "10px 40px",
                    borderRadius: "25px",
                    ml: 3,
                    fontWeight: "bold",
                  }}
                  variant="outlined"
                  onClick={() => navigate("/login")}
                >
                  {t("signin_btn")}
                </Button>
              )}
              {!user && (
                <Button
                  sx={{
                    p: "10px 40px",
                    borderRadius: "25px",
                    ml: 3,
                    color: "white",
                  }}
                  variant="contained"
                  onClick={() => navigate("/register")}
                >
                  {t("registernow_btn")}
                </Button>
              )}
              <li>
                <LanguageToggle />
              </li>
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
            <div className={`${!toggle1 ? "hidden1" : "flex1"}`}>
              <ul>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="about">About</Link>
                </li>
                {user && (
                  <li
                    onClick={() => {
                      setToggle1(!toggle1);
                    }}
                  >
                    <Link to="/courses">Courses</Link>
                  </li>
                )}
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/appInformation">Download App</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/services">Services</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/udyamsheel">Udyamsheel</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/udyamsathi">Udyamsathi</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/udyamsheel">UdyamSheel</Link>
                </li> */}
                {user && (
                  <>
                    <li
                      style={{ fontWeight: "bold" }}
                      onClick={handleOpenUserMenu}
                    >
                      <Link>{user?.name}</Link>
                    </li>
                    <Menu
                      onClick={() => {
                        setToggle1(!toggle1);
                      }}
                      sx={{ mt: "70px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {/* {settings.map((setting) => ( */}
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" onClick={handleLogout}>
                          Logout
                        </Typography>
                      </MenuItem>
                      {/* ))} */}
                    </Menu>
                  </>
                )}
                {/* <li  onClick={() => {
                      setToggle1(!toggle1);
                    }}>
                      <Button variant="contained" sx={{ml:2,color:"white"}}>
                        sell on ONDC
                      </Button>
                  </li> */}
                {!user && (
                  <li
                    onClick={() => {
                      setToggle1(!toggle1);
                    }}
                  >
                    <Link to="/login">Login</Link>
                  </li>
                )}
                {!user && (
                  <li
                    onClick={() => {
                      setToggle1(!toggle1);
                    }}
                  >
                    <Link to="/register">Register</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
