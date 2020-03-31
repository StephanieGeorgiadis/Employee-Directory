import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" 
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Directory
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;