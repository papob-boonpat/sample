import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FirstProvider from "./Provider/FirstProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <FirstProvider>
      <App />
    </FirstProvider>
  </React.Fragment>
);
