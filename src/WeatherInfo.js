import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6">
          <span className="weather-icon">
            <WeatherIcon code={props.data.icon} size={100} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <hr />
      <ul>
        <div className="row">
          <div className="col-4">
            <h2 className="current-date">
              <FormattedDate date={props.data.date} />
            </h2>
          </div>
          <div className="col-4">
            <li>
              <span className="condition">Description: {""}</span>
              <span className="description text-capitalize">
                {props.data.description}
              </span>
            </li>
            <li>
              <span className="condition">Humidity💧: {""}</span>
              <span id="humidity">{props.data.humidity}</span>%
            </li>
          </div>
          <div className="col-4">
            <li>
              <span className="condition">Wind 🌬: {""}</span>
              <span id="wind">{props.data.wind}</span> km/hr
            </li>
            <li>
              <span className="condition">Feels like 🌥: {""}</span>
              <span id="feelsLike">{props.data.feelsLike}</span>ºC
            </li>
          </div>
        </div>
      </ul>
      <hr />
    </div>
  );
}
