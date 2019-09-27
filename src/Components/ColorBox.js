import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
          <CopyToClipboard text={color}>
            <button className="ColorBox--copy">Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
export default ColorBox;
