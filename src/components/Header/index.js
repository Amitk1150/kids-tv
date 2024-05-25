import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

function Header() {
    return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="../icons/youtube.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
        Bootstrap
      </Link>
    </div>
  </nav>
}

export default Header;