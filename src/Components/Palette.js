import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colors = this.props.colors.map(c => {
      return <ColorBox {...c} key={c.name} />;
    });
    return (
      <div className="Palette">
        <div className="Palette--colors">{colors}</div>
      </div>
    );
  }
}
export default Palette;
