import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {this.props.palettes.map(p => {
          return (
            <Link to={`/palette/${p.id}`} key={p.id}>
              <MiniPalette {...p} />
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Home;
