import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";

class ColorBox extends Component {
  render() {
    const { name, color } = this.props;
    return (
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="ColorBox--info">
          <span className="ColorBox--name">{name}</span>
          <Link to={`/color/${color}`} className="ColorBox--link">
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
