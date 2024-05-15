import React from "react";
import FormattedDate from "./FormattedDate";
import "./index.css";
// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo position-relative">
      <div className="container ">
        <div className="row">
          <div className="col-md-8 fw-semibold">
            <h1>{props.data.city}</h1>
            <div>
              <FormattedDate date={props.data.date} />
              <div className="text-capitalize">{props.data.description}</div>
            </div>
            <div>
              Humidity:{props.data.humidity}%, Wind: {props.data.wind} km/hr
            </div>
          </div>
          <div className="col-md-4 column2">
            <span>
              <img
                className="img-fluid iconImg"
                src={props.data.iconApi}
                alt={props.data.description}
                animate={true}
              />
              <span className="mainTemp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="cels">°C</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
