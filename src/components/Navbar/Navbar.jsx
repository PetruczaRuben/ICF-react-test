import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="Navbar">
        <li className="Logo">
          <Link to="/">Galleries</Link>
        </li>
        <li className="Bookmarks">
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
