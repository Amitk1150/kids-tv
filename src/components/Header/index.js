import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

function Header() {
    return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="../youtube.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
        Youtube
      </Link>
    </div>
  </nav>
}

export default Header;