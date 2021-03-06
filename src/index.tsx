import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./index.css";

// Components
import App from "./App";

// Context
import ContextProvider from "./components/ContextProvider/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
