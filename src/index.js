import React from "react";
import ReactDOM from "react-dom/client";
// import {BrowserRouter as Router}  from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <App />
  // </Router>
);

// сбор каких то полезных метрик
// reportWebVitals();
