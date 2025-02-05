import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
