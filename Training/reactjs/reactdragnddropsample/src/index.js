import React from "react";
import ReactDOM from "react-dom/client";

import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BasicPage from "./BasicPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <BasicPage />
      </DndProvider>
    </div>
  </React.StrictMode>
);
