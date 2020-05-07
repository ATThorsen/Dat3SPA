import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const getData = (param) => {
    const options = facade.makeOptions("GET", true);
    return fetch(URL + "/api/all/info/" + param, options)
      .then((res) => res.json())
      .then((data) => setAllData(data), setIsFetched(true))
      .catch((err) => console.log("UPPS"));
  };

  async function testGetData(param) {
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
    <div className="container">
      <h3>Search for a City to get information</h3>
      <input
        type="text"
        value={search}
         onChange={handleSearch}
        placeholder="City"
      ></input>
      <button
        onClick={(event) => {
          event.preventDefault();
          testGetData(search);
          setIsClicked(true);
        }}
      >
        Search
      </button>
      {isFetched ? <SearchResult allData={allData} /> : <h1>Hmm?</h1>}
    </div>
  );
}
