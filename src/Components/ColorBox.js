import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import styles from "../Styles/ColorBoxStyles.js";
import { withStyles } from "@material-ui/core/styles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.showOverlay = this.showOverlay.bind(this);
  }
  showOverlay() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { classes } = this.props;
    let color;
    this.props.format === "hex"
      ? (color = this.props.hex)
      : this.props.format === "rgb"
      ? (color = this.props.rgb)
      : (color = this.props.rgba);
    let visible, textVisible, textColor;
    let luminance = chroma(color).luminance();
    luminance < 0.15
      ? (textColor = `${classes.lightText}`)
      : (textColor = `${classes.darkText}`);

    if (this.state.copied) {
      textVisible = `${classes.ColorBoxOverlayShowText}`;
      visible = `${classes.ColorBoxOverlayShow}`;
    } else {
      visible = "";
      textVisible = "";
    }

    let format = this.props.format;
    return (
      <div className={classes.ColorBox} style={{ backgroundColor: color }}>
        <div className={classes.ColorBoxInfo}>
          <span className={`${classes.ColorBoxName} ${textColor}`}>
            {this.props.name}
          </span>
          {!this.props.singlePalette && (
            <Link
              to={`/palette/${this.props.paletteName.replace(/ /g, "-")}/${
                this.props.id
              }/${this.props.format}`}
              className={classes.ColorBoxLink}
              onClick={e => e.stopPropagation()}
              format={format}
            >
              More...
            </Link>
          )}
        </div>
        <div
          className={`${classes.ColorBoxOverlay} ${visible}`}
          style={{ backgroundColor: color }}
        ></div>
        <div className={`${classes.ColorBoxOverlayText} ${textVisible}`}>
          <div className={`${classes.ColorBoxCopiedBanner} ${textColor}`}>
            Copied!
          </div>
          <div className={`${classes.ColorBoxCopiedColor} ${textColor}`}>
            {color}
          </div>
        </div>

        <div className={classes.ColorBoxCopyContainer}>
          <CopyToClipboard text={color} onCopy={this.showOverlay}>
            <button className={classes.ColorBoxCopy}>Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(ColorBox);
