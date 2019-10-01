import React, { Component } from "react";
import "./SinglePalette.css";

class SinglePalette extends Component {
  render() {
    const { palette } = this.props.palette;
    console.log(this.props.palette);
    let format = this.props.palette.format;

    return (
      <div className="SinglePalette">
        {this.props.palette.levels.map(l => {
          let color;
          format === "hex"
            ? (color = this.props.palette.colors[l][0].hex)
            : format === "rgb"
            ? (color = this.props.palette.colors[l][0].rgb)
            : (color = this.props.palette.colors[l][0].rgba);
          return (
            <div
              className="SinglePalette--color"
              key={l}
              style={{ backgroundColor: color }}
            >
              <span className="SinglePalette--text">{color}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SinglePalette;
