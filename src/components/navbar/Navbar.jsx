import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const MenuItems = () => (
  <>
    <li>
      <a href="#Home">Home</a>
    </li>
    <li>
      <a href="#whatisgpt3">What is GPT3</a>
    </li>
    <li>
      <a href="#Home">Open AI</a>
    </li>
    <li>
      <a href="#Home">Library</a>
    </li>
    <li>
      <a href="#Home">Blog Section</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar section__padding">
      <div className="navbar__logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links-container">
        <MenuItems />
      </div>
      <div className="navbar__sign">
        <a href="#" className="navbar__button navbar__button--secondary">
          Sign In
        </a>
        <a href="#" className="navbar__button navbar__button--primary">
          Sign Up
        </a>
      </div>
      <div className="navbar__menu-toggle">
        {toggleMenu ? (
          <RiCloseLine
            cursor="pointer"
            color="#fff"
            size={20}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            cursor="pointer"
            color="#fff"
            size={20}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="navbar__menu-items">
          <MenuItems />
        </div>
      )}
    </div>
  );
};

export default Navbar;
