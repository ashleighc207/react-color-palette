import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import "./Palette.css";
import Nav from "./Nav.js";

class Palette extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colors = this.props.palette.colors[100].map(c => {
      return <ColorBox {...c} key={c.name} />;
    });
    return (
      <div className="Palette">
        <Nav />
        <div className="Palette--colors">{colors}</div>
      </div>
    );
  }
}
export default Palette;
