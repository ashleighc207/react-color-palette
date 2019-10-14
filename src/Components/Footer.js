import React, { Component } from "react";
import styles from "../Styles/FooterStyles.js";
import { withStyles } from "@material-ui/core/styles";

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props.palette;
    const { classes } = this.props;
    return (
      <footer className={classes.Footer}>
        <div className={classes.FooterName}>{paletteName}</div>
        <div className={classes.FooterEmoji}>{emoji}</div>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
