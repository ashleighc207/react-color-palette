import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
        <div className="Nav--container">
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
        </div>
        <div className="Nav--select_container">
          <Select
            className="Nav--select"
            value={this.props.default}
            onChange={this.props.handleChange}
          >
            <MenuItem value="hex">hex - #FFFFFF</MenuItem>
            <MenuItem value="rgb">rgb - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">rgba - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
export default Nav;
