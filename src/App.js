import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import PaletteForm from "./Components/PaletteForm.js";
import Error from "./Components/Error.js";
import seedColors from "./Models/seedColors.js";
import "./App.css";
import {
  generatePaletteLevels,
  generateSinglePaletteLevels
} from "./colorHelper.js";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import SinglePalette from "./Components/SinglePalette.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.state = { palettes: seedColors };
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id.toLowerCase();
    });
  }
  savePalette(palette) {
    console.log(this.state.palettes);
    this.setState({ palettes: [...this.state.palettes, palette] });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home palettes={this.state.palettes} />}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePaletteLevels(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:color/:format"
            render={routeProps => (
              <SinglePalette
                palette={generateSinglePaletteLevels(
                  this.findPalette(routeProps.match.params.paletteId),
                  routeProps.match.params.color,
                  routeProps.match.params.format
                )}
              />
            )}
          />
          <Route
            exact
            path="/new-palette"
            render={routeProps => (
              <PaletteForm
                palettes={this.state.palettes}
                savePalette={this.savePalette}
                {...routeProps}
              />
            )}
          />
          <Route render={() => <Error />} />
        </Switch>
      </div>
    );
  }
}

export default App;
