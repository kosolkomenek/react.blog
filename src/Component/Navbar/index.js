import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, LogoHeader } from "./Navbar";
const Navbar = () => {
  return (
    <Nav>
      <LogoHeader>
        React vlog
      </LogoHeader>
      <Bars />
      <NavMenu>
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign up
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
