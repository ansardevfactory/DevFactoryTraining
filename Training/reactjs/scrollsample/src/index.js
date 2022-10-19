import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./ScrollSample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
      <App /> 
  </React.StrictMode>
);
