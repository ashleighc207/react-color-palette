import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.showOverlay = this.showOverlay.bind(this);
  }
  showOverlay() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, color } = this.props;
    let visible;
    this.state.copied ? (visible = "show") : (visible = "");
    return (
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="ColorBox--info">
          <span className="ColorBox--name">{name}</span>
          <Link to={`/color/${color}`} className="ColorBox--link">
            More...
          </Link>
        </div>
        <div
          className={`ColorBox--overlay ${visible}`}
          style={{ backgroundColor: color }}
        ></div>
        <div className={`ColorBox--overlay_text ${visible}`}>
          <div className="ColorBox--copied_banner">Copied!</div>
          <div className="ColorBox--copied_color">{color}</div>
        </div>

        <div className="ColorBox--copy_container">
          <CopyToClipboard text={color} onCopy={this.showOverlay}>
            <button className="ColorBox--copy">Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
export default ColorBox;
