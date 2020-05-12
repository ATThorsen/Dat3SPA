import React, { useState, useEffect } from "react";

import {Line} from 'react-chartjs-2';
import allData from './SearchResult'
import SearchResult from "./SearchResult";

var createReactClass = require('create-react-class');


const data = {
  labels: ["januar", 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [0, 59, 80, 81, 56, 55, 40]
    }
  ]
};





export default  createReactClass({
  displayName: 'WeatherChart',

  


  render() {

    
    console.log("etest")
      console.log({allData})
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
});
