import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./index.css";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${ temperature }`;
    }
    function minTemp() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }
    return (
      <div>
        <div className="row pt-5 text-center">
          <div>{day()}</div>
          <div className="col-2">
            <WeatherIcon code={props.data.weather[0].icon} size={40} />
          </div>
          <div className="col-9">
            <div>{maxTemp()}°</div>
            <div>{minTemp()}°</div>
          </div>
        </div>
      </div>
    );
}