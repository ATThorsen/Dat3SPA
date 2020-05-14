import React, { useState, useEffect } from "react";

import {Line} from 'react-chartjs-2';
import allData from './SearchResult'
import {weatherChartData} from "./SearchResult";

var createReactClass = require('create-react-class');
var i = 0; 


export default  createReactClass({
  displayName: 'WeatherChart',
  render() {
    var actualdays = []; 
    var tempForDays = []; 
    for ( i = 0; i < weatherChartData.length-1; i++) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let  unixTimeStamp = new Date(weatherChartData[i].dt*1000).getDay() 
    let day1 = days[unixTimeStamp-1]  
    if (day1 == undefined) {
        day1= "Sunday"
    }   
    actualdays.push(day1); 
    tempForDays.push(weatherChartData[i].temp.day)        
    }
      const data = {
        labels: [ "", actualdays[0], actualdays[1], actualdays[2], actualdays[3], actualdays[4], actualdays[5], actualdays[6]], 
        datasets: [
          {
            label: 'Weather Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [tempForDays[0], tempForDays[0], tempForDays[1], tempForDays[2], tempForDays[3], tempForDays[4], tempForDays[5], tempForDays[6]]
          }
        ]
      };

    return (
      <div>
        <h2>Temperature Graph</h2>
        <Line data={data} />
      </div>
    );
  }
});
