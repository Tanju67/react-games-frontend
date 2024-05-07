import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { IoGameControllerSharp } from "react-icons/io5";
import { AuthContext } from "../context/authContext";

function NavBar() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  return (
    <div className={classes.navBar}>
      <div className={classes.logoBox}>
        <NavLink className={classes.logo} to={"/"}>
          <IoGameControllerSharp />
          r-Games
        </NavLink>
      </div>
      <ul className={classes.menuBox}>
        <li>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/games"}
            >
              Games
            </NavLink>
          )}
        </li>
        <li>
          {!isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/login"}
            >
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink onClick={onLogout} to={"/"}>
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
