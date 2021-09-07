import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App Project</h1>
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
}
