import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props.palette;
    return (
      <footer className="Footer">
        <div className="Footer--name">{paletteName}</div>
        <div className="Footer--emoji">{emoji}</div>
      </footer>
    );
  }
}
export default Footer;
