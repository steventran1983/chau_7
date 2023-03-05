import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <p className="student-name">Chau Bui</p>
      <nav>
        <Link className="nav-button" to="/">
          Home
        </Link>
        <Link className="nav-button" to="../gallery">
          Gallery
        </Link>
        <Link className="nav-button" to="../staff">
          Staff
        </Link>
        <Link className="nav-button" to="../order">
          Order
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
