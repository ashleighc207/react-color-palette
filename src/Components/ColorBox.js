import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <span className="ColorBox--name">{this.props.name}</span>
        <span className="ColorBox--link">More...</span>
      </div>
    );
  }
}
export default ColorBox;
