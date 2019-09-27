import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <Link to="/" className="Nav--link_container">
          <i class="fa fa-paint-brush Nav--icon"></i>
          <p className="Nav--text">Color Palettes </p>
        </Link>
      </nav>
    );
  }
}
export default Nav;
