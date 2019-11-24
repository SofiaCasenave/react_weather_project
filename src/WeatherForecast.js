import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="weatherForecast">
          <h3>03:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">14 ºC</div>
      </div>
      <div className="col-2">
        <div className="weatherForecast">
          <h3>06:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">13 ºC</div>
      </div>
      <div className="col-2">
        <div className="weatherForecast">
          <h3>09:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">15 ºC</div>
      </div>
      <div className="col-2">
        <div className="weatherForecast">
          <h3>12:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">18 ºC</div>
      </div>
      <div className="col-2">
        <div className="weatherForecast">
          <h3>15:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">17 ºC</div>
      </div>
      <div className="col-2">
        <div className="weatherForecast">
          <h3>18:00</h3>
        </div>
        <div className="weatherForecastIcon">
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Cloud Icon"
          ></img>
        </div>
        <div className="weatherForecastTemperature">16 ºC</div>
      </div>
    </div>
  );
}
