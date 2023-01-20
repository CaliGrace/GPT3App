import React from "react";
import logo from "../../assets/logo.svg";
import { BiCopyright } from "react-icons/bi";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer__content">
        <div className="footer__logo-container">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            sunt?
          </p>
        </div>
        <div className="footer__links-container">
          <div className="footer__links">
            <h5>Links</h5>
            <a href="#">Home</a>
            <a href="#">Overview</a>
            <a href="#">Social Media</a>
            <a href="#">About</a>
          </div>
          <div className="footer__company">
            <h5>Companies</h5>
            <p>Home</p>
            <p>Overview</p>
            <p>Social Media</p>
            <p>About</p>
          </div>
          <div className="footer__getInTouch">
            <h5>Get in touch</h5>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>lorem ipsum</p>
            <p>Social Media</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          <BiCopyright /> 2021 GPT-3 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
