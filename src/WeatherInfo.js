import React from "react";
import PresentDate from "./PresentDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentDateWeather">
        <p>
          <PresentDate date={props.data.date} />
          <span> {props.data.description}</span>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="currentCityName">
            <div className="city">
              <h1>{props.data.city}</h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="currentCityTemperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weatherIcon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col-6">
          <div className="weatherData">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Pressure: {props.data.pressure} mb</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
