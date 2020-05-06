import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default function GeoInfo() {
   
  const options  = facade.makeOptions("GET", true);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState();

    function handleSearch(event){
      setSearch(event.target.value);
    }

    function getData(param){
      console.log(param)
      fetch("http://localhost:8080/dat3/api/info/all/"+param,  options)
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log("UPPS"));

    }
    
  
  return (
    <div className="container">

      <h3>Search for a City to get information</h3>
      <input type="text" value={search} onChange={handleSearch} placeholder="City"></input>
      <button onClick={getData(search)}>Search</button></div>)
     
}
  
  