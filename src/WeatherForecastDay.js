import React from "react";

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
        let date = new Date(props.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }
    return (
        <div>
            <div>{day()}</div>
            <div>{props.data.weather[0].icon} size = {36}</div>
            <div><span>{maxTemp()} {" "}|{minTemp()}</span></div>
        </div>
    );
}