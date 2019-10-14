import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "../Styles/NavStyles.js";
import { withStyles } from "@material-ui/core/styles";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.props.changeSliderLevel(evt);
  }
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.Nav}>
        <div className={classes.NavContainer}>
          <Link to="/" className={classes.NavLinkContainer}>
            <p>Color Palettes </p>
          </Link>
          <div>
            <input
              type="range"
              min="100"
              max="900"
              value={this.props.level}
              id="shade-range"
              step="100"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={classes.NavSelectContainer}>
          <Select
            className={classes.NavSelect}
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
export default withStyles(styles)(Nav);
