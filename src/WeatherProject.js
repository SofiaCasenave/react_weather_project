import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

import "./WeatherProject.css";

export default function WeatherProject(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure
    });
  }

  function searchCity1(london) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function searchCity2(venice) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Venice,it&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherProject">
        <section className="weatherProject">
          <div className="row">
            <div className="col-7">
              <div className="searchEngine">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder=" Search City"
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCityChange}
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
            <a href="/" onClick={searchCity1}>
              London
            </a>
            <a href="/" onClick={searchCity2}>
              Venice
            </a>
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
          <WeatherInfo data={weatherData} />
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
  } else {
    search();
    return <Loader type="Oval" color="#127fce" height={100} width={100} />;
  }
}
