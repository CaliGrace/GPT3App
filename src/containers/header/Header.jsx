import React from "react";
import "./Header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <div className="header section__padding " id="Home">
      <div className="header__content">
        <h1 className="gradient__text ">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          itaque, fugiat quasi aliquid sequi repudiandae. Ab eligendi est esse
          neque quidem perferendis, vel qui suscipit, at quisquam adipisci
          laboriosam maxime!
        </p>
        <div className="header__email-container">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
      </div>
      <div className="header__img-container">
        <img src={ai} alt="image" />
      </div>
    </div>
  );
};

export default Header;
