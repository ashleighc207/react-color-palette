import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ErrorStyles.js";
import { withStyles } from "@material-ui/core/styles";

class Error extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classes.Error}>
        <h1 className={classes.ErrorHeading}>
          Oh no, looks like what you're looking for doesn't exist.
        </h1>
        <h3 className={classes.ErrorSubheading}>Here's some other options:</h3>
        <Link to="/" className={classes.ErrorLink}>
          View All Palettes
        </Link>
        <Link to="/new-palette" className={classes.ErrorLink}>
          Create a New Palette
        </Link>
      </section>
    );
  }
}
export default withStyles(styles)(Error);
