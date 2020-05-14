import React, { useState, useEffect } from "react";

import {Line} from 'react-chartjs-2';

import {covidChartData} from "./SearchResult";

var createReactClass = require('create-react-class');
var i = 0; 


export default  createReactClass({
  displayName: 'CovidChart',
  render() {
  var confirmed = []; 
  var recovered = []; 
  var deaths = []; 
  var active = []; 
  var day=[];

  let daystring = covidChartData[0].Date.slice(8,10) + "-"+ covidChartData[0].Date.slice(6,8)+"-"+ covidChartData[0].Date.slice(2,4)
  day.push(daystring)
	for ( i = 0; i < covidChartData.length; i++) {
    
		day.push(i);
    confirmed.push(covidChartData[i].Confirmed)
    recovered.push(covidChartData[i].Recovered)
    deaths.push(covidChartData[i].Deaths)
    active.push(covidChartData[i].Active)
  }

      const data = {
        labels: day, 
        datasets: [
          {
            label: 'Confirmed',
            fill: false,
            lineTension: 0.0001,
            backgroundColor: 'rgba(75,192,192)',
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
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
            data: confirmed
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0.0001,
            backgroundColor: 'rgba(192,75,75)',
            borderColor: 'rgba(222,234,38)',
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
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
            data: recovered
          },{
            label: 'Deaths',
            fill: false,
            lineTension: 0.0001,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(192,75,75)',
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
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
            data: deaths
          },
          {
            label: 'Active',
            fill: false,
            lineTension: 0.0001,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(21,242,13)',
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
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
            data: active
          }
        ]

      }

    return (
      <div>
        <h2>Covid</h2>
        <Line data={data} />
      </div>
    );
  }
});
