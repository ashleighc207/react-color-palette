import React, { Component } from "react";
import "./SinglePalette.css";

class SinglePalette extends Component {
  render() {
    const { palette } = this.props.palette;
    console.log(this.props.palette.levels);
    return (
      <div>
        {this.props.palette.levels.map(l => {
          console.log(this.props.palette.colors[l][0].rgb);
          return (
            <div
              className="SinglePalette"
              styles={{
                backgroundColor: this.props.palette.colors[l][0].rgb.toString()
              }}
            ></div>
          );
        })}
      </div>
    );
  }
}
export default SinglePalette;
