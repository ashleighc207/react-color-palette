import React from "react";
import Palette from "./Components/Palette.js";
import Nav from "./Components/Nav.js";
import seedColors from "./Models/seedColors.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
