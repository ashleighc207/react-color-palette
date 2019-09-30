import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import "./Palette.css";
import Nav from "./Nav.js";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 100,
      format: "hex"
    };
    this.changeSliderLevel = this.changeSliderLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeSliderLevel(evt) {
    this.setState({ level: evt.target.value });
  }
  changeFormat(evt) {
    this.setState({ format: evt.target.value });
  }
  render() {
    const colors = this.props.palette.colors[this.state.level].map(c => {
      return <ColorBox {...c} format={this.state.format} key={c.name} />;
    });
    return (
      <div className="Palette">
        <Nav
          level={this.state.level}
          changeSliderLevel={this.changeSliderLevel}
          handleChange={this.changeFormat}
          default={this.state.format}
        />
        <div className="Palette--colors">{colors}</div>
      </div>
    );
  }
}
export default Palette;
