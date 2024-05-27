import React from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../../core/firebase/config";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import "./style.scss";

function Header() {
  const [user] = useAuthState(auth);
  const loginWithGoogle = async () => {
    await signInWithRedirect(auth, googleProvider);
  };

  const handleLogout = async () => {
    auth.signOut();
  }

  return (
    <nav className="navbar bg-body-tertiary fixed-top ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="../youtube.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <span className="ms-1">YouTube</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/delete">
                    Delete
                  </Link>
                </li>
                <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={loginWithGoogle}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
