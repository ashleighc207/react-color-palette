import React, { Component } from "react";
import styles from "../Styles/SinglePaletteStyles.js";
import { withRouter } from "react-router-dom";
import ColorBox from "./ColorBox.js";
import { withStyles } from "@material-ui/core/styles";

class SinglePalette extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.SinglePalette}>
        <div>
          <button
            className={classes.SinglePaletteGoBack}
            onClick={this.props.history.goBack}
          >
            <i
              className={`fas fa-chevron-left ${classes.SinglePaletteIcon}`}
            ></i>{" "}
            Go Back
          </button>
        </div>
        <div className={classes.SinglePaletteColorContainer}>
          {this.props.palette.levels.map(l => {
            return (
              <ColorBox
                className={classes.singlePalette}
                key={l}
                plaetteName={this.props.palette.paletteName}
                {...this.props.palette.colors[l][0]}
                format={this.props.palette.format}
                singlePalette
              ></ColorBox>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(SinglePalette));
