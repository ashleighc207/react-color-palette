import React, { Component } from "react";

class PaletteBox extends Component {
  render() {
    const { classes, name, color, textColor } = this.props;
    return (
      <div className={classes.newColorBox} style={{ backgroundColor: color }}>
        <p className={[classes.newColorBoxText, textColor].join(" ")}>{name}</p>
        <i
          className={`fas fa-trash-alt ${classes.newColorBoxIcon} ${textColor}`}
        ></i>
      </div>
    );
  }
}
export default PaletteBox;
