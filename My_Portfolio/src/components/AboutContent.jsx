import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import reactimg from "../assets/react.jpg";
import react2 from "../assets/react2.jpg";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am currently learning MERN Stack.
        </p>
        <Link to="/contact">
          <button className="button">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={reactimg} className="img" alt="image" />
          </div>

          <div className="img-stack bottom">
            <img src={react2} className="img" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
