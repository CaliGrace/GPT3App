import React from "react";
import { Feature } from "../../components";
import "./Features.css";

const featureData = [
  {
    title: 'Improving end diszurp lis',
    text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident'
  },
  {
    title: 'Become the tended active',
    text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    title: 'Message or amnot the tended active',
    text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    title: 'Improving end diszurp lis',
    text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident'
  }

]
const Features = () => {
  return (
    <div className="features section__margin scale-up-center">
      <div className="features__heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features__feature-container">
        {
          featureData.map((item, index) => {
            return <Feature key={index} title={item.title} text={item.text}/>
          })
        }
      </div>
    </div>
  );
};

export default Features;
