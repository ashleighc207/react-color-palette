import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.palettes.map(p => {
          return (
            <Link to={`/palette/${p.id}`} key={p.id}>
              {p.paletteName}
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Home;
