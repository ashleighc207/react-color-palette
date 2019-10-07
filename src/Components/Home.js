import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home--nav">
          <h1 className="Home--title">React Color Palettes</h1>
          <Link to="/new-palette" className="Home--link">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
        <div className="Home--mini_palettes">
          {this.props.palettes.map(p => {
            return (
              <Link to={`/palette/${p.id}/`} key={p.id}>
                <MiniPalette {...p} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;
