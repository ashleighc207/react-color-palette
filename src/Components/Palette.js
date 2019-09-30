import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import "./Palette.css";
import Nav from "./Nav.js";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 100
    };
    this.changeSliderLevel = this.changeSliderLevel.bind(this);
  }
  changeSliderLevel(evt) {
    this.setState({ level: evt.target.value });
  }
  render() {
    const colors = this.props.palette.colors[this.state.level].map(c => {
      return <ColorBox {...c} key={c.name} />;
    });
    return (
      <div className="Palette">
        <Nav
          level={this.state.level}
          changeSliderLevel={this.changeSliderLevel}
        />
        <div className="Palette--colors">{colors}</div>
      </div>
    );
  }
}
export default Palette;
