import React, { useState, useEffect } from "react";

import "./style.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import ourChart from "./WeatherChart";

export default function SearchResult({ allData }) {
  const { OpenCageDTO, weatherDTO, NASADTO } = allData;
  console.log("This is data in Search Results" + NASADTO);
  let createReactClasss  = ourChart; 
  console.log(createReactClasss )

  return (
    <div className="backgroundColorWhite">
      <div id="satImg">
        <img
          height="500"
          width="500"
          src={`data:image/jpeg;base64,${NASADTO.img}`}
        />
      </div>
      <div id="weatherData">
      <p>{createReactClasss}  </p>
        <h1>Weather Data for {weatherDTO.timezone}</h1>
        <div id="currentWeather">
         
          
          <p>Temp: {weatherDTO.current.temp} Kelvin</p>
          <p>Feels like: {weatherDTO.current.feels_like} Kelvin </p>
          <p>Pressure: {weatherDTO.current.pressure} </p>
          <p>Humidity: {weatherDTO.current.humidity} </p>
          <p>Wind Speed: {weatherDTO.current.humidity} M/S </p>
        </div>

        <div id="dailyWeather"></div>
      </div>
    </div>
  );
}

function WeatherData({ weatherDTO }) {
  const { weather } = weatherDTO;
  console.log("This is WeatherData comp" + weather);

  return (
    <div>
      <h1>Weather Data for {weather}</h1>
      <h3>Current Weather</h3>
      
      <div></div>
    </div>
  );
}
