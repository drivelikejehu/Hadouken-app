import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {

  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-header">
      <div className="container">
        <a className="navbar-brand" href="/dashboard/1">
          Hadouken
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={`/games`} className={location.pathname=== "/games" ? "nav-link active" : "nav-link"} >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/account`} className={location.pathname=== "/account" ? "nav-link active" : "nav-link"} >
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/combos`} className={location.pathname=== "/combos" ? "nav-link active" : "nav-link"} >
                Combos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
