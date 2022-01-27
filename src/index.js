import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TravelProvider from "./context/TravelProvider";

ReactDOM.render(
  <TravelProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TravelProvider>,
  document.getElementById("root")
);
