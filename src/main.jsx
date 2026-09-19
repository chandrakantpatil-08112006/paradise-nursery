import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.css";

// Provider  -> gives every component access to the Redux store.
// HashRouter -> React Router that works on GitHub Pages (URLs look like /#/plants).
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
