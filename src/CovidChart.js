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
	var dayString;
	var confirmedString;
	for ( i = 0; i < covidChartData.length; i++) {
		day.push(i);
		confirmed.push(covidChartData[i].Confirmed)
		
		dayString = day.join()
		confirmedString = confirmed.join()
		
	}
	console.log(confirmed.length)
	console.log(day.length)
      const data = {
        labels: [1,2,3,4], 
        datasets: [
          {
            label: 'Confirmed',
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
            data: [confirmedString]
          }
        ]
      };

    return (
      <div>
        <h2>Covid</h2>
        <Line data={data} />
      </div>
    );
  }
});
