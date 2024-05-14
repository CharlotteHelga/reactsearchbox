import React from "react";
import FormattedDate from "./FormattedDate";
// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo position-relative">
      <div className="container ">
        <div className="row">
          <div className="col-6 ">
            <h1>{props.data.city}</h1>
            <div>
              <FormattedDate date={props.data.date} />,{props.data.description}
            </div>
            <div>
              Humidity:{props.data.humidity}%, Wind: {props.data.wind} km/hr
            </div>
          </div>
          <div className="col-6 column2">
            {/* <WeatherTemperature celsius={props.data.temperature} /> */}
            <h2>
              <span>
                <img
                  className="img-fluid"
                  src={props.data.iconApi}
                  alt={props.data.description}
                />
                {Math.round(props.data.temperature)}°C
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
