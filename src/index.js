import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./component/GlobalStyles/index";
import { ThemeProvider } from "./ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </GlobalStyles>
);
