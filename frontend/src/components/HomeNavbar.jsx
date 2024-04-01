import React, { useState } from "react";
import "./styles/homeNavbar.css";
import { menuBlack, closeBlack, logo1 } from "../assets";
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
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import lan_icon from "../assets/lan_icon.png";

const HomeNavbar = () => {
  const { t } = useTranslation();
  const [toggle1, setToggle1] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useSelector((state) => state.user);
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
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };
  window.addEventListener("scroll", changeBackground);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
                src={logo1}
                height={"90px"}
                className="logo1"
                width={"auto"}
                alt=""
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul className="navbar-menuHome">
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to={"/"}
                  className="nav-link"
                >
                  {t("nav_home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="about"
                  className="nav-link"
                >
                  {t("nav_about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/appInformation"
                  className="nav-link"
                >
                  {t("nav_downloadapp")}
                </NavLink>
              </li>
              <div class="dropdown">
                <NavLink
                  activeClassName="active"
                  to="/services"
                  className="nav-link"
                >
                  {t("nav_services")}
                </NavLink>

                <div class="dropdown-content">
                  {user && (
                    <NavLink to="/courses" className="nav-link1">
                      {t("nav_courses")}
                    </NavLink>
                  )}
                  <NavLink to="/udyamsheel" className="nav-link1">
                    {t("nav_udyamsheel")}
                  </NavLink>
                  <NavLink to="/udyamsathi" className="nav-link1">
                    {t("nav_udyamsathi")}
                  </NavLink>
                </div>
              </div>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/contact"
                  className="nav-link"
                  style={{ marginRight: "20px" }}
                >
                  {t("nav_contact")}
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-menuHome2">
              {user && (
                <>
                  <li
                    style={{ fontWeight: "bold" }}
                    onClick={handleOpenUserMenu}
                  >
                    <Button
                      sx={{ ml: 2, color: "green" }}
                      aria-describedby={id}
                      variant="outlined"
                    >
                      {user?.name}
                    </Button>
                  </li>
                </>
              )}

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
                      <Button sx={{ p: 1 }} onClick={handleClose}>
                        <Typography
                          onClick={() => navigate("/admin/responses")}
                        >
                          Responses
                        </Typography>
                      </Button>
                      <Button sx={{ p: 1 }} onClick={handleClose}>
                        <Typography onClick={() => navigate("/admin/visitors")}>
                          Visitors
                        </Typography>
                      </Button>
                    </Stack>
                  </Popover>
                </>
              )}
              {!user && (
                <div>
                  {isClicked ? (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Button
                          sx={{
                            p: "10px 20px",
                            borderRadius: "10px",
                            border: "solid 1.5px",
                            // ml: 3,
                            fontWeight: "normal",
                            color: "#006400",
                            textTransform: "initial",
                            transition:
                              "filter 0.4s ease, color 0.4s ease, background 0.3s ease",
                            "&:hover": {
                              filter: "drop-shadow(-2px 4px 4px   #0064003a  )",
                              color: "white",
                              background:
                                "linear-gradient( #2E8446 , #006400 )",
                            },
                          }}
                          variant="outlined"
                          onClick={() => {
                            handleButtonClick();
                            navigate("/login");
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              alignItems: "center",
                            }}
                          >
                            {t("signin_btn")}
                          </div>
                        </Button>
                        <Button
                          sx={{
                            p: "10px 20px",
                            borderRadius: "10px",
                            ml: 2,
                            color: "white",
                            textTransform: "initial",
                            background: "linear-gradient( #2E8446 , #006400 )",
                            "&:hover": {
                              filter: "drop-shadow(-2px 4px 4px   #0064003a  )",
                            },
                          }}
                          variant="contained"
                          onClick={() => navigate("/register")}
                        >
                          {t("registernow_btn")}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div style={{}}>
                      <Button
                        sx={{
                          p: "10px 20px",
                          borderRadius: "10px",
                          fontWeight: "normal",
                          color: "white",
                          textTransform: "initial",
                          background: "linear-gradient( #2E8446 , #006400 )",
                          "&:hover": {
                            filter: "drop-shadow(-2px 4px 4px   #0064003a  )",
                          },
                        }}
                        variant="filled"
                        onClick={() => {
                          handleButtonClick();
                          navigate("/login");
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                          }}
                        >
                          {t("login_btn")}
                          <PersonIcon />
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
                //
                //
              )}
              <li>
                <div className={isClicked ? "navbar3" : "navbar3 right_margin"}>
                  <img src={lan_icon} alt="icon" />
                  <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="lng_dropdown"
                  >
                    <option className="lng_option" value="en">
                      English
                    </option>
                    <option value="hi">हिन्दी</option>
                  </select>
                </div>
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
