import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
export default ColorBox;
