import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=3a94f3778290bfeee61278505dbbe51d&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
