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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, iusto?</p>
        <h1>Web Developer</h1>

        <div>
          <Link to="/work"
          className="btn">
            Work
          </Link>

          <Link to="/hireme"
          className="btn btn-light">
            Hire Me
          </Link>

          <Link to="/contact"
          className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;