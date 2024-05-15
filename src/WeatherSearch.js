import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });
  // let [loaded, setLoaded] = useState(false);
  console.log(weather);
  //what the UI is supposed to display
  function displayWeather(response) {
    // setLoaded(true);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      iconApi: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  // the functin is supposed to collect information from API Url after clicking the search button
  function handleSubmit(event) {
    event.preventDefault();
    // let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiKey = "cb41405eec5005279f05d59c00864763";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="row">
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <input
          type="Search"
          placeholder="Input a city..."
          onChange={updateCity}
          autoFocus="on"
          className="col-9 text-center"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast
          coordinates={weather.coordinates}
          temperature={weather.temperature}
        />
      </div>
    );
  } else {
    let apiKey = "cb41405eec5005279f05d59c00864763";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return form;
  }
}
