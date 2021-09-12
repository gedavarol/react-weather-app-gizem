import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form id="search-form">
            <div className="row p-2 m-1">
              <div className="col-12">
                <input
                  type="text"
                  id="form-city"
                  placeholder="Enter a city"
                  autoFocus="on"
                />
                <span className="col-2">
                  <button
                    type="submit"
                    className="btn btn-outline-success searchButton"
                  >
                    🔎 Search
                  </button>
                </span>
                <span className="col-2">
                  <button
                    type="submit"
                    className="btn btn-outline-dark currentButton"
                  >
                    📌 Current
                  </button>
                </span>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-6">
              <img
                src="{weatherData.icon}"
                alt="API icon"
                className="weather-icon float-left"
                id="icon"
              />
              <span className="temperature" id="temperature">
                {weatherData.temperature}
              </span>
              <span className="units">
                <a href="/" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |
                <a href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
          <hr />
          <ul>
            <div className="row">
              <div className="col-4">
                <h2>
                  <FormattedDate date={weatherData.date} />
                </h2>
              </div>
              <div className="col-4">
                <li>
                  <span className="condition">Description: {""}</span>
                  <span className="description text-capitalize">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  <span className="condition">Humidity💧: {""}</span>
                  <span id="humidity">{weatherData.humidity}</span>%
                </li>
              </div>
              <div className="col-4">
                <li>
                  <span className="condition">Wind 🌬: {""}</span>
                  <span id="wind">{weatherData.wind}</span> km/hr
                </li>
                <li>
                  <span className="condition">Feels like 🌥: {""}</span>
                  <span id="feelsLike">{weatherData.feelsLike}</span>ºC
                </li>
              </div>
            </div>
          </ul>
          <hr />
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
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
