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
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function getLocalTemp(lat, lon) {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getLocalTemp(latitude, longitude);
  }

  function getCurrentGps() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    getCurrentGps();
  }

  function suggestedCity1(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function suggestedCity2(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Venice,it&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function suggestedCity3(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function suggestedCity4(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function suggestedCity5(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherProject">
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
                <button
                  type="submit"
                  value="Search"
                  onClick={getCurrentPosition}
                >
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
          <button className="exampleCity" onClick={suggestedCity1}>
            London
          </button>
          <button className="exampleCity" onClick={suggestedCity2}>
            Venice
          </button>
          <button className="exampleCity" onClick={suggestedCity3}>
            New York
          </button>
          <button className="exampleCity" onClick={suggestedCity4}>
            Toronto
          </button>
          <button className="exampleCity" onClick={suggestedCity5}>
            Sydney
          </button>
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
        <WeatherForecast city={weatherData.city} />
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
      </div>
    );
  } else {
    search();
    return (
      <div className="weatherProject">
        <div className="loader">
          <Loader type="Oval" color="#127fce" height={100} width={100} />
        </div>
        <hr className="lineDivider" />
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
      </div>
    );
  }
}
