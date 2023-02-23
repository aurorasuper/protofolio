import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App/App";
import { RefsProvider } from "./context/RefsContext";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RefsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RefsProvider>
  </React.StrictMode>
);
