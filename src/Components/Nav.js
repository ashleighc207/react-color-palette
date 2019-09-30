import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.props.changeSliderLevel(evt);
  }
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
            value={this.props.level}
            className="Nav--slider"
            id="shade-range"
            step="100"
            onChange={this.handleChange}
          />
        </div>
      </nav>
    );
  }
}
export default Nav;
