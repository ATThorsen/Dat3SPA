import React, { useState, useEffect } from "react";

import "./style.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import SearchResult from "./SearchResult";

export default function GeoInfo() {
  const URL = "http://localhost:8080/dat3";

  const options = facade.makeOptions("GET", true);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  

  async function getData(param) {
    const options = facade.makeOptions("GET", true);
    try {
      const response = await fetch(URL + "/api/all/info/" + param, options);
      const json = await response.json();
      setAllData(json);
      if(response.status === 200){
        setIsFetched(true);
        console.log(json)
      }
      
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="backgroundColorWhite">
      
      <h3 className="title">Search for City</h3>
      <input className="searchBar"
        type="text" 
        value={search}
         onChange={handleSearch}
        placeholder="City"
      ></input>
      <button className="SearchClick"
        onClick={(event) => {
          event.preventDefault();
          getData(search);
          setIsClicked(true);
        }}
      >
        Search
      </button>
      {isClicked? <h3>Please wait while we find your data</h3> : <h3></h3>}
      {isFetched ? <SearchResult allData={allData} /> : <h1></h1>}
    </div>
  );
}
