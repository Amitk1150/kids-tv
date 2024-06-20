import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <div className="footer-area w-100 position-fixed bottom-0">
      <div className="footer-menu py-2 bg-dark bg-gradient d-flex flex-row justify-content-center">
        <Link to="/">
          <div className="menu-items d-flex flex-column justify-content-center align-items-center">
            <img className="icons" src="../../home.svg" alt="Home" />
            <span className="text-white">Home</span>
          </div>
        </Link>
        <Link to="/shorts">
          <div className="menu-items d-flex flex-column justify-content-center align-items-center">
            <img className="icons" src="../../shorts.svg" alt="Shorts" />
            <span className="text-white">Shorts</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
