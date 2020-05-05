import React, { useState, useEffect } from "react";



import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";



export default function Data() {

  const [covidData, setCovidData] = useState([]);

   function getCovidInfo() {
     console.log("Hej")
    let spot = document.getElementById("spotID").value; 
    let options = facade.makeOptions("GET", true)
    fetch("http://localhost:8080/dat3/api/all/info/"+ spot, options)
      .then((res) => res.json())
      .then((data) => setCovidData(data)
     ); }
    console.log(covidData.CovidDTO); 


  return (
    <div className="App">
      <br />
      <input type="text" id="spotID" name="spotName" placeholder="City or country"></input>
      <button onClick={getCovidInfo}>Get Covid Info</button>
    </div>
  );


}

   function getCovidData (data) {
  
     let covidActive = "";
     for (let i = 0 ; i < Object.keys(data.CovidDTO).length ; i++) {  
        
        console.log(Object.keys(data).length);
        covidActive = covidActive + (data.CovidDTO[i].Active);
        console.log(covidActive);
    }
     return  covidActive

  }
  