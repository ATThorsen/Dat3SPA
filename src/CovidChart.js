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
  var day=[];

	for ( i = 0; i < covidChartData.length; i++) {
		day.push(i);
		confirmed.push(covidChartData[i].Confirmed)
  }

      const data = {
        labels: day, 
        datasets: [
          {
            label: 'Confirmed',
            fill: false,
            lineTension: 0.0001,
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
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 10,
            data: confirmed
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
