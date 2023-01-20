import React from "react";
import "./Article.css";

const Article = ({ img,date, title}) => {
  return <h3>
    <div className="article">
      <div className="article__img-container">
        <img src={img} alt="img=" />
      </div>
      <div className="article__content">
        <div className="article__content-title">
        <p>{date}</p>
        <h3>{title}</h3>
        </div>
        <a href="#">Read More</a>
      </div>
    </div>
  </h3>;
};

export default Article;
