import React, { useState, useEffect } from "react";

import {Line} from 'react-chartjs-2';
import "./style.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import ourChart from "./WeatherChart";
import WeatherData from "./weatherChart2";
import CovidData from "./CovidChart"

export var weatherChartData; 
export var covidChartData;



export default function SearchResult({ allData }) {
  const { OpenCageDTO, weatherDTO, NASADTO, CovidDTO } = allData;
  console.log("This is data in Search Results" + NASADTO);
  console.log(CovidDTO);
  weatherChartData = weatherDTO.daily; 
  covidChartData = CovidDTO;




  return (
    <div className="backgroundColorWhite">
      <div id="satImg" className="SatImage">
      <h2>Satelite image of {weatherDTO.timezone}</h2>
        <img
          height="500"
          width="500"
          src={`data:image/jpeg;base64,${NASADTO.img}`}
        />
      </div>
      <div  className="weatherGraph">   
       <WeatherData data= {weatherDTO.daily} /> 
       </div>
      <br></br>
       <div className="covidGraph" >   
       <CovidData data= {CovidDTO} /> 
       </div>
   <div id="weatherData">
        
    
        <div id="currentWeather" className="WeatherData">
        <h1>Weather Data for {weatherDTO.timezone}</h1>
          
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





// function WeatherData({ weatherDTO }) {
//   const { weather } = weatherDTO;
//   console.log("This is WeatherData comp" + weather);

//   return (
//     <div>
//       <h1>Weather Data for {weather}</h1>
//       <h3>Current Weather</h3>
      
//       <div></div>
//     </div>
//   );
// }

