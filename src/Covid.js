import React, { useState, useEffect } from "react";



import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default Covid;

function Covid() {
  const [active, setActive] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();

  function getCovidInfo() {
    let spot = document.getElementById("spotID").value; 
    let options = facade.makeOptions("GET", true)
    fetch("http://localhost:8080/dat3/api/all/info/"+ spot, options)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        if(data.code != "403") {
           // setActive(data.covidDTO[0].Active);
            console.log(data.CovidDTO[0].Active)
            // setRecovered(data.Recovered);
            // setDeaths(data.Deaths);
            covidNumbers();
        }
      });
  }

  function covidNumbers() {
    return active ? (
      <>
        <h1>Covid info:</h1>
        <h4>Active cases: {active}</h4>
        <h4>Recovered cases: {recovered}</h4>
        <h4>Deaths : {deaths}</h4>
      </>
    ) : (
      <></>
    );
  }

  return (
    <div className="App">
      <br />
      <input type="text" id="spotID" name="spotName" placeholder="City or country"></input>
      <button onClick={getCovidInfo}>Get Covid Info</button>
      {covidNumbers()}
    </div>
  );
}


// function getPokemonTypes (data) {
   
//   let pokemontype = ""
//   for (let i = 0 ; i < Object.keys(data.types).length ; i++) {  
//     pokemontype = pokemontype + data.types[i].type.name + ", "
//   }
//   return  pokemontype

