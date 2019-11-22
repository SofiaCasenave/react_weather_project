import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Project</h1>
        <footer>
          <small>
            Coded by{" "}
            <a href="https://www.linkedin.com/in/sofiacasenave" target="_blank">
              Sofia Casenave
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/SofiaCasenave/react_weather_project"
              target="_blank"
            >
              GitHub open-source
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
