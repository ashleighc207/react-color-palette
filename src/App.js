import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import PaletteForm from "./Components/PaletteForm.js";
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
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id.toLowerCase();
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home palettes={seedColors} />} />
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
          <Route exact path="/new-palette" render={() => <PaletteForm />} />
        </Switch>
      </div>
    );
  }
}

export default App;
