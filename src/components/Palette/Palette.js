import React, { Component } from "react";
import { ColorBox } from "../";
import styles from "./PaletteStyles.js";
import { Nav } from "../";
import { Footer } from "../";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
      snackbarOpen: false
    };
    this.changeSliderLevel = this.changeSliderLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  changeSliderLevel(evt) {
    this.setState({ level: evt.target.value });
  }
  changeFormat(evt) {
    this.setState({ format: evt.target.value, snackbarOpen: true });
  }
  closeSnackbar() {
    this.setState({ snackbarOpen: false });
  }
  render() {
    const { classes } = this.props;

    const colors = this.props.palette.colors[this.state.level].map(c => {
      return (
        <ColorBox
          {...c}
          paletteName={this.props.palette.paletteName}
          format={this.state.format}
          key={c.name}
        />
      );
    });
    return (
      <div className={classes.Palette}>
        <Nav
          level={this.state.level}
          changeSliderLevel={this.changeSliderLevel}
          handleChange={this.changeFormat}
          default={this.state.format}
        />
        <div className={classes.PaletteColors}>{colors}</div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.snackbarOpen}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          contentprops={{ "aria-describedby": "message-id" }}
          message={
            <span>
              Color format successfully changed to {this.state.format}
            </span>
          }
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <Footer palette={this.props.palette} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
