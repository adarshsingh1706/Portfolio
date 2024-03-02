import "./CardsStyle.css";
import { Link } from "react-router-dom";
import React from 'react'

const Cards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h4>-BASIC-</h4>
          <span className="bar"></span>
          <p className="btc">$75.90</p>
          <p>&#8226;500GB Storage</p>
          <p>&#8226;Bandwidth 10 GB</p>
          <p>&#8226;Upto 3 Databases</p>
          <p>&#8226;Email accounts:Yes</p>
          <p>&#8226;Upto 10 free SMS</p>
          <br></br>
          <Link to="/contact" className="vibrant-btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h4>-STARTUP-</h4>
          <span className="bar"></span>
          <p className="btc">$145.90</p>
          <p>&#8226;500GB Storage</p>
          <p>&#8226;Bandwidth 45 GB</p>
          <p>&#8226;Upto 15 Databases</p>
          <p>&#8226;Email accounts:Yes</p>
          <p>&#8226;Upto 150 free SMS</p>
          <br></br>
          <Link to="/contact" className="vibrant-btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h4>-ENTREPRISE-</h4>
          <span className="bar"></span>
          <p className="btc">$225.90</p>
          <p>&#8226;Unlimited Storage</p>
          <p>&#8226;Unlimited Bandwidth</p>
          <p>&#8226;upto 90 Databases</p>
          <p>&#8226;Email accounts:Yes</p>
          <p>&#8226;Upto 500 free SMS</p>
          <br></br>
          <Link to="/contact" className="vibrant-btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Cards