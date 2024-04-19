import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  //what the UI is supposed to display
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png}`,
    });
  }
  // the functin is supposed to collect information from API Url after clicking the search button
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="Search"
        placeholder="Input a city..."
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}</li>
          <li>Wind: {weather.wind}</li>
          <li>description:{weather.description}</li>
          <li>Humidity:{weather.humidity}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
