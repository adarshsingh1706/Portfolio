import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import reactimg from "../assets/react.jpg";
import react2 from "../assets/react2.jpg";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const AboutContent = () => {
  return (
    <>
    

    
    <div className="about">
      <div className="left">
        <h1>My Skills</h1>
        <h1>
         <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> <FaBootstrap /> <SiTailwindcss /> <TbBrandCpp /> <FaGithub /> <FaPython />
        </h1>
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
    </>
  );
};

export default AboutContent;
