import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Barcelona" />
    </div>
  );
}
