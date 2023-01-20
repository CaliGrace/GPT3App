import React from "react";
import { Article } from "../../components";
import "./Blog.css";
import {blog01,blog02,blog03,blog04,blog05} from './imports';

const Blog = () => {
  return (
    <div className="blog section__margin">
      <div className="blog__heading">
        <h1 className="gradient__text">The Heading of The blog</h1>
      </div>
      <div className="blog__container">
        <div className="blog__groupA">
            <Article img={blog01} title="Lorem ipsum dolor sit amet consectetur.
" date="2 Sept 30"/>          
        </div>
        <div className="blog__groupB">
          <Article title="Lorem ipsum dolor sit amet consectetur.
" img={blog02} date="2 Sept 30"/>
          <Article title="Lorem ipsum dolor sit amet consectetur.
" img={blog03} date="2 Sept 30"/>
          <Article title="Lorem ipsum dolor sit amet consectetur.
" img={blog04} date="2 Sept 30"/>
          <Article title="Lorem ipsum dolor sit amet consectetur.
" img={blog05} date="2 Sept 30"/>
        </div>
      </div>
    </div>
  )
};

export default Blog;
