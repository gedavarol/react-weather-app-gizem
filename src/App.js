import React from "react";
import "./App.css";
import "./index.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form id="search-form">
            <div className="row p-2 m-1">
              <div className="col-12">
                <input
                  type="text"
                  id="form-city"
                  placeholder="Enter a city"
                  autofocus="on"
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
              <h1>Barcelona</h1>
            </div>
            <div className="col-6">
              <img
                src=""
                alt="API icon"
                class="weather-icon float-left"
                id="icon"
              />
              <span className="temperature" id="temperature"></span>
              <span className="units">
                <a href="/" id="celsius-link" class="active">
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
                <h2>Today - 30/04/21</h2>
              </div>
              <div className="col-4">
                <li>
                  <span className="condition">Description:</span>
                  <span id="description"></span>
                </li>
                <li>
                  <span className="condition">Humidity💧:</span>
                  <span id="humidity"></span>%
                </li>
              </div>
              <div className="col-4">
                <li>
                  <span className="condition">Wind 🌬:</span>
                  <span id="wind"></span> km/hr
                </li>
                <li>
                  <span className="condition">Feels like 🌥:</span>
                  <span id="feelsLike"></span>ºC
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
    </div>
  );
}
