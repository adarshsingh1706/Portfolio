
import "./FooterStyles.css" ;
import { FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa";
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="address">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
              <p>Varanasi</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
          <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            8817847399</h4>
          </div>

          <div className="email">
            <h4>
          <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            singhadarsh78398@gmail.com</h4>
          </div>

        </div>
        <div className="right">

          <h4>About Me</h4>
          <p>I am a Btech Undergrad from Vellore Institute of Technology,India.</p>

          <div className="social">
          <Link to="https://github.com/adarshsingh1706">
          <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          </Link>
          <Link to="https://x.com/Adarsh__tech?t=z9ElAPVrOVfb-k1ZsNKzAw&s=09">
          <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          </Link>
          <Link to="https://www.linkedin.com/in/adarsh-singh-742ab9248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          </Link >
          <Link to="https://www.instagram.com/a_raghuvanshi17?igsh=MWZvOG9zNW80MW0zaA==">
          <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          </Link>
          
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;