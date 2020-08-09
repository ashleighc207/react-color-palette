import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App/App";

ReactDOM.render(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
