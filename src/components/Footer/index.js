import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <div className="footer-area w-100 position-fixed bottom-0">
      <div className="footer-menu py-2 bg-dark bg-gradient d-flex flex-row justify-content-center gap-4">
        <Link to="/">
          <img className="icons" src="../../home.svg" alt="Home" />
        </Link>
        {/* <Link to="/shorts">
          <img className="icons" src="../../shorts.svg" alt="Shorts" />
        </Link> */}
      </div>
    </div>
  );
}
export default Footer;
