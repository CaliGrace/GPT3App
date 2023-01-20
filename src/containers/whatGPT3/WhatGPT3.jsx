import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin section__padding scale-up-center" id="whatisgpt3">
      <div className="whatgpt3__feature">
        <Feature title="What is GPT3" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consectetur, nisi dolorem rem molestias tenetur omnis ipsum ipsa tempore voluptates impedit aut laborum labore rerum cupiditate fuga similique corporis accusamus."/>
      </div>
      <div className="whatgpt3__heading">
        <h1 className="gradient__text">The posiibilities are beyound<br /> your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3__features-container">
        <Feature title="Chatbots" text="Lorem ipsum, dolor sit  consectetur adipisicing elit. Nesciunt consectetur, nisi dolorem rem molestias tenetur omnis ipsum ipsa tempore voluptates impedit aut laborum."/>
        <Feature title="Knowledgebase" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consectetur, nisi dolorem rem molestias tenetur omnis ipsum ipsa tempore voluptates impedit aut."/>
        <Feature title="Education" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consectetur, nisi dolorem rem molestias tenetur omnis ipsum ipsa tempore voluptates impedit aut laborum."/>
      </div>
    </div>
  )
};

export default WhatGPT3;
