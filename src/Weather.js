import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form onSubmit={handleSubmit} id="search-form">
            <div className="row p-2 m-1">
              <div className="col-12">
                <input
                  type="search"
                  id="form-city"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={updateCity}
                />
                <span className="col-2">
                  <button
                    type="submit"
                    className="btn btn-outline-success w-25 p-3 ms-4"
                  >
                    🔎 Search
                  </button>
                </span>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-gizem-eda-varol.netlify.app/about.html"
            target="_blank"
            rel="noreferrer"
          >
            Gizem Eda Varol
          </a>{" "}
          {""}
          and is{" "}
          <a href="/" target="_blank" rel="noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
