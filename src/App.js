import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import seedColors from "./Models/seedColors.js";
import "./App.css";
import { generatePaletteLevels } from "./colorHelper.js";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
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
        </Switch>
      </div>
    );
  }
}

export default App;
