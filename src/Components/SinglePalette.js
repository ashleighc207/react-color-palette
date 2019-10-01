import React, { Component } from "react";
import "./SinglePalette.css";
import { Link, withRouter } from "react-router-dom";
import ColorBox from "./ColorBox.js";

class SinglePalette extends Component {
  render() {
    const { palette } = this.props.palette;

    return (
      <div className="SinglePlaette">
        <div className="SinglePalette--back">
          <button
            className="SinglePalette--go_back"
            onClick={this.props.history.goBack}
          >
            Go Back
          </button>
        </div>
        <div className="SinglePalette--color_container">
          {this.props.palette.levels.map(l => {
            return (
              <ColorBox
                className="SinglePalette--color"
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
export default withRouter(SinglePalette);
