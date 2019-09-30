import React, { Component } from "react";
import "./MiniPalette.css";

class MiniPalette extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="MiniPalette">
        <div className="MiniPalette--boxes">
          {this.props.colors.map(c => {
            console.log(c);
            return (
              <div
                style={{ backgroundColor: c.color }}
                className="MiniPalette--box"
              ></div>
            );
          })}
        </div>
        <div className="MiniPalette--info">
          <h4 className="MiniPalette--name">{this.props.paletteName}</h4>
          <p className="MiniPalette--emoji">{this.props.emoji}</p>
        </div>
      </div>
    );
  }
}
export default MiniPalette;
