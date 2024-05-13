import React, { useState } from "react";

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState("celsius");
    
  function showFahrs(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCels(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  function fahrs() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={showFahrs}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(fahrs())}
          <span>
            <a href="/" onClick={showCels}>
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      </div>
    );
  }
}
