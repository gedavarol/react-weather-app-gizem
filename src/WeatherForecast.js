import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  console.log(props);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={35} />
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19º</span>
            <span className="forecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
