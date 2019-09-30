import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <Link to="/" className="Nav--link_container">
          <p className="Nav--text">Color Palettes </p>
        </Link>
        <div className="Nav--slide_container">
          <input
            type="range"
            min="100"
            max="900"
            value="100"
            className="Nav--slider"
            id="shade-range"
          />
        </div>
      </nav>
    );
  }
}
export default Nav;
