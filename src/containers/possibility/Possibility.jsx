import React from "react";
import "./Possibility.css";
import image from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="possibility section__padding">
      <div className="possibility__img-container">
        <img src={image} alt="possibility image" />
      </div>
      <div className="possibility__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In tempore veniam qui quidem neque assumenda dignissimos accusantium officiis, possimus, perspiciatis, quam velit? Officia commodi totam maiores animi labore nobis non?</p>
        <h4>Requesst Early Access</h4>
      </div>
    </div>
  )
};

export default Possibility;
