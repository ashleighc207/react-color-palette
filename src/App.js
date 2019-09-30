import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import Nav from "./Components/Nav.js";
import seedColors from "./Models/seedColors.js";
import "./App.css";
import { generatePaletteLevels } from "./colorHelper.js";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePaletteLevels(seedColors[4])} />
    </div>
  );
}

export default App;
