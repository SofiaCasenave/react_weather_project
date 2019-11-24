import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

import "./WeatherProject.css";

export default function WeatherProject() {
  return (
    <div className="WeatherProject">
      <section className="weatherProject">
        <div className="row">
          <div className="col-7">
            <div className="searchEngine">
              <form>
                <input
                  type="search"
                  placeholder=" Search City"
                  autoFocus="on"
                  autoComplete="off"
                />
                <button type="submit" value="Search">
                  <i className="fas fa-search" />
                </button>
                <button type="submit" value="Search">
                  <i className="fas fa-map-marker-alt" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-5">
            <h1 className="appName">
              <strong>horizon|</strong>METEO
            </h1>
          </div>
        </div>
        <div className="cities">
          <a href="/">London</a>
          <a href="/">Venice</a>
          <a href="/">New York</a>
          <a href="/">Toronto</a>
          <a href="/">Sydney</a>
        </div>
        <hr className="lineDivider" />
        <div className="illustration">
          <img
            src="https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?cs=srgb&dl=architecture-buildings-city-220444.jpg&fm=jpg"
            alt="Man standing on white concrete surface"
            className="float-right"
          />
        </div>
        <div className="currentDateWeather">
          <p>
            <span>Saturday, 9 November 2019 | 16:27 |</span>
            <span> Cloudy</span>
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="currentCityName">
              <div className="city">
                <h1>Lisbon</h1>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="currentCityTemperature">
              <div className="weatherTemperature">
                <span>16</span>
                <span className="weatherUnit">
                  <a href="/" className="active">
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
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Cloud Icon"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="weatherData">
              <ul>
                <li>Humidity: 72%</li>
                <li>Wind: 10 km/h</li>
                <li>Pressure: 1021 mb</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="lineDivider" />
        <WeatherForecast />
        <div className="identification">
          <footer>
            GitHub{" "}
            <a
              className="githubRepo"
              href="https://github.com/SofiaCasenave/react_weather_project"
              target="_blank"
            >
              open-sourced
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://naughty-turing-b5288e.netlify.com/"
              target="_blank"
            >
              Netlify
            </a>
            <span className="author">
              {" "}
              | 2019 | coded by{" "}
              <a
                href="https://www.linkedin.com/in/sofiacasenave"
                target="_blank"
              >
                <strong>Sofia Casenave</strong>
              </a>
            </span>
          </footer>
        </div>
      </section>
    </div>
  );
}
