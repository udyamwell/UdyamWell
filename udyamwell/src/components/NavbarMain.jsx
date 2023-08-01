import React, { useState } from "react";
import "./styles/homeNavbar.css";
import { menuBlack, closeBlack, Udyamwell_Logo_Standee } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/UserSlice.js";
import { Button, Menu, MenuItem, Popover, Typography } from "@mui/material";
const NavabarMain = () => {
  const [toggle1, setToggle1] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, error } = useSelector((state) => state.user);
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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <nav id="navbarHome">
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
              />
            </div>
            <ul className="navbar-menuHome">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              {/* <li><Link to='/blogs'>Blog</Link></li> */}
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
                    sx={{ mt: "50px" }}
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
               {user?.isAdmin && (
                <>
                  <Button
                  sx={{ml:2,color:"white"}}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                  >
                    Admin Panel
                  </Button>
                  <Popover
                  sx={{mt:2}}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Button sx={{p:1}} onClick={()=>navigate('/admin/lectures')}>
                      Lectures
                    </Button>
                  </Popover>
                </>
              )}
              {!user && (
                <li>
                  <Link to="/register">Register</Link>
                </li>
              )}
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
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/courses">Courses</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <Link to="/blogs">Blog</Link>
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
                  <Link to="/contact">Contact</Link>
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
                      onClick={() => {
                        setToggle1(!toggle1);
                      }}
                      sx={{ mt: "50px" }}
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

export default NavabarMain;
