import React, { useState } from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecastTemperature(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="row">
        {forecast.list.slice(0, 6).map(function(weather) {
          return (
            <div className="col-2">
              <div className="weatherForecast">
                <h3>{formatHours(new Date(weather.dt * 1000))}</h3>
              </div>
              <div className="weatherForecastIcon">
                <WeatherForecastIcon code={weather.weather[0].icon} />
              </div>
              <div className="weatherForecastTemperature">
                {Math.round(weather.main.temp)} °C
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecastTemperature);
    return null;
  }
}
