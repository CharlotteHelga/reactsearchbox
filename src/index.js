import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./WeatherSearch";
import WeatherSearch from "./WeatherSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherSearch defaultCity = "Nairobi"/>
    <h4>
      Open sourced by, 
       <a href="https://github.com/CharlotteHelga/reactsearchbox">CharlotteHelga</a>
    </h4>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
