import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Parent";  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
      <App />
    </React.StrictMode> 
);
