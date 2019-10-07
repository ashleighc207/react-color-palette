import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Error.css";

class Error extends Component {
  render() {
    return (
      <section className="Error">
        <h1 className="Error--heading">
          Oh no, looks like what you're looking for doesn't exist.
        </h1>
        <h3 className="Error--subheading">Here's some other options:</h3>
        <Link to="/" className="Error--link">
          View All Palettes
        </Link>
        <Link to="/new-palette" className="Error--link">
          Create a New Palette
        </Link>
      </section>
    );
  }
}
export default Error;
