import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <div className="ColorBox--info">
          <span className="ColorBox--name">{this.props.name}</span>
          <Link to={`/color/${this.props.color}`} className="ColorBox--link">
            More...
          </Link>
        </div>
        <div className="ColorBox--copy_container">
          <button className="ColorBox--copy">Copy</button>
        </div>
      </div>
    );
  }
}
export default ColorBox;
