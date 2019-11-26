import React from "react";
import PresentDate from "./PresentDate";

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
            <div className="weatherTemperature">
              <span>{Math.round(props.data.temperature)} </span>
              <span className="weatherUnit">
                {" "}
                <a href="/" className="active">
                  {" "}
                  ºC
                </a>{" "}
                | <a href="/">ºF</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weatherIcon">
            <img src={props.data.iconUrl} alt={props.data.description} />
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
