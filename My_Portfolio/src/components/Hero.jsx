import "./HeroStyles.css";
import Heroimg from "../assets/Herobkgrnd.jpg"
import { Link } from "react-router-dom";
const Hero = ()=>{
  return(
    <>
    <div className="hero">
      <div className="mask">
        <img className="HomeImg"
        src={Heroimg}
        alt="HomeBackground"/>
      </div>
      <div className="content">
        <p>Hello! I am Adarsh</p>
        <h1>Web Developer</h1>

        <div>
          <Link to="/work"
          className="btn">
            Work
          </Link>

          <Link to="/certificates"
          className="btn btn-light">
            Certificates
          </Link>

          <Link to="/resume"
          className="btn btn-light">
            Resume
          </Link>


          <Link to="/hireme"
          className="btn ">
            Hire Me
          </Link>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;